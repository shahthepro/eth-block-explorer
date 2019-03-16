import { Observable, ReplaySubject, concat } from 'rxjs';
import { scan } from 'rxjs/operators';
import Web3 from 'web3';
import { IBlockSubscriptionResponse } from 'src/types';

/**
 * Returns a Observable stream of recent blocks and a method to unsubscribe from the stream
 */
const subscribeToBlocks = (web3: Web3): IBlockSubscriptionResponse => {
  const last10BlocksObservable = getLastMinedBlocksStream(web3);
  const newBlockHeaderObservable = subscribeToNewBlockHeaders(web3);

  // Replaying last 10 blocks. Because by the time, the first observable completes, we may have missed a few new blocks.
  const replayNewBlocksSubject = new ReplaySubject(10);
  const replaySubscription = newBlockHeaderObservable.subscribe(replayNewBlocksSubject);


  const recentBlocksStream = concat(last10BlocksObservable, replayNewBlocksSubject)
    .pipe(
      // Limit to 10 blocks
      scan((blocks, newBlock) => [...blocks, newBlock].slice(-10), [])
    );

  const unsubscribe = () => {
    replaySubscription.unsubscribe();
  }
  
  return {
    stream: recentBlocksStream,
    unsubscribe
  };
};

/**
 * Returns a stream of last 10 blocks. Stream completes after retrieving the last 10 blocks.
 * @param web3 web3 instance
 */
const  getLastMinedBlocksStream = (web3: Web3): Observable<any> => {
  return new Observable(observer => {
    // This function cannot be async or return a promise (http://reactivex.io/rxjs/class/es6/MiscJSDoc.js~TeardownLogicDoc.html)
    // So, wrapping with an anonymous self-invoking `async` function
    (async () => {
      try {
        const latestBlockNumber = await web3.eth.getBlockNumber();
        
        // TODO: Replace the following with a BatchRequest
        for (let i = 0; i < 10; i++) {
          let block: any = await web3.eth.getBlock(latestBlockNumber - 9 + i, false);
          observer.next(block);
        }
    
        observer.complete();
      
      } catch (err) {
        observer.error(err);
      }
    })();
  })
};

/**
 * Returns a stream of new blocks
 * @param web3 web3 instance
 */
const subscribeToNewBlockHeaders = (web3: Web3): Observable<any> => {
  return new Observable(observer => {
    // This function cannot be async or return a promise (http://reactivex.io/rxjs/class/es6/MiscJSDoc.js~TeardownLogicDoc.html)
    // So, wrapping with an anonymous self-invoking `async` function
    (async () => {
      try {
        (await web3.eth.subscribe('newBlockHeaders'))
          .on('data', (block: any) => observer.next(block))
      } catch (err) {
        observer.error(err);
      }
    })();
  });
};


export default subscribeToBlocks;
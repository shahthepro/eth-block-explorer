import { Observable, ReplaySubject, concat } from 'rxjs';
import { scan } from 'rxjs/operators';
import Web3 from 'web3';
import { IBlockSubscriptionResponse, IBlockHeaderSubscriptionResponse, IBlock } from './../types';
import { Subscribe } from 'web3-eth/types';

/**
 * Returns a Observable stream of recent blocks and a method to unsubscribe from the stream
 */
const subscribeToBlocks = async (web3: Web3): Promise<IBlockSubscriptionResponse> => {
  const last10BlocksObservable = getLastMinedBlocksStream(web3);
  const { stream: newBlockHeaderObservable, subscription: newBlockHeaderSubscription } = (await subscribeToNewBlockHeaders(web3));

  // Replaying last 10 blocks. Because by the time, the first observable completes, we may have missed a few new blocks.
  const replayNewBlocksSubject = new ReplaySubject(10);
  const replaySubscription = newBlockHeaderObservable.subscribe(replayNewBlocksSubject);

  const recentBlocksStream = concat(last10BlocksObservable, replayNewBlocksSubject)
    .pipe(
      // Limit to 10 blocks
      scan((blocks: IBlock[], newBlock: IBlock) => {
        const exists = blocks.find((block: IBlock) => block.number === newBlock.number);
        if (exists) {
          return blocks;
        }
        
        return [newBlock, ...blocks].slice(0, 10);
      }, [])
    );

  const unsubscribe = () => {
    if (newBlockHeaderSubscription) {
      // @ts-ignore
      newBlockHeaderSubscription.unsubscribe();
    }
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
const  getLastMinedBlocksStream = (web3: Web3): Observable<IBlock> => {
  return new Observable<IBlock>(observer => {
    // This function cannot be async or return a promise (http://reactivex.io/rxjs/class/es6/MiscJSDoc.js~TeardownLogicDoc.html)
    // So, wrapping with an anonymous self-invoking `async` function
    (async () => {
      try {
        const latestBlockNumber = await web3.eth.getBlockNumber();
        
        // TODO: Replace the following with a BatchRequest
        for (let i = 0; i < 10; i++) {
          let block = await web3.eth.getBlock(latestBlockNumber - 9 + i, false);
          observer.next(block as IBlock);
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
const subscribeToNewBlockHeaders = async (web3: Web3): Promise<IBlockHeaderSubscriptionResponse> => {
  let subscription: Subscribe<IBlock> = await web3.eth.subscribe('newBlockHeaders');

  const stream = new Observable<IBlock>(observer => {
    try {
      subscription.on('data', (block: IBlock) => { observer.next(block); });
    } catch (err) {
      observer.error(err);
    }
  });

  return {
    stream,
    subscription
  }
};


export default subscribeToBlocks;
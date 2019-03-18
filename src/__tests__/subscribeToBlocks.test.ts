jest.mock('rxjs', () => {
  const fakeObservable = () => {
    return {
      subscribe: () => {},
      unsubscribe: () => {},
    }
  };
  const fakeReplaySubject = () => {};
  const fakeConcat = () => {
    return {
      pipe: () => {},
    }
  };
  
  return {
    __esModule: true,
    Observable: fakeObservable,
    ReplaySubject: fakeReplaySubject,
    concat: fakeConcat,
  }
});

jest.mock('rxjs/operators', () => {
  const fakeScan = () => {};
  
  return {
    __esModule: true,
    scan: fakeScan,
  }
});

import subscribeToBlocks from '../lib/subscribeToBlocks';

it('should subscribe to blocks without errors', () => {
  const fakeWeb3 = () => {
    return {
      eth: {
        getBlockNumber: () => new Promise(resolve => resolve(1)),
        // @ts-ignore
        getBlock: (blockNumber, transactions) => {
          return new Promise(resolve => {
            resolve({
              number: blockNumber,
            })
          })
        },
        subscribe: () => {
          return new Promise(resolve => {
            resolve({
              // @ts-ignore
              on: (event, listener) => {},
              unsubscribe: () => {},
            })
          })
        }
      },
      utils: {
        // @ts-ignore
        fromWei: (x, units) => x
      }
    };
  }

  // @ts-ignore
  subscribeToBlocks(fakeWeb3());
})
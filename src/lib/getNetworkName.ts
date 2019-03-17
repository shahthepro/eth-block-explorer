
const getNetworkName = (networkId: number): String => {
  switch (networkId) {
    case 0:
      return 'Testnet';
    case 1:
      return 'Mainnet';
    case 3:
      return 'Ropsten';
    case 4:
      return 'Rinkeby';
    case 42:
      return 'Kovan';
    case 77:
      return 'Sokol';
    case 100:
      return 'xDAI';
  }

  return 'Private/Unknown';
}

export default getNetworkName;
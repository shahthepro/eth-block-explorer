import getNetworkName from '../lib/getNetworkName';

it('should resolve network ID to network name', () => {
    expect(getNetworkName(0)).toBe('Testnet');
    expect(getNetworkName(1)).toBe('Mainnet');
    expect(getNetworkName(3)).toBe('Ropsten');
    expect(getNetworkName(4)).toBe('Rinkeby');
    expect(getNetworkName(42)).toBe('Kovan');
    expect(getNetworkName(77)).toBe('Sokol');
    expect(getNetworkName(100)).toBe('xDAI');
    expect(getNetworkName(1234)).toBe('Private/Unknown');
})
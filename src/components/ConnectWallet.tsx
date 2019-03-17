import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IWalletState } from "src/types";

interface IConnectWalletProps {
  wallet: IWalletState
  children: any
}

const ConnectWallet = ({ wallet, children }: IConnectWalletProps) => {
  if (wallet.isConnected) {
    return <div>
      <button onClick={wallet.disconnect} disabled={!wallet.isConnected && !wallet.isConnecting}>Disconnect</button> 
      { children }
    </div>;
  }

  return <div>
    <button onClick={wallet.connect} disabled={wallet.isConnected || wallet.isConnecting}>Connect</button>
  </div>
};

ConnectWallet.propTypes = {
  wallet: PropTypes.object.isRequired,
};

export default ConnectWallet;
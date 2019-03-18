import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IWalletState } from './../types';
import { Wrapper, Header, Content } from './styles/ContentStyles';
import { Subtitle } from './styles/Typography';
import { SecondaryButton } from './styles/Buttons';
import getNetworkName from './../lib/getNetworkName';

interface IMyWalletProps {
  wallet: IWalletState
}

const MyWallet = function (props: IMyWalletProps) {
  const { wallet } = props;

  if (!wallet.isConnected) {
    return null;
  }
  
  return <Wrapper>
    <Header>My Wallet</Header>
    <Content padded>
        <Subtitle>
          You are connected to {getNetworkName(wallet.networkId!.valueOf())} network with the wallet address <em>{wallet.address}</em>
        </Subtitle>
        <SecondaryButton onClick={wallet.disconnect} disabled={!wallet.isConnected && !wallet.isConnecting}>Disconnect Wallet</SecondaryButton> 
    </Content>
  </Wrapper>
};

MyWallet.propTypes = {
  wallet: PropTypes.object.isRequired
};

export default MyWallet;
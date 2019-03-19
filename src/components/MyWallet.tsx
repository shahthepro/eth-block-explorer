import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IWalletState } from './../types';
import { Wrapper, Header, Content } from './styles/ContentStyles';
import { SecondaryButton, LinkButton } from './styles/Buttons';
import getNetworkName from './../lib/getNetworkName';
import { InfoMessage } from './styles/ErrorStyles';

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
        <InfoMessage>
          <p>You are connected to <LinkButton disabled>{getNetworkName(wallet.networkId!.valueOf())} network</LinkButton>.</p><br/><p>Your wallet address is <LinkButton disabled><em>{wallet.address}</em></LinkButton></p>
        </InfoMessage>
        <SecondaryButton onClick={wallet.disconnect} disabled={!wallet.isConnected && !wallet.isConnecting}>Disconnect Wallet</SecondaryButton> 
    </Content>
  </Wrapper>
};

MyWallet.propTypes = {
  wallet: PropTypes.object.isRequired
};

export default MyWallet;
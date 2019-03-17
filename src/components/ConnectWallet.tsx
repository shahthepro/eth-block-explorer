import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { IWalletState } from "src/types";
import { Title, Subtitle } from 'src/components/styles/Typography';
import { PrimaryButton, SecondaryButton } from 'src/components/styles/Buttons';
import { ErrorMessage } from './styles/ErrorStyles';
import getNetworkName from 'src/lib/getNetworkName';

interface IConnectWalletProps {
  wallet: IWalletState
  children: any
}

const ConnectWalletWrapper = styled.div`
  padding: 2rem;
`;

const ConnectWallet = ({ wallet, children }: IConnectWalletProps) => {
  if (wallet.isConnected) {
    return <ConnectWalletWrapper>
      <Title>My Wallet</Title>
      <Subtitle>
        You are connected to {getNetworkName(wallet.networkId!.valueOf())} network with the wallet address <em>{wallet.address}</em>
      </Subtitle>
      <SecondaryButton onClick={wallet.disconnect} disabled={!wallet.isConnected && !wallet.isConnecting}>Disconnect Wallet</SecondaryButton> 
      { children }
    </ConnectWalletWrapper>;
  }

  return <ConnectWalletWrapper>
    <Title>Hey there!</Title>
    <Subtitle>Connect your software wallet to explore recent blocks</Subtitle>
    {
      wallet.lastConnectionError &&
      <ErrorMessage>{ wallet.lastConnectionError }</ErrorMessage>
    }
    <PrimaryButton onClick={wallet.connect} disabled={wallet.isConnected || wallet.isConnecting}>Connect Wallet</PrimaryButton>
  </ConnectWalletWrapper>
};

ConnectWallet.propTypes = {
  wallet: PropTypes.object.isRequired,
};

export default ConnectWallet;
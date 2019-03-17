import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { IWalletState } from "src/types";
import { Title, Subtitle } from 'src/components/styles/Typography';
import { PrimaryButton } from 'src/components/styles/Buttons';
import { ErrorMessage } from './styles/ErrorStyles';
// import getNetworkName from 'src/lib/getNetworkName';

interface IConnectWalletProps {
  wallet: IWalletState
  children: any
}

const ConnectWalletWrapper = styled.div`
  padding: 2rem;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
`;

const ConnectWallet = ({ wallet, children }: IConnectWalletProps) => {
  if (wallet.isConnected) {
    return children;
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
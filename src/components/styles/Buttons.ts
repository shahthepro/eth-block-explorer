import styled from 'styled-components';

interface IButtonStyleProps {
  small?: boolean
}

const ButtonStyle = styled.button<IButtonStyleProps>`
  background-color: rgba(0, 122, 255, 1);
  color: #fff;
  border: 0;
  padding: ${props => props.small ? '0.6rem' : '1rem'};
  font-size: ${props => props.small ? '0.8rem' : '1rem'};
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 122, 255, 0.8);
  }

  &:disabled {
    background-color: #ccc;
    color: #888;
  }
`;

const PrimaryButton = styled(ButtonStyle)`
  background-color: rgba(0, 122, 255, 1);

  &:hover {
    background-color: rgba(0, 122, 255, 0.8);
  }
`;

const LinkButton = styled(ButtonStyle)`
  background-color: transparent;
  color: rgba(0, 122, 255, 1);
  padding: 0;
  text-decoration: underline;

  &:hover {
    background-color: transparent;
    color: rgba(0, 122, 255, 0.8);    
  }

  &:disabled {
    cursor: default;
    background-color: transparent;
    color: rgba(122, 122, 122, 1);
  }
`;

const SecondaryButton = styled(ButtonStyle)`
  background-color: rgba(255, 122, 0, 1);
  &:hover {
    background-color: rgba(255, 122, 0, 0.8);
  }
`;

export {
  PrimaryButton,
  SecondaryButton,
  LinkButton
}
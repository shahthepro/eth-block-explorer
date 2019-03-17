import styled from 'styled-components';

const PrimaryButton = styled.button`
  background-color: rgba(0, 122, 255, 1);
  color: #fff;
  border: 0;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 122, 255, 0.8);
  }

  &:disabled {
    background-color: #ccc;
    color: #888;
  }
`;

const SecondaryButton = styled.button`
  background-color: rgba(255, 122, 0, 1);
  color: #fff;
  border: 0;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 122, 0, 0.8);
  }

  &:disabled {
    background-color: #ccc;
    color: #888;
  }
`;

export {
  PrimaryButton,
  SecondaryButton
}
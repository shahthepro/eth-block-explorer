import styled from 'styled-components';

const MessageStyle = styled.div`
  padding: 1rem;
  background: white;
  margin: 1rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

const InfoMessage = styled(MessageStyle)`
  border-left: 5px solid rgb(0, 122, 255);
`;

const ErrorMessage = styled(MessageStyle)`
  border-left: 5px solid red;
`;

export {
  InfoMessage,
  ErrorMessage
}
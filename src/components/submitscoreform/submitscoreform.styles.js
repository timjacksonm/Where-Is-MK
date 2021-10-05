import styled from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  margin: 0 auto;
  top: 25vh;
  padding: 1em;
  z-index: 1;
  background-color: #ff9f00;
  border: 0.2em solid #000;
  padding-bottom: 1.5em;
  border-radius: 0.5em;
  width: 50%;
  max-width: 22em;
  hegiht: auto;
`;
export const CloseButton = styled(IoIosCloseCircle)`
  padding: 0.5em;
  justify-self: end;
  align-self: end;
  position: absolute;
  top: 0;
  right: 0;
  color: #000;
  &:hover {
    color: #ea1a30;
    transform: scale(1.2);
  }
`;
export const Name = styled.div`
  text-align: center;
  width: 100%;
`;
export const Title = styled.div`
  text-align: center;
  padding: 2em 0 1em;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextInput = styled.input`
  margin: 1em;
  line-height: 1.75em;
`;
export const SubmitBtn = styled.button`
  background-color: #000;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto', system-ui, 'Segoe UI', 'Liberation Sans', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.167;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  &:hover {
    background-color: #006400;
  }
`;

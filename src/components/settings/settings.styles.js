import styled from 'styled-components';
import { device } from '../../globalHelpers';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';

export const SettingsContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 1px;
  font-size: 1.2em;
`;
export const ChoicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5em auto;
`;
export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75em;
  width: 20%;
  height: 100%;
  flex: 1;
  border-right: ${({ divider }) => divider && '0.2em solid #b27c23'};
`;
export const Title = styled.h4`
  margin: 0;
  align-self: center;
  text-align: center;
  min-width: 12em;
  color: ${({ checked }) =>
    Object.values(checked).some((value) => value === true)
      ? '#ff9f00'
      : '#b27c23'};
`;
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
export const Description = styled.p`
  flex: 1;
  text-align: center;
`;
// unchecked #b27c23 checked #ea1a30
export const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
export const Unchecked = styled(MdRadioButtonUnchecked)`
  height: 1.5em;
  width: 1.5em;
  padding: 1em 1em 1em 1.5em;
  color: #b27c23;
`;
export const Checked = styled(MdRadioButtonChecked)`
  width: 1.5em;
  height: 1.5em;
  padding: 1em 1em 1em 1.5em;
  color: #ea1a30;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
export const Start = styled.button`
  align-self: center;
  width: 50%;
  max-width: 200px;
  background-color: #ff9f00;
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
    background-color: #ea1a30;
  }
`;
export const Alert = styled.div`
  text-align: center;
  font-size: 0.65em;
  color: #ea1a30;
  padding-bottom: 0.2em;
`;

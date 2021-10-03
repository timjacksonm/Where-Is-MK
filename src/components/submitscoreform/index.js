import React, { useState } from 'react';
import { storeScoreToDb } from '../../firebase';
import {
  ModalContainer,
  Name,
  Title,
  TextInput,
  SubmitBtn,
  CloseButton,
  FormContainer,
} from './submitscoreform.styles';

const SubmitScoreForm = ({
  redirectToLeaderboard,
  setOpenForm,
  time,
  timeLimit,
  amountToFind,
}) => {
  const [input, setInput] = useState({ value: '' });

  const handleChange = (e) => {
    setInput({ value: e.target.value });
  };

  const handleClose = () => {
    setOpenForm(false);
    redirectToLeaderboard();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    storeScoreToDb(`${timeLimit}${amountToFind}`, e.target[0].value, time);
    handleClose();
  };

  return (
    <ModalContainer>
      <CloseButton size="1.75em" onClick={handleClose} />
      <Title>Would you like to submit your time?</Title>
      <FormContainer onSubmit={handleSubmit}>
        <Name>
          Name:
          <TextInput
            type="text"
            onChange={handleChange}
            value={input.value}
            maxLength="16"
            required
          />
        </Name>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </FormContainer>
    </ModalContainer>
  );
};

export default SubmitScoreForm;

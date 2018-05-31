// @flow

import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import Prompt from '../Prompt/Prompt';
import Terminal from '../Terminal/Terminal';

const Step = {
  PROMPT: Symbol(),
  CONNECT: Symbol(),
};

const makeStep = (id: Symbol, payload: any = null) => ({ id, payload });

const Wizard = ({ step, handleForm, handleError, handleDisconnect }) => {
  switch (step.id) {
    case Step.PROMPT:
      return <Prompt onSubmit={handleForm} />;
    case Step.CONNECT:
      return <Terminal {...step.payload} onError={handleError} onDisconnect={handleDisconnect} />;
    default:
      return null;
  }
};

export default compose(
  withState('step', 'setStep', makeStep(Step.PROMPT)),
  withHandlers({
    handleForm: ({ setStep }) => ({ host, username, password }) => {
      setStep(makeStep(Step.CONNECT, { host, username, password }));
    },
    handleError: () => (err) => {},
    handleDisconnect: ({ setStep }) => () => {
      setStep(makeStep(Step.PROMPT));
    },
  }),
)(Wizard);

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

const Wizard = ({ step, handleForm }) => {
  switch (step.id) {
    case Step.PROMPT:
      return <Prompt onSubmit={handleForm} />;
    case Step.CONNECT:
      return <Terminal {...step.payload} />;
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
  }),
)(Wizard);

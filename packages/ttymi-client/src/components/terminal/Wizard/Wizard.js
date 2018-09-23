// @flow
import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import Prompt from '../Prompt/Prompt';
import Terminal from '../Terminal/Terminal';
import Error from '../Error/Error';

const Step = {
  PROMPT: Symbol(),
  CONNECT: Symbol(),
  ERROR: Symbol(),
};

const makeStep = (id: Symbol, payload: any = null) => ({ id, payload });

const Wizard = ({ step, handleForm, handleError, handleDisconnect }) => {
  switch (step.id) {
    case Step.PROMPT:
      return <Prompt {...step.payload} onSubmit={handleForm} />;
    case Step.CONNECT:
      return <Terminal {...step.payload} onError={handleError} onDisconnect={handleDisconnect} />;
    case Step.ERROR:
      return <Error {...step.payload} />;
    default:
      return null;
  }
};

export default compose(
  withState('step', 'setStep', makeStep(Step.PROMPT, {})),
  withHandlers({
    handleForm: ({ setStep }) => ({ host, username, password }) => {
      setStep(makeStep(Step.CONNECT, { host, username, password }));
    },
    handleError: ({ setStep }) => (error) => {
      setStep(makeStep(Step.ERROR, { error }));
    },
    handleDisconnect: ({ setStep }) => ({ code, reason }) => {
      switch (code) {
        case 4500:
          setStep(makeStep(Step.ERROR, { reason }));
          break;

        default:
          setStep(({ payload: { host, username } }) => makeStep(Step.PROMPT, { host, username }));
      }

    },
  }),
)(Wizard);

import { useReducer, useCallback } from 'react';

// Validators
export const checkEmail = (email) => {
  return email.includes('@');
};

export const checkPassword = (password) => {
  return password.length > 6;
};

const validators = {
  email: checkEmail,
  password: checkPassword,
};

// Reducer
export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_INPUT': {
      return { ...state, value: payload, isValid: validators[state.type](payload) };
    }
    case 'INPUT_BLUR': {
      return { ...state, isTouched: true };
    }
    default: {
      return state;
    }
  }
};

// InitialInputs
//let input = { type: 'email', name: 'myEmail' };

// Hook
export const useInput = (initialInput) => {
  const initialState = {
    type: initialInput.type,
    name: initialInput.name,
    isValid: false,
    isTouched: false,
    value: '',
  };

  const [inputState, dispatch] = useReducer(formReducer, initialState);

  const inputChanged = useCallback(
    (value) => {
      // @ts-ignore
      dispatch({ type: 'UPDATE_INPUT', payload: value });
    },
    [dispatch]
  );

  const inputBlur = useCallback(() => {
    // @ts-ignore
    dispatch({ type: 'INPUT_BLUR' });
  }, [dispatch]);

  return {
    value: inputState.value,
    isValid: inputState.isValid,
    isTouched: inputState.isTouched,
    inputBlur,
    inputChanged,
  };
};

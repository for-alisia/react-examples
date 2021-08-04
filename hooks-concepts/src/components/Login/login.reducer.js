// Validators

export const checkEmail = (email) => {
  return email.includes('@');
};

export const checkPassword = (password) => {
  return password.length > 6;
};

// Actions
export const inputUpdateAction = (value) => {
  return {
    type: 'UPDATE_INPUT',
    payload: value,
  };
};

export const inputBlurAction = () => {
  return {
    type: 'INPUT_BLUR',
  };
};

// Reducer
export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_INPUT': {
      return { ...state, value: payload, isValid: state.validation(payload) };
    }
    case 'INPUT_BLUR': {
      return { ...state, isTouched: true };
    }
    default: {
      return state;
    }
  }
};

// Hook

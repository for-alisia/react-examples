import { useState } from 'react';

const useInput = (validator) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validator(value);
  const hasError = !isValid && isTouched;

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setValue('');
    setIsTouched(false);
  };

  return { value, isValid, hasError, onChange, onBlur, resetInput };
};

export default useInput;

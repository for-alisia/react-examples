import useInput from '../hooks/useInput';

const validatorName = (value) => {
  return value.trim().length > 2;
};

const validatorEmail = (value) => {
  return value.includes('@');
};

const SimpleInput = () => {
  const name = useInput(validatorName);
  const email = useInput(validatorEmail);

  const formIsValid = name.isValid && email.isValid;

  const submitHandler = (e) => {
    e.preventDefault();

    if (formIsValid) {
      // submit form here
      console.log('submit the form');
      name.resetInput();
      email.resetInput();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${name.hasError && 'invalid'}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name.value}
          onChange={name.onChange}
          onBlur={name.onBlur}
        />
        {name.hasError && <p className="error-text">Name should be at least 3 characters long</p>}
      </div>
      <div className={`form-control ${email.hasError && 'invalid'}`}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
        />
        {email.hasError && <p className="error-text">Provide a correct email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

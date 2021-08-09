import useInput from '../hooks/useInput';

const BasicForm = () => {
  const name = useInput((val) => val.trim().length > 2);
  const surname = useInput((val) => val.trim() !== '');
  const email = useInput((val) => val.includes('@'));

  const formIsValid = name.isValid && email.isValid && surname.isValid;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    console.log('Form is submitted');
    name.resetInput();
    surname.resetInput();
    email.resetInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${name.hasError && 'invalid'}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={name.value}
            onChange={name.onChange}
            onBlur={name.onBlur}
          />
          {name.hasError && <p className="error-text">Name should have 3 characters and more</p>}
        </div>
        <div className={`form-control ${surname.hasError && 'invalid'}`}>
          <label htmlFor="surname">Last Name</label>
          <input
            type="text"
            id="surname"
            value={surname.value}
            onChange={surname.onChange}
            onBlur={surname.onBlur}
          />
          {surname.hasError && <p className="error-text">Surname should not be empty</p>}
        </div>
      </div>
      <div className={`form-control ${email.hasError && 'invalid'}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
        />
        {email.hasError && <p className="error-text">Provide correct email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

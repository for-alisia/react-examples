// @ts-nocheck
import { useRef } from 'react';
import classes from './profile-form.module.css';

function ProfileForm({ onChangePassword }) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const oldPassword = oldPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;

    // Add validation

    onChangePassword({ oldPassword, newPassword });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;

import Link from 'next/link';
// @ts-ignore
import classes from './Button.module.css';

const Button = ({ link, children }) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <a className={classes.btn}>{children}</a>
        </Link>
      ) : (
        <button className={classes.btn} type="submit">
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

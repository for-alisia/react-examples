// @ts-nocheck
import Button from '../ui/Button';
import classes from './events-serach.module.css';
import { useRef } from 'react';

const EventsSearch = ({ onSearch }) => {
  const yearRef = useRef();
  const monthRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;
    onSearch(selectedYear, selectedMonth);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <Button>Find</Button>
      </div>
    </form>
  );
};

export default EventsSearch;

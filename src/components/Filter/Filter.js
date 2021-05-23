import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filteredContact } from '../../redux/Contacts/contacts-actions';
import { getFilterValue } from '../../redux/Contacts/contacts-selectors';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  filter: {
    marginBottom: '20px',
  },
  input: {
    padding: '5px',
    outline: 'none',
    '&:focus': {
      border: ['2px', 'solid', 'gray'],
      boxShadow: [
        'inset',
        '0px',
        '0px',
        '3px',
        '3px',
        'rgba(75, 142, 187, 0.34)',
      ],
    },
  },
});

const Filter = () => {
  const classes = useStyles();
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  return (
    <div className={classes.filter}>
      <h3 className={classes.titel}>Find contacts by name</h3>
      <input
        className={classes.input}
        type="text"
        placeholder="Search contact"
        name="filter"
        value={value}
        onChange={e => dispatch(filteredContact(e.target.value))}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
};

export default Filter;

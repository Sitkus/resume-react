import useStyles from './Select.style';

function Select({ options = [], changeLanguage }) {
  const classes = useStyles();

  return (
    <select onChange={changeLanguage} name="language" className={classes.select}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}

export default Select;

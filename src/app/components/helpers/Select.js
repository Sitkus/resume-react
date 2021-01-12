import useStyles from './helpers.style';

function Select({ options = [], title }) {
  const classes = useStyles();

  return (
    <select name="language" className={classes.select}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}

export default Select;

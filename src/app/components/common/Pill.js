import useStyles from './common.style';

function Pill({ children, className }) {
  const classes = useStyles();
  const classNameIsSet = typeof className === 'string';

  return (
    <li className={classes.skillsItem}>
      <p className={`${classes.skill} ${classNameIsSet ? className : classes.skillDefault}`}>
        {children}
      </p>
    </li>
  );
}

export default Pill;

import useStyles from './Pill.style';

function Pill({ children, levelClass }) {
  const classes = useStyles();
  const levelClassIsSet = typeof levelClass === 'string';

  return (
    <li className={classes.skillsItem}>
      <p className={`${classes.skill} ${levelClassIsSet ? levelClass : classes.skillDefault}`}>
        {children}
      </p>
    </li>
  );
}

export default Pill;

import useStyles from './Pill.style';

function Pill({ children, className, level }) {
  const classes = useStyles();
  let setLevel = '';

  switch (level) {
    case 'Pro':
      setLevel = classes.skillPro;
      break;

    case 'Adv':
      setLevel = classes.skillAdv;
      break;

    case 'New':
      setLevel = classes.skillNew;
      break;

    default:
      setLevel = classes.skillDefault;
      break;
  }

  return (
    <li className={classes.skillsItem}>
      <p className={`${classes.skill} ${setLevel}`}>{children}</p>
    </li>
  );
}

export default Pill;

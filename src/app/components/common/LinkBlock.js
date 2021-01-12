import useStyles from './common.style';

function LinkBlock({ children, link, title }) {
  const classes = useStyles();

  return (
    <li className={classes.link}>
      {children}
      <a href={link} target="_blank">
        {title}
      </a>
    </li>
  );
}

export default LinkBlock;

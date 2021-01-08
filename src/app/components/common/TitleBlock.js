import useStyles from './TitleBlock.style';

function TitleBlock({ children, boxClass }) {
  const classes = useStyles();

  return <h2 className={`${classes.title} ${boxClass}`}>{children}</h2>;
}

export default TitleBlock;

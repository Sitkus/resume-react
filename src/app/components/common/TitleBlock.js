import useStyles from './TitleBlock.style';

function TitleBlock({ children, className }) {
  const classes = useStyles();

  return <h2 className={`${classes.title} ${className}`}>{children}</h2>;
}

export default TitleBlock;

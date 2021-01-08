import useStyles from './TitleBox.style';

function TitleBox({ children, boxClass }) {
  const classes = useStyles();

  return <h2 className={`${classes.title} ${boxClass}`}>{children}</h2>;
}

export default TitleBox;

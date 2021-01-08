import useStyles from './ContentBox.style';
import { HorizontalDivider } from '../helpers';

function ContentBox({ children, title, boxClass }) {
  const classes = useStyles();

  return (
    <article className={boxClass}>
      <h3 className={classes.title}>{title}</h3>
      <HorizontalDivider />
      {children}
    </article>
  );
}

export default ContentBox;

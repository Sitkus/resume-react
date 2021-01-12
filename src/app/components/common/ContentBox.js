import useStyles from './common.style';
import { HorizontalDivider } from '../helpers';

function ContentBox({ children, title, className }) {
  const classes = useStyles();

  return (
    <article className={className}>
      <h3 className={classes.contentBoxTitle}>{title}</h3>
      <HorizontalDivider />
      {children}
    </article>
  );
}

export default ContentBox;

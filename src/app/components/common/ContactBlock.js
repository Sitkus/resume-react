import useStyles from './ContactBlock.style';
import { TitleBlock } from '../common';

function ContactBlock({ children, title }) {
  const classes = useStyles();

  return (
    <li className={classes.item}>
      <TitleBlock className={classes.itemTitle}>{title}</TitleBlock>
      {children}
    </li>
  );
}

export default ContactBlock;

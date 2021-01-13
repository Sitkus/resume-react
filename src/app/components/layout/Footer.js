import useStyles from './index.style';
import { ContactBlock } from '../common';

function Header() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <ul className={classes.list}>
        <ContactBlock title="Address">
          <p>Imaginary St. 32</p>
          <p>Vilnius, Narnia</p>
        </ContactBlock>

        <ContactBlock title="Address">
          <a className={classes.itemLink} href="tel:+37012345678">
            +370 (123) 456 78
          </a>
          <a className={classes.itemLink} href="mailto:lukas@sitkus.com">
            lukas@sitkus.com
          </a>
        </ContactBlock>

        <ContactBlock title="Address">
          <a className={classes.itemLink} target="_blank" href="/">
            Linkedin / username
          </a>
          <a className={classes.itemLink} target="_blank" href="/">
            Twitter / @user-handle
          </a>
        </ContactBlock>
      </ul>
    </footer>
  );
}

export default Header;

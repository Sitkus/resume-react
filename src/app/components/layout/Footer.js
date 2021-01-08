import useStyles from './Footer.style';
import { TitleBlock } from '../common';

function Header() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <TitleBlock boxClass={classes.itemTitle}>Address</TitleBlock>
          <p>Imaginary St. 32</p>
          <p>Vilnius, Narnia</p>
        </li>

        <li className={classes.item}>
          <TitleBlock boxClass={classes.itemTitle}>Contact</TitleBlock>
          <a className={classes.itemLink} href="tel:+37012345678">
            +370 (123) 456 78
          </a>
          <a className={classes.itemLink} href="mailto:lukas@sitkus.com">
            lukas@sitkus.com
          </a>
        </li>

        <li className={classes.item}>
          <TitleBlock boxClass={classes.itemTitle}>Social</TitleBlock>
          <a className={classes.itemLink} target="_blank" href="/">
            Linkedin / username
          </a>
          <a className={classes.itemLink} target="_blank" href="/">
            Twitter / @user-handle
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Header;

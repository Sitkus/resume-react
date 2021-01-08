import useStyles from './Footer.style';
import TitleBox from '../../TitleBox/TitleBox';

function Header() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <TitleBox boxClass={classes.itemTitle}>Address</TitleBox>
          <a className={classes.itemLink} href="/">
            Imaginary St. 32
          </a>
          <a className={classes.itemLink} href="/">
            Vilnius, Narnia
          </a>
        </li>

        <li className={classes.item}>
          <TitleBox boxClass={classes.itemTitle}>Contact</TitleBox>
          <a className={classes.itemLink} href="/">
            +370 (493) 345 23
          </a>
          <a className={classes.itemLink} href="/">
            email@test.dev
          </a>
        </li>

        <li className={classes.item}>
          <TitleBox boxClass={classes.itemTitle}>Social</TitleBox>
          <a className={classes.itemLink} href="/">
            Linkedin / username
          </a>
          <a className={classes.itemLink} href="/">
            Twitter / @user-handle
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Header;

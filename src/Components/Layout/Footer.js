import useStyles from './Footer.style';

function Header() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <h3 className={classes.itemTitle}>Address</h3>
          <a className={classes.itemLink} href="/">
            Imaginary St. 32
          </a>
          <a className={classes.itemLink} href="/">
            Vilnius, Narnia
          </a>
        </li>

        <li className={classes.item}>
          <h3 className={classes.itemTitle}>Contact</h3>
          <a className={classes.itemLink} href="/">
            +370 (493) 345 23
          </a>
          <a className={classes.itemLink} href="/">
            email@test.dev
          </a>
        </li>

        <li className={classes.item}>
          <h3 className={classes.itemTitle}>Social</h3>
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

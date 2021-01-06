import useStyles from './Footer.style';

function Header() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <h3 className={classes.itemTitle}>Address</h3>
          <p>Imaginary St. 32</p>
          <p>Vilnius, Narnia</p>
        </li>

        <li className={classes.item}>
          <h3 className={classes.itemTitle}>Contact</h3>
          <p>+370 (493) 345 23</p>
          <p>email@test.dev</p>
        </li>

        <li className={classes.item}>
          <h3 className={classes.itemTitle}>Social</h3>
          <p>Linkedin / username</p>
          <p>Twitter / @user-handle</p>
        </li>
      </ul>
    </footer>
  );
}

export default Header;

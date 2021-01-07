import useStyles from './Header.style';

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <select name="language" className={classes.language}>
          <option value="en">English</option>
          <option value="lt">Lithuania</option>
        </select>
      </nav>

      <article className={classes.hero}>
        <h1 className={classes.heroTitle}>Lukas Šitkus</h1>
        <p className={classes.heroDescription}>Programmer</p>
      </article>
    </header>
  );
}

export default Header;

import useStyles from './Header.style';

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <button className={classes.button}>Lietuviškai</button>
      </nav>

      <article className={classes.hero}>
        <h1 className={classes.heroTitle}>Lukas Šitkus</h1>
        <p className={classes.heroDescription}>Programmer</p>
      </article>
    </header>
  );
}

export default Header;

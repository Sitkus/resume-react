import useStyles from './Header.style';
import TitleBox from '../../TitleBox/TitleBox';

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
        <TitleBox>Programmer</TitleBox>
      </article>
    </header>
  );
}

export default Header;

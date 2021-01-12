import useStyles from './Header.style';
import { TitleBlock } from '../common';
import { Select } from '../helpers';

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Select
          options={[
            { value: 'en', title: 'English' },
            { value: 'lt', title: 'Lietuviškai' }
          ]}
        />
      </nav>

      <article className={classes.hero}>
        <h1 className={classes.heroTitle}>Lukas Šitkus</h1>
        <TitleBlock>Programmer</TitleBlock>
      </article>
    </header>
  );
}

export default Header;

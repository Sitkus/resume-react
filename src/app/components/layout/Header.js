import useStyles from './index.style';
import { TitleBlock } from '../common';
import { Select } from '../helpers';
import translations from '../../../translations';

function Header({ language, setLanguage }) {
  const classes = useStyles();
  const { title } = translations[language];

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Select
          changeLanguage={changeLanguage}
          options={[
            { value: 'en', title: 'English' },
            { value: 'lt', title: 'Lietuviškai' }
          ]}
        />
      </nav>

      <article className={classes.hero}>
        <h1 className={classes.heroTitle}>Lukas Šitkus</h1>
        <TitleBlock>{title}</TitleBlock>
      </article>
    </header>
  );
}

export default Header;

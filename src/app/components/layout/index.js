import useStyles from './index.style';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, language, setLanguage }) {
  const classes = useStyles();

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <main className={classes.main}>{children}</main>
      <Footer language={language} />
    </>
  );
}

export default Layout;

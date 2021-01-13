import useStyles from './index.style';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

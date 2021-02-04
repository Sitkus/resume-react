import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto'
  },
  nav: {
    width: '100%',
    maxWidth: '1080px',
    height: '60px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '4px solid black',
    padding: '50px 150px',
    marginTop: '-25px',
    marginBottom: '70px'
  },
  heroTitle: {
    textTransform: 'uppercase',
    fontSize: '26px',
    fontWeight: '600',
    marginBottom: '10px'
  }
}));

export default useStyles;

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
  language: {
    backgroundColor: '#C4C4C4',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    marginRight: '20px',
    outline: 'none'
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
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  heroDescription: {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px'
  }
}));

export default useStyles;

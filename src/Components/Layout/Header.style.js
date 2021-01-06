import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto'
  },
  nav: {
    width: '100%',
    maxWidth: '1000px',
    height: '60px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#7ABCAC'
  },
  button: {
    backgroundColor: '#C4C4C4',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    marginRight: '20px'
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '4px solid black',
    padding: '50px 150px',
    marginTop: '-25px'
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
});

export default useStyles;

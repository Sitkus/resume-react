import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '35px'
  },
  list: {
    width: '100%',
    maxWidth: '1080px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px 30px 15px'
  },
  itemLink: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}));

export default useStyles;

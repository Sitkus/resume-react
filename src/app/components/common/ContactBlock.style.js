import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  item: {
    flex: '0 0 30%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  itemTitle: {
    textTransform: 'uppercase',
    marginBottom: '20px'
  }
}));

export default useStyles;

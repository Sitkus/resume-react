import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  horizontalDivider: {
    position: 'relative',
    width: '100%',
    height: '4px',
    backgroundColor: theme.palette.secondary.light,
    margin: '7px 0 20px 0'
  },
  dividerPlate: {
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.primary.main,
    width: '72px',
    height: '10px'
  }
}));

export default useStyles;

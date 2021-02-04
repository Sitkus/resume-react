import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  verticalDivider: {
    width: '2px',
    height: 'auto',
    backgroundColor: theme.palette.secondary.light
  }
}));

export default useStyles;

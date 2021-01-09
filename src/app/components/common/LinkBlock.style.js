import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      '& svg': {
        color: theme.palette.primary.main
      }
    },
    cursor: 'pointer'
  }
}));

export default useStyles;

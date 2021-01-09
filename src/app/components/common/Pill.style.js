import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  skillsItem: {
    marginBottom: '10px',
    '&:last-child': {
      marginBottom: 0
    }
  },
  skill: {
    display: 'inline-block',
    padding: '7px 15px',
    borderRadius: '15px'
  },
  skillDefault: {
    backgroundColor: theme.palette.secondary.light
  }
}));

export default useStyles;

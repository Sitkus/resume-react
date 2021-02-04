import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  job: {
    flex: '0 0 30%',
    margin: '40px 0',
    textAlign: 'center',
    lineHeight: '1.8'
  },
  jobPosition: {
    textTransform: 'uppercase'
  },
  jobDescription: {
    textAlign: 'left',
    marginTop: '20px',
    lineHeight: '1.5'
  }
}));

export default useStyles;

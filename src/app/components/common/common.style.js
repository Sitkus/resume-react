import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  /**
   * Contact Block
   */
  item: {
    flex: '0 0 30%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  itemTitle: {
    textTransform: 'uppercase',
    marginBottom: '20px'
  },

  /**
   * Content Box
   */
  contentBoxTitle: {
    fontWeight: '600',
    fontSize: '20px'
  },

  /**
   * Job
   */
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
  },

  /**
   * Link Block
   */
  link: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      '& svg': {
        color: theme.palette.primary.main
      }
    },
    cursor: 'pointer'
  },

  /**
   * Pill
   */
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
  },

  /**
   * School
   */
  schoolName: {
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: '15px'
  },

  /**
   * Title Block
   */
  title: {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    fontSize: '18px',
    fontWeight: '400',
    letterSpacing: '1.5px'
  }
}));

export default useStyles;

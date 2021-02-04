import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto'
  },

  /**
   * About me
   */
  aboutMe: {
    width: '65%'
  },
  sideBox: {
    width: '25%'
  },

  /**
   * Second row
   */
  secondRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '70px 0'
  },

  /**
   * Skills
   */
  skillsSection: {
    width: 'calc(83% / 3)'
  },

  /**
   * Work experience
   */
  workExperience: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '13px'
  }
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto'
  },
  divider: {
    position: 'relative',
    width: '100%',
    height: '4px',
    backgroundColor: '#DCDCDC'
  },
  dividerPlate: {
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    backgroundColor: '#7ABCAC',
    width: '72px',
    height: '10px'
  },
  aside: {
    width: '35%'
  },
  aboutMe: {
    width: '55%'
  },
  softSkills: {
    width: 'calc(55% / 2)'
  },
  hardSkills: {
    width: 'calc(55% / 2)'
  },
  workExperience: {
    width: '100%'
  }
});

export default useStyles;

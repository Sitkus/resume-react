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
   * Links
   */
  links: {
    lineHeight: '2',
    fontSize: '17px'
  },
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
  // linkLinkedIn: {
  //   '&:hover': {
  //     color: '#0e76a8'
  //   }
  // },
  // linkTwitter: {
  //   '&:hover': {
  //     color: '#00acee'
  //   }
  // },
  // linkGithub: {
  //   '&:hover': {
  //     color: '#4078c0'
  //   }
  // },
  // linkWebsite: {
  //   '&:hover': {
  //     color: theme.palette.primary.main
  //   }
  // },
  linkIcon: {
    fontSize: '22px',
    marginRight: '7px'
  },

  /**
   * Dividers
   */
  horizontalDivider: {
    position: 'relative',
    width: '100%',
    height: '4px',
    backgroundColor: theme.palette.secondary.light,
    margin: '7px 0 20px 0'

    // '&::before': {
    //   position: 'absolute',
    //   top: '50%',
    //   left: '0',
    //   transform: 'translateY(-50%)',
    //   backgroundColor: theme.palette.primary.main,
    //   width: '72px',
    //   height: '10px'
    // }
  },
  verticalDivider: {
    width: '2px',
    height: 'auto',
    backgroundColor: theme.palette.secondary.light
  },
  dividerPlate: {
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.primary.main,
    width: '72px',
    height: '10px'
  },
  miniDivider: {
    width: '50%',
    height: '4px',
    backgroundColor: theme.palette.secondary.light,
    margin: '15px 0'
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
   * Education
   */
  schoolName: {
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: '15px'
  },

  /**
   * Skills
   */
  skillsSection: {
    width: 'calc(83% / 3)'
  },
  skillsList: {
    // display: 'flex',
    // flexWrap: 'wrap'
  },
  skillsItem: {
    marginBottom: '10px',
    '&:last-child': {
      marginBottom: 0
    }
  },
  skill: {
    display: 'inline-block',
    backgroundColor: theme.palette.secondary.light,
    padding: '7px 15px',
    borderRadius: '15px'
  },
  skillPro: {
    backgroundColor: theme.palette.primary.main
  },
  skillAdv: {
    backgroundColor: '#D8DA79'
  },
  skillNew: {
    backgroundColor: '#C29486'
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
  },
  workExperienceSection: {
    flex: '0 0 30%',
    margin: '40px 0',
    textAlign: 'center',
    lineHeight: '1.8'
  },
  workTitle: {
    textTransform: 'uppercase'
  },
  workDescription: {
    textAlign: 'left',
    marginTop: '20px',
    lineHeight: '1.5'
  }
}));

export default useStyles;

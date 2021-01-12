import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  /**
   * Select
   */
  select: {
    backgroundColor: '#C4C4C4',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    marginRight: '20px',
    outline: 'none'
  },

  /**
   * Horizontal Divider
   */
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
  },
  isShort: {
    width: '70%',
    margin: '15px 0'
  },

  /**
   * Vertical Divider
   */
  verticalDivider: {
    width: '2px',
    height: 'auto',
    backgroundColor: theme.palette.secondary.light
  }
}));

export default useStyles;

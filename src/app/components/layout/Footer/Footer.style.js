import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '35px'
  },
  list: {
    width: '100%',
    maxWidth: '1080px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px 30px 15px'
  },
  item: {
    flex: '0 0 30%',
    textAlign: 'center'
  },
  itemTitle: {
    // backgroundColor: theme.palette.secondary.main,
    // color: 'white',
    // padding: '5px 10px',
    // fontWeight: '400',
    textTransform: 'uppercase',
    marginBottom: '20px'
  },
  itemLink: {
    display: 'block',
    cursor: 'pointer'
  },
  itemParagraph: {},
  itemLastParagraph: {}
}));

export default useStyles;

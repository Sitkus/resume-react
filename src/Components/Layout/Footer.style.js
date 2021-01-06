import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
    // margin: '0 auto',
  },
  list: {
    width: '100%',
    maxWidth: '1000px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 15px'
  },
  item: {
    flex: '0 0 30%',
    // display: 'flex',
    // flexWrap: 'wrap',
    // flexDirection: 'column',
    textAlign: 'center'
  },
  itemTitle: {
    backgroundColor: '#C4C4C4',
    padding: '5px 10px',
    textTransform: 'uppercase'
  },
  itemParagraph: {},
  itemLastParagraph: {}
});

export default useStyles;

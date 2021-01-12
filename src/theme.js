import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7ABCAC'
    },
    secondary: {
      light: '#DCDCDC',
      main: '#161616'
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  }
});

export default theme;

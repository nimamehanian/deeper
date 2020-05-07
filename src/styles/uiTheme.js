import { $pussy, $charcoal } from 'styles/colors';

const uiTheme = {
  palette: {
    primary: {
      main: $pussy,
    },
    text: {
      primary: $charcoal,
    }
  },
  typography: {
    fontFamily: 'Andes Reg',
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
};

export default uiTheme;

import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'
import {blue, indigo} from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
        fontFamily: ['IranSans',]
    },
    palette: {
        secondary: {
            main: blue[900]
        },
        primary: {
            main: indigo[700]
        }
    },
    direction: 'rtl',
    overrides: {
        MuiSvgIcon: {
            root: {color: "rgba(۲۵۵,۲۵۵,۲۵۵,0.6)"},
        },
        MuiTypography: {
            root: {
                color: "#ffffff",
            }
        },
        MuiToolbar: {
            gutters: {
                paddingRight: '16px !important',
                paddingLeft: '16px !important'
            }
        },
        MuiIconButton:{
            root:{
                padding:8
            }
        },
        MuiSlider: {
            root: {
                color: "#ca0c85"
            }
        }
    }
});

// theme.typography.body1={
//     [theme.breakpoints.up('md')]: {
//         fontSize: '1.2rem'
//     },
//     [theme.breakpoints.down('md')]: {
//         fontSize: '1.6rem'
//     }
// }
export default (theme)
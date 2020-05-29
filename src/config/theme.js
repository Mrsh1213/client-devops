import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'
import {blue, indigo} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: blue[900]
        },
        primary: {
            main: indigo[700]
        }
    },
    direction: 'rtl',
    typography: {

        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Yekan"',
            'sans-serif'
        ].join(',')
    },
    overrides: {
        MuiTypography: {
            body1: {
                fontSize: '0.9rem'
            },
            body2: {
                fontSize: '0.7rem'
            }
        },
        MuiToolbar: {
            gutters: {
                paddingRight: '16px !important',
                paddingLeft: '16px !important'
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
//     [theme.breakpoints.up('xs')]: {
//         fontSize: '0.9rem'
//     },
//     [theme.breakpoints.up('sm')]: {
//         fontSize: '1.1rem'
//     }
// }
export default (theme)
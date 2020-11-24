import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const themeObj = {
    "fontFamily": "Roboto,sans-serif",
    "palette": {
        "primary": {
            "main": "#1d53c4"
        },
        "secondary": {
            "main": "#b62154"
        },
        "primary1Color": "#061b3e",
        "primary2Color": "#46b2e3",
        "primary3Color": "#eaf1f6",

        "success1Color": "#0f5a4a",
        "success2Color": "#359c72",
        "success3Color": "#c9e235",

        "accent1Color": "#5f0e30",
        "accent2Color": "#f63076",
        "accent3Color": "#d56388",

        "blue1Color": "#052a49",
        "blue2Color": "#0a4da0",
        "blue3Color": "#8ff2f6",

        "blueGrey1Color": "#2c4157",
        "blueGrey2Color": "#3a536c",
        "blueGrey3Color": "#79abba",

        "update1Color": "#f39207",
        "update2Color": "#d9984d",
        "update3Color": "#f1e673",

        "delete1Color": "#ac0408",
        "delete2Color": "#d23c3c",
        "delete3Color": "#f36b6b",

        "textColor": "rgba(255,255,255,0.87)",
        "secondaryTextColor": "#303030",
        "alternateTextColor": "rgba(255,255,255,0.7)",
        "canvasColor": "#303030",
        "alternate1Color": "rgba(0, 0, 0, 0.54)",
        "alternate2Color": "#616161",
        "borderColor": "rgba(255,255,255,0.3)",
        "disabledColor": "rgba(255,255,255,0.3)",
        "pickerHeaderColor": "rgba(255,255,255,0.12)",
        "clockCircleColor": "rgba(255,255,255,0.12)"
    }
};

export const theme = createMuiTheme(themeObj);


import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary:"#233017",
    // secondary:"#6DC01E",
    secondary: "#377E30",
    third:"#E4DCCD",
    success:"#BED500",
    danger:"#FF5722",
    warning:"#FFC107",
    dark:"#233017",
    light:"#aaa",
    muted:"#abafb3",
    border:"#2333017",
    inverse:"#dccfe8",
    shaft:"#333",

    //grays
    dim_gray:"#696969",
    dove_gray:"#d5d5d5",
    body_bg:"#f1f1f1",
    light_gray:	"#D9DDDC",

    white:"#fff",
    black:"#000"

}

const theme = createTheme({
    palette:{
        primary:{
            main: Colors.primary,
        
        },
        secondary:{
            main: Colors.secondary
        }
    },
    typography:{
        fontFamily:`'Sometype Mono', monospace`
    }

});

export default theme;
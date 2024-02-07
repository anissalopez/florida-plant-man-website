
import { Collapse } from "@mui/material";
import { createTheme} from "@mui/material/styles";
import { lighten } from "polished";

export const Colors = {
    primary:"#233017",
    // secondary:"#6DC01E",
    secondary: "#377E30",
    third:"#E4DCCD",
    fourth:"#BED500",
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
    white2:'#F5F5F5',
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
        fontFamily:`'Sometype Mono', monospace`,
        larger:{
            fontSize:"24px"
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                disableRipple:true,
                disableElevation:true
            }
        },
        MuiDrawer:{
            styleOverrides:{
                paper:{
                    color:Colors.primary
                }
            }

        },
        MyShopButton:{
            styleOverrides:{
                root:{
                    color:Colors.white,
                },
                primary:{
                    background: Colors.fourth,
                    color:Colors.primary,
             
                    fontSize:"25px",
                    fontFamily:"Flower",
                    letterSpacing:3,
                 
                    "&:hover":{
                           
                    background:Colors.primary,
                    color: Colors.white,
                      

                }},
                secondary:{
                    background: Colors.secondary,
                    "&:hover":{
                        // background:lighten(0.05, Colors.secondary)
                    }

                }
            }
        }
    }

});

export default theme;
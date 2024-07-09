
import { createTheme} from "@mui/material/styles";


export const DrawerWidth = 250;
export const Colors = {
    primary:"#233017",
    secondary: "#377E30",
    third:"#E4DCCD",
    fourth:"#BED500",
    fifth:"#6DC01E",


    white:"#fff",
    white2:'#F5F5F5',
    black:"#000",

    //AdminColors
    admindarkblue:'#233142',
    adminlightblue:'#455d7a',
    adminorange:'#e46161',
    adminpurple:'#8dc6ff',
    admingray:'#e3e3e3',
    admingreen1:'#9ab0a6',
    admingreen2:'#384b42',
    admingreen3:'#6a9b86'

};

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
        fontFamily:"Roboto",
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

export const cssUtils = {
    boxShawdow:`rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px`
}

export default theme;
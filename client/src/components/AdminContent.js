import Box from "@mui/material/Box";
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { RiPlantFill } from "react-icons/ri";

import styles from "../styles/AdminContent.module.css";


export default function AdminContent({customers, plants}){
    return(
        <div className={styles.body}>
            <div className={styles.background}></div>
                <div className={styles.main}>
                    <Box className={styles['box-elements']}>
                        <p className={styles.header}>Plants</p>
                        <Box className={styles['icon-display']}>
                            <RiPlantFill fontSize="30px"/>
                            <p>{plants.length}</p>
                        </Box>
                    </Box>
                    <Box className={styles['box-elements']}>
                        <p className={styles.header}>Customers</p>
                        <Box className={styles['icon-display']}>
                            <PersonRoundedIcon fontSize="large"/>
                            <p>{customers.length}</p>
                        </Box>
                    </Box>
                    <Box className={styles['box-elements']}>
                        <p className={styles.header}>Orders</p>
                        <Box className={styles['icon-display']}>
                            <LocalShippingRoundedIcon fontSize="large"/>
                            <p>{customers.length}</p>
                        </Box>
                    </Box>
            </div>
        </div>
    )
}
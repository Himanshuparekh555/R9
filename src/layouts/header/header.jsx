import React, { useState,useEffect  } from "react";
import "./index.scss";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {ReactComponent as MailIcon} from '../../images/mail.svg';
import {ReactComponent as LocationIcon} from '../../images/location.svg';
// Material Ints
import {
    Container,
    Grid,
    Box,
    Typography,
    Link,
} from "@mui/material";


const Header = ({}) => {
    const [activeClass, setActiveClass] = useState('');
    // mobile sidebar toggleclass
    const [isActive, setActive] = useState("false");
    // const [isActiveMap, setActiveMap] = useState("false");

    const MenuToggleClass = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
        window.removeEventListener('scroll', stickNavbar);
        };
    }, []);
    const stickNavbar = () => {
        if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 100 ? setActiveClass('active') : setActiveClass('');
        }
    };

    return (
        <>
            <header className={`${activeClass}`}>
                <Container>
                    <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Grid item xs={6}><div className="logo">R9</div></Grid>
                        <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                            <Box onClick={MenuToggleClass} className={isActive ? "drawer" : "drawer active"}>
                                <span className="square"></span>
                                <span className="square"></span>
                                <span className="square"></span>
                                <span className="square"></span>
                                <span className="square hover"></span>
                            </Box>
                            <Box className={isActive ? "navigation" : "navigation active"}>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",flexDirection:"column",mt:6 }}>
                                    <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center",}}>
                                        <Grid item xs={12} sm={4} md={3} sx={{ display: "flex", justifyContent: "center",flexDirection:"column",}}>
                                            <Link className="link" underline="none" href="/">Home</Link>
                                            <Link className="link"  underline="none" href="/about">About</Link>
                                            <Box className='info' sx={{mt:8 }}>
                                                <Box className="info-detail" sx={{textAlign:"center",mb:5,display:"flex",alignItems: "center",flexDirection:"column" }}>
                                                    <LocationIcon/>
                                                    <Link sx={{mt:2}} color="inherit" underline="none"  href="#">
                                                        {"Bicholi Mardana Rd, Near Vidya Sagar College Pragati Vihar, Indore"}
                                                    </Link>
                                                </Box>
                                                <Box className="info-detail" sx={{ textAlign:"center",display:"flex",alignItems: "center",flexDirection:"column" }}>
                                                    <MailIcon/>
                                                    <Link sx={{mt:2}} color="inherit" underline="none"  href="mailto:r9foundation@email.com">{"r9foundation@email.com"}</Link>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>                    
                </Container>
            </header>
            <Box
            className={isActive ? "overlay_menu" : "overlay_menu active"}
            onClick={MenuToggleClass}
            ></Box>
        </>
    )
};

export default Header;
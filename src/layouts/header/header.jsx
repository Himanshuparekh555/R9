import React, { useState } from "react";
import "./index.scss";

// Material Ints
import {
    Container,
    Grid,
    Box,
    Link,
} from "@mui/material";


const Header = ({}) => {
    
    // mobile sidebar toggleclass
    const [isActive, setActive] = useState("false");
    // const [isActiveMap, setActiveMap] = useState("false");

    const MenuToggleClass = () => {
        setActive(!isActive);
    };
    return (
        <>
            <header>
                <Container>
                    <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Grid item xs={6}><div className="logo">R9</div></Grid>
                        <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                            <Box className="drawer" onClick={MenuToggleClass}>
                                <span className="square"></span>
                                <span className="square"></span>
                                <span className="square"></span>
                                <span className="square"></span>
                                <span className="square hover"></span>
                            </Box>
                            <Box className={isActive ? "navigation" : "navigation active"}>
                                <Link underline="none" href="#">Home</Link>
                                <Link underline="none" href="#">Our Mission</Link>
                                <Link underline="none" href="#">Founder</Link>
                                <Link underline="none" href="#">Our Team</Link>
                                <Link underline="none" href="#">Contact</Link>
                            </Box>
                        </Grid>
                    </Grid>                    
                </Container>
            </header>
            <Box
            className={isActive ? "overlay" : "overlay active"}
            onClick={MenuToggleClass}
            ></Box>
        </>
    )
};

export default Header;
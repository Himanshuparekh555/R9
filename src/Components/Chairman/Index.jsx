import React from "react";
import "./index.scss";
import chairmen from "../../images/chairmen.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
// Material Ints
import {
  Grid,
  Box,
  Container,
  Typography,
} from "@mui/material";

class Chairman extends React.Component {   
    render() {
        return <>
          <Box className="chairman" sx={{ mb:25 }}>
            <Container maxWidth="md">
                <Box sx={{ display: "flex", justifyContent:"center",mb:12 }}>
                    <Typography variant="h3" gutterBottom className="heading1" sx={{ mb:10 }}>
                        {"Words from our Chairman"}
                    </Typography>
                </Box>
                <Grid spacing={8} container sx={{ display: "flex", alignItems: "center" }}>
                    <Grid item xs={12} sm={6} md={6} >
                        <Box className="banner_img" sx={{ position: "relative" }}>
                            <Box className="vector3" sx={{ position:"absolute",top:0,right:160}}></Box>
                            <Box className="name_tag" sx={{ display: "inline-block",position: "absolute",}} xs={{left:0}}><AnimationOnScroll className="user_name" animateIn="animate__fadeInLeft">
                            {"Chairman"}</AnimationOnScroll></Box>
                            <img className="w-100" src={chairmen} alt=""/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                    <Typography variant="h3" gutterBottom className="title" sx={{ mb:5 }}>
                        {"“Ottr helped us to drastically reduce ticket opening on our most visited support pages”"}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom className="subtitle">                    
                        {"— Radheshyam Patel, Director at Mathuradevi Group of Institutions, Indore"}
                    </Typography>                  
                    </AnimationOnScroll>
                    </Grid>               
                </Grid>
            </Container>
          </Box>
        </>;
      }
};

export default Chairman;
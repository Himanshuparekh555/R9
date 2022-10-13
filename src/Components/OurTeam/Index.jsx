import React from "react";
import "./index.scss";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
// Material Ints
import {
  Grid,
  Box,
  Button ,
  Typography,
} from "@mui/material";

const slideImages = [
  {
    url: 'https://exesports-image-prod.s3.ap-south-1.amazonaws.com/prod/profile/1665630344462.png',
    name: 'Sagar Patel',
    subtitle:'CEO at Techvers',
    button:'Join us now'
  },
  {
    url: 'https://exesports-image-prod.s3.ap-south-1.amazonaws.com/prod/profile/1665630369198.png',
    name: 'Payal Patel',
    subtitle:'Senior Director at Acme',
    button:'Join us now'
  },
  {
    url: 'https://exesports-image-prod.s3.ap-south-1.amazonaws.com/prod/profile/1665630381728.png',
    name: 'Deshna Patel',
    subtitle:'VP Marketing at G&O',
    button:'Join us now'
  },
   {
    url: 'https://exesports-image-prod.s3.ap-south-1.amazonaws.com/prod/profile/1665630394867.png',
    name: 'Deshna Patel',
    subtitle:'VP Marketing at G&O',
    button:'Join us now'
  },
];
const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            centerPadding: 80
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerPadding: 30
        }
    }
];
class OurTeam extends React.Component {   
    render() {
        return <>
          <Box className="ourteam">
                <Box sx={{ display: "flex", justifyContent:"center",mb:3 }}>
                    <Typography variant="h3" gutterBottom className="heading1">
                        {"Our Team"}
                    </Typography>
                </Box>
                <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "end",mb:20 }}>
                  <Grid item xs={12} sm={12} md={10}>
                  <Box className="slide-container" sx={{position:"relative"}}>
                  <AnimationOnScroll animateIn="animate__fadeInRight">
                  <Slide slidesToScroll={1} slidesToShow={2} arrows={false} indicators={false} responsive={responsiveSettings}>
                  {slideImages.map((slideImage, index)=> (
                      <Box className="each-slide" key={index} sx={{ ml:2,mr:2}}>
                          <Box className="box" sx={{ display: "flex", justifyContent:"center",flexDirection:"column",p:2.5,borderRadius:9,position:"relative"}}>
                            <img src={slideImage.url} alt=""/>
                            <Box className="info" sx={{ display: "flex", justifyContent:"center",flexDirection:"column",mt:3}}>
                              <Typography variant="h6" gutterBottom sx={{ mb:1}}>
                                {slideImage.name}
                              </Typography>
                              <Typography variant="body1" gutterBottom>{slideImage.subtitle}</Typography>
                              <Button className="btn-theme" variant="text" >{slideImage.button}</Button>
                            </Box>
                          </Box>
                      </Box>
                    ))} 
                  </Slide>
                  <Box className="vector2" sx={{ position:"absolute"}}></Box>
                  </AnimationOnScroll>
                  <Box className="vector3" sx={{ position:"absolute",top:10,right:300}}></Box>
                  
                </Box>
                  </Grid>
                </Grid>                
          </Box>
        </>;
      }
};

export default OurTeam;
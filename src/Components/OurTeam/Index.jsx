import React from "react";
import "./index.scss";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Marquee from "react-fast-marquee";
// Material Ints
import {
  Grid,
  Box,
  Button ,
  Typography,
} from "@mui/material";

const OurTeamInfo = [
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
class OurTeam extends React.Component {   
    render() {
        return <>
          <Box className="ourteam" sx={{mb:15 }}>
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <Box sx={{ display: "flex", justifyContent:"center",mb:5 }}>
                    <Typography variant="h3" gutterBottom className="heading1">
                        {"Our Team"}
                    </Typography>
                </Box>
                  <Box className="marquee-slide" sx={{position:"relative",mb:8}}>
                    
                    <Marquee pauseOnHover={true} speed={30} gradient={false} >
                        {OurTeamInfo.map((OurTeam, index)=> (
                              <Box className="box" key={index} sx={{ display: "flex", justifyContent:"center",flexDirection:"column",p:2.5,borderRadius:9,position:"relative",ml:3,mr:3}}>
                                <Box sx={{ overflow:"hidden",borderRadius:5}}>
                                  <img className="user_img w-100" src={OurTeam.url} alt=""/>
                                </Box>
                              <Box className="info" sx={{ display: "flex", justifyContent:"center",flexDirection:"column",mt:3}}>
                                <Typography variant="h6" gutterBottom sx={{ mb:1}}>
                                  {OurTeam.name}
                                </Typography>
                                <Typography variant="body1" gutterBottom>{OurTeam.subtitle}</Typography>                                
                              </Box>
                            </Box>
                        ))} 
                    </Marquee>
                    <Button className="btn-theme" variant="text" sx={{ position:"absolute"}}>{"Join us now"}</Button>
                    <Box className="vector2" sx={{ position:"absolute"}}></Box>                    
                  <Box className="vector3" sx={{ position:"absolute",top:10,right:100}}></Box>                 
                </Box> 
                </AnimationOnScroll>            
          </Box>
        </>;
      }
};

export default OurTeam;
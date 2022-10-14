import * as React from 'react';
import "./index.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import foundationImg from "../../images/foundation-img.png";
// Material Ints
import {
 Container,
  Box,
  Grid,
  Typography,
} from "@mui/material";

const AboutUs = ({}) => {
    return (
        <>
          <Box className="top-content aboutus" sx={{ pt:15,pb:5}}>
              <Container sx={{ mt:8,mb:8}}>
                  <Grid container sx={{ display: "flex", justifyContent:"center"}}>
                      <Grid item xs={12} sm={12} md={6} sx={{ mb:4}}>
                        <Typography variant="subtitle1" gutterBottom className="subtitle">                    
                            {"About"}
                        </Typography>  
                        <Typography variant="h1" gutterBottom className="title">
                          {"R9 Foundation"}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom className="subtitle">                    
                            {"Late Shri Rameshwar Patel and Geeta Patel foundation"}
                        </Typography>          
                      </Grid>
                      <Grid item xs={8} sm={12} md={6}  sx={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
                        <Box className="banner" sx={{ position:"relative"}}>
                          <Box className="shadow"></Box>
                            <img className="w-100" src={foundationImg} alt=""/>
                            <Box className="vector1" sx={{ position:"absolute",top:-30,right:-40}}></Box>
                            <Box className="vector2" sx={{ position:"absolute",bottom:-40,left:-55}}></Box>                      
                        </Box>
                      </Grid>
                  </Grid>
              </Container>
          </Box>
          <Box className="dots" sx={{ display: "flex", alignItems:"center",ml:3,mt:7 }}><span></span><span></span></Box>
          <Box className='about-content' sx={{ mt:6,mb:15}}>
            <Container>
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <Grid spacing={5} container sx={{ display: "flex", alignItems:"center"}}>
                  <Grid item xs={12} sm={12} md={5} sx={{ mb:4}}>
                      <Typography variant="h1" gutterBottom className="title" sx={{ mb:3}}>
                        {"1M"}
                      </Typography>
                      <Typography variant="h2" gutterBottom className="heading2">
                        {"1M R9 Foundation users"}
                      </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={7} sx={{ mb:4}}>
                      <Typography variant="h2" gutterBottom className="heading2" sx={{ mb:2.5}}>
                        {"Scaling solutions, amplified."}
                      </Typography>
                      <Typography variant="h2" gutterBottom className="heading4" sx={{ mb:0}}>
                        {"Built by developers, for developers."}
                      </Typography>
                      <Typography variant="body2" gutterBottom sx={{ mt:2.5,mb:2.5}}>
                          {"Onix is committed to fostering the growth of Web3 applications by providing the infrastructure and security needed for Web3."}
                      </Typography>
                      <Typography variant="body2" gutterBottom sx={{ mb:0}}>
                          {"Onix believes in Web3 for all. Onix is a decentralised blockchain scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security."}
                      </Typography>
                  </Grid>
                </Grid>
              </AnimationOnScroll>
              <Grid sx={{ mt:10}}>
                <ul>
                  <AnimationOnScroll animateIn="animate__fadeInUp">
                    <li>
                      <Grid spacing={5} container sx={{ display: "flex", alignItems:"center"}}>
                          <Grid item xs={12} sm={12} md={5}>
                            <Typography variant="h2" gutterBottom className="heading3" sx={{ mb:0}}>
                              {"R9 Foundation users"}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={12} md={7}>
                              <Typography variant="body2" gutterBottom sx={{ mb:0}}>
                                  {"Onix believes in Web3 for all. Onix is a decentralised blockchain scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security."}
                              </Typography>
                          </Grid>
                      </Grid>
                    </li>
                  </AnimationOnScroll>
                  <AnimationOnScroll animateIn="animate__fadeInUp">
                    <li>
                      <Grid spacing={5} container sx={{ display: "flex", alignItems:"center"}}>
                          <Grid item xs={12} sm={12} md={5}>
                            <Typography variant="h2" gutterBottom className="heading3" sx={{ mb:0}}>
                              {"R9 Foundation users"}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={12} md={7}>
                              <Typography variant="body2" gutterBottom sx={{ mb:0}}>
                                  {"Onix believes in Web3 for all. Onix is a decentralised blockchain scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security."}
                              </Typography>
                          </Grid>
                      </Grid>
                    </li>
                  </AnimationOnScroll>
                  <AnimationOnScroll animateIn="animate__fadeInUp">
                    <li>
                      <Grid spacing={5} container sx={{ display: "flex", alignItems:"center"}}>
                          <Grid item xs={12} sm={12} md={5}>
                            <Typography variant="h2" gutterBottom className="heading3" sx={{ mb:0}}>
                              {"R9 Foundation users"}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={12} md={7}>
                              <Typography variant="body2" gutterBottom sx={{ mb:0}}>
                                  {"Onix believes in Web3 for all. Onix is a decentralised blockchain scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security."}
                              </Typography>
                          </Grid>
                      </Grid>
                    </li>
                  </AnimationOnScroll>
                </ul>
              </Grid>
            </Container>
          </Box>
        </>
    );
};


export default AboutUs;
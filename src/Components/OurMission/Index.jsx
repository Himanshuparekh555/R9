import React from "react";
import "./index.scss";
import Arrow from "../../images/arrow.png";
import Human from "../../images/hw.png";
import Animal from "../../images/aw.png";
import Earth from "../../images/ew.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
// Material Ints
import {
  Grid,
  Box,
  Card ,
  CardContent, 
  Typography,
} from "@mui/material";

class OurMission extends React.Component {   
    render() {
        return <>
          <Box className="ourmission">
            <Box sx={{ display: "flex", justifyContent:"center",mb:12 }}>
                <Typography variant="h2" gutterBottom className="heading1">
                    {"Our Mission"}
                </Typography>
            </Box>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
                <Grid item xs={12} sm={12} md={4}>
                  <AnimationOnScroll animateIn="animate__zoomIn">
                    <Typography variant="h3" gutterBottom className="title">
                      {"You Can Help The Poor"}
                    </Typography>
                  <Typography variant="subtitle1" gutterBottom className="des">                    
                      {"Help Today Because Tomorrow you may be Needs Someone Help"}
                  </Typography>                  
                  </AnimationOnScroll>
                </Grid>
                <Grid item xs={2} sm={4} md={2}>
                  <AnimationOnScroll animateIn="animate__zoomIn">
                    <img src={Arrow} alt=""/>
                  </AnimationOnScroll>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <AnimationOnScroll animateIn="animate__zoomIn">
                    <Box className="cards">
                      <Grid container spacing={4} sx={{ display: "flex", alignItems: "center" }}>
                          <Grid item xs={12} sm={12} md={6}>
                            <Card className="box" sx={{ borderRadius: '40px',p:3,minHeight:250,mb:4,display: "flex",flexWrap:"wrap" }}>
                              <Box  className="icon" sx={{ display: "flex", alignItems: "center",justifyContent:"center",borderRadius: '100px' }}>
                                <img src={Human} alt=""/>
                              </Box>
                              
                              <CardContent className="w-100" sx={{ alignSelf:"flex-end",p:0, }}>
                                <Typography sx={{ fontSize: 14 }} className="subtitle" gutterBottom>
                                  {"Help Poor People"}
                                </Typography>
                                <Typography variant="h5" className="title" component="div">
                                  {"Human Welfare"}
                                </Typography>
                              </CardContent>
                            </Card>
                              <Card className="box" sx={{ borderRadius: '40px',p:3,minHeight:250,display: "flex",flexWrap:"wrap" }}>
                              <Box  className="icon" sx={{ display: "flex", alignItems: "center",justifyContent:"center",borderRadius: '100px' }}>
                                <img src={Animal} alt=""/>
                              </Box>                            
                              <CardContent className="w-100" sx={{ alignSelf:"flex-end",p:0, }}>
                                <Typography sx={{ fontSize: 14 }} className="subtitle" gutterBottom>
                                  {"We help Animals around the world"}
                                </Typography>
                                <Typography variant="h5" className="title" component="div">
                                  {"Animal Welfare"}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                          <Grid item xs={12} sm={12} md={6}>
                              <Card className="box" sx={{ borderRadius: '40px',p:3,minHeight:250,display: "flex",flexWrap:"wrap" }}>
                              <Box  className="icon" sx={{ display: "flex", alignItems: "center",justifyContent:"center",borderRadius: '100px' }}>
                                <img src={Earth} alt=""/>
                              </Box>                            
                              <CardContent className="w-100" sx={{ alignSelf:"flex-end",p:0, }}>
                                <Typography sx={{ fontSize: 14 }} className="subtitle" gutterBottom>
                                  {"Save the Earth"}
                                </Typography>
                                <Typography variant="h5" className="title" component="div">
                                  {"Earth Welfare"}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                      </Grid>
                    </Box>
                  </AnimationOnScroll>
                </Grid>
            </Grid>
          </Box>
        </>;
      }

};

export default OurMission;
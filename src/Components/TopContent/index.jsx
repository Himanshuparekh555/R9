import React from "react";
import "./index.scss";
// Material Ints
import {
  Container,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import foundationImg from "../../images/foundation-img.png";
class TopContent extends React.Component {   
    render() {
        return <>
          <Box className="top-content" sx={{ pt:5,pb:5}}>
            <Container sx={{ mt:8,mb:8}}>
                <Grid container sx={{ display: "flex", justifyContent:"center"}}>
                    <Grid item xs={12} sm={12} md={6} sx={{ mb:4}}>
                      <Typography variant="h1" gutterBottom className="title">
                        {"R9 Foundation"}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom className="subtitle">                    
                          {"Late Shri Rameshwar"}<br/> {"Patel and Geeta Patel"}<br/> {"foundation"}
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
            <Box className="dots" sx={{ display: "flex", alignItems:"center",ml:3 }}><span></span><span></span></Box>
          </Box>
        </>;
      }

};

export default TopContent;
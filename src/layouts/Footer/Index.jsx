import * as React from 'react';
import "./index.scss";
import {ReactComponent as MailIcon} from '../../images/mail.svg';
import {ReactComponent as CallingIcon} from '../../images/calling.svg';
import {ReactComponent as FacebookIcon} from '../../images/facebook_icon.svg';
import {ReactComponent as TwitterIcon} from '../../images/twitter_icon.svg';
import {ReactComponent as InstaIcon} from '../../images/instagram_icon.svg';
import {ReactComponent as LocationIcon} from '../../images/location.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';
// Material Ints
import {
    Container,
    Grid,
    Link ,
    Box,
    Typography,
} from "@mui/material";

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
const Footer = ({}) => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
    return (
        <>
          <footer>
                <Container>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                   <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Grid item xs={12} sm={4} md={6}>
                            <Typography variant="h3" gutterBottom className="heading1" sx={{ mb:6,textAlign:"center" }}>
                               Express yourself, even <br/> when you’re apart.
                            </Typography>
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box>
                                        <TabList className='tab' centered onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Address" value="1" />
                                            <Tab label="Contact" value="2" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1" sx={{  mt:3,mb:7 }}>
                                        <Box className='content' sx={{  textAlign:"center" }}>
                                            <LocationIcon/>
                                            <Typography className='des' variant="body1" gutterBottom sx={{  textAlign:"center",mt:3 }}>
                                                Bicholi Mardana Rd, Near Vidya Sagar <br/>College Pragati Vihar, Indore
                                            </Typography>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel value="2" sx={{  mt:3,mb:5 }}>
                                        <Grid className='content' container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                            <Grid className='number' item xs={12} sm={6} md={6} sx={{ display: "flex",flexDirection:"column", alignItems: "center",pl:2,pr:2,mb:3 }}>
                                                <CallingIcon/>
                                                <Link sx={{mt:2}} color="inherit" underline="none" href="tel:+918827726999">{"+91 88277 26999"}</Link>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6} sx={{ display: "flex",flexDirection:"column", alignItems: "center",pl:2,pr:2,mb:3 }}>
                                                <MailIcon/>
                                                <Link sx={{mt:2}} color="inherit" underline="none" href="mailto:r9foundation@email.com">{"r9foundation@email.com"}</Link>
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                </TabContext>
                                </Box>
                        </Grid>
                    </Grid>
                    </AnimationOnScroll>
                </Container>
                <Container>
                    <Box className='copyright'>
                        <Box className='socialmedia' sx={{ display: "flex", justifyContent: "center",mb:4}}>
                            <Link sx={{ml:1,mr:1}} color="inherit" underline="none" href="#"><InstaIcon  sx={{ fontSize: 16 }}/></Link>
                            <Link sx={{ml:1,mr:1}} color="inherit" underline="none" href="#"><TwitterIcon sx={{ fontSize: 16 }}/></Link>
                            <Link sx={{ml:1,mr:1}} color="inherit" underline="none" href="#"><FacebookIcon sx={{ fontSize: 16 }}/></Link>
                        </Box>
                        <Typography variant="body1" gutterBottom sx={{  textAlign:"center"}}>
                            {"© 2022 R9 Foundation All Rights Reserved."}
                        </Typography>
                    </Box>
                </Container>
            </footer>
        </>
    )

};

export default Footer;
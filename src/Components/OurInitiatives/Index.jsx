import * as React from 'react';
import "./index.scss";
import Img1 from "../../images/noice.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
// Material Ints
import {
 Container,
  Box,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
} from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const OurInitiatives = ({}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <>
            <Box className="ourInitiatives" sx={{ mb:20 }}>
                <Container maxWidth="md">
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Box sx={{ display: "flex", justifyContent:"center",mb:5 }}>
                            <Typography variant="h2" gutterBottom className="heading1">
                                {"Our Initiatives"}
                            </Typography>
                        </Box>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ display: "flex", justifyContent:"center"}}>
                                    <TabList className='tab' centered onChange={handleChange} aria-label="lab API tabs example" sx={{ border: 1, borderColor: 'divider',borderRadius: '50px',p:0.50,display: 'inline-flex'}}>
                                        <Tab label="Noise pollution free India" value="1" />
                                        <Tab label="Prosthetic" value="2" />
                                        <Tab label="Feeds" value="3" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1" sx={{ mt:7 }}>
                                    <Grid spacing={4} container>
                                        <Grid item xs={12} sm={6} md={5}>
                                            <Box className='image' sx={{ position:"relative" }}>
                                                <img className='w-100' src={Img1} alt=""/>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={7}>
                                            <Box className='content'>
                                                <Typography variant="h4" gutterBottom className='title' sx={{ mb:3 }}>
                                                {"Noise pollution free India"}
                                                </Typography>
                                                <Typography variant="subtitle2" gutterBottom className='subtitle' sx={{ mb:3 }}>
                                                    {"Let’s play the universal music."}
                                                </Typography>
                                                <List className='list'>
                                                    <ListItem>
                                                        <ListItemText primary="Nsectetur cing elit." />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Suspe ndisse suscipit sagittis Leo." />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Entum estibulum dignissim posuere." />
                                                    </ListItem>
                                                </List>
                                            </Box>
                                        </Grid>
                                    </Grid>                            
                                </TabPanel>
                                <TabPanel value="2" sx={{ mt:7 }}>
                                    <Grid spacing={4} container>
                                        <Grid item xs={12} sm={6} md={5}>
                                            <Box className='image' sx={{ position:"relative" }}>
                                                <img className='w-100' src={Img1} alt=""/>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={7}>
                                            <Box className='content'>
                                                <Typography variant="h4" gutterBottom className='title' sx={{ mb:3 }}>
                                                {"Fusce molestie odio neque"}
                                                </Typography>
                                                <Typography variant="subtitle2" gutterBottom className='subtitle' sx={{ mb:3 }}>
                                                    {"Suspendisse eleifend risus non justo porta."}
                                                </Typography>
                                                <List className='list'>
                                                    <ListItem>
                                                        <ListItemText primary="Nsectetur cing elit." />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Suspe ndisse suscipit sagittis Leo." />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Entum estibulum dignissim posuere." />
                                                    </ListItem>
                                                </List>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="3" sx={{ mt:7 }}>
                                    <Grid spacing={4} container>
                                        <Grid item xs={12} sm={6} md={5}>
                                            <Box className='image' sx={{ position:"relative" }}>
                                                <img className='w-100' src={Img1} alt=""/>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={7}>
                                            <Box className='content'>
                                                <Typography variant="h4" gutterBottom className='title' sx={{ mb:3 }}>
                                                {"Donec convallis ultricies vulputate"}
                                                </Typography>
                                                <Typography variant="subtitle2" gutterBottom className='subtitle' sx={{ mb:3 }}>
                                                    {"Let’s play the universal music."}
                                                </Typography>
                                                <List className='list'>
                                                    <ListItem>
                                                        <ListItemText primary="Nsectetur cing elit." />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Suspe ndisse suscipit sagittis Leo." />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Entum estibulum dignissim posuere." />
                                                    </ListItem>
                                                </List>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </AnimationOnScroll>
                </Container>
            </Box>
        </>
    );
};


export default OurInitiatives;
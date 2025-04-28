import { Box, Container, Stack, Typography, Link, Grid} from "@mui/material";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
//import FooterLink from "./FooterLink";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

  
export default function Footer() {
    return (
        <Box bgcolor="#1B3C74"  pb={3} pt={6} >
            <Container>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid >
                        <Stack
                            alignItems="flex-start"
                            justifyContent="space-between"
                            height={1}
                        >
                            <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
                            <Stack direction="row" spacing={1.5}>
                                <Box component="img" src={facebook} height={36} />
                                <Box component="img" src={twitter} height={36} />
                                <Box component="img" src={youtube} height={36} />
                                <Box component="img" src={pinterest} height={36} />
                            </Stack>
                        </Stack>
                    </Grid>
                <Grid>
                    <Stack>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />About US</Typography></Link>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Our Pricing</Typography></Link>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Our Gallary</Typography></Link>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Appointment</Typography></Link>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Privacy Policy</Typography></Link>
                    </Stack>
                </Grid>
                <Grid>
                    <Stack>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Orthology</Typography></Link>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Neurology</Typography></Link>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Detal Care</Typography></Link>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Opthalmology</Typography></Link>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Cardiology</Typography></Link>
                    </Stack>
                </Grid>
                <Grid>
                    <Stack>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />About US</Typography></Link>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Our Pricing</Typography></Link>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Our Gallary</Typography></Link>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Appointment</Typography></Link>
                        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}><Typography><KeyboardArrowRightIcon />Privacy Policy</Typography></Link>
                    </Stack>
                </Grid>
                </Grid>
                <Typography
                    fontWeight={300}
                    color="#fff"
                    fontSize={14}
                    pt={3}
                    mt={5}
                    borderTop="1px solid rgba(255,255,255,0.1)"
                    textAlign={"center"}
                >
                    Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
                </Typography>
            </Container>
        </Box>
    );
}
import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import appstore from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";


export default function DownloadApp() {
    return (
        <Box sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }} >
            <Container>
                <Grid container spacing={4} justifyContent="center">
                    <Grid container width="50%">
                        <Box src={mobile} component="img"  width="100%" height="auto" />
                    </Grid>
                
                    <Grid>
                    <Box position="relative" pl={{ xs: "36px", md: "50px" }} mb={{ xs: 4, md: 0 }}>
                        <Typography variant="h2" mb={2}>Download the<br/><span style={{ color: "#2AA7FF" }}>Medify{" "}</span>App</Typography>
                        <Box 
                            src={arrow} 
                            component="img" 
                            width={{ xs: 24, md: 40 }} 
                            position="absolute" 
                            left={-10} 
                            top={50} 
                            height={"120px"}
                        />
                    </Box>
                    <SmsForm />
                    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 2 }} ml={6}>
                        <Button
                            sx={{
                                bgcolor: "#333",
                                color: "#fff",
                                py: 1.5,
                                borderRadius: 1.5,
                            }}
                            size={"large"}
                            startIcon={<img src={playstore} height={24} alt={"plastore"}/>}
                            variant="contained"
                            disableElevation
                        >
                            Google Play
                        </Button>
                        <Button
                            sx={{
                                bgcolor: "#333",
                                color: "#fff",
                                py: 1.5,
                                borderRadius: 1.5,
                            }}
                            size="large"
                            startIcon={<img src={appstore} height={24} alt={"appstore"}/>}
                            variant="contained"
                            disableElevation
                        >
                            App Store
                        </Button>
                    </Stack>
                </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
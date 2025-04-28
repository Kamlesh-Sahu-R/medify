import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography, Stack} from "@mui/material";
import patientcaring from '../../../assets/patientcaring.png'
import blueWriteTick from '../../../assets/tick-blue.png'

export default function PatientCaring() {
    return (
        <Box py = {6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container >
                <Stack direction={{ xs: 'column', md: "row" }} spacing={6} alignItems="center" pt={2}>
                    <Box>
                        <Box
                            component='img'
                            src={patientcaring}
                            width="519px"
                            height="486px"
                        />
                    </Box>
                    <Box>
                        <Typography
                            fontWeight={600}
                            color="primary.main"
                        >
                            HELPING PATIENTS FROM AROUND THE GLOBE!!
                        </Typography>
                        <Typography variant="h2" mb={1}>
                            Patient <Box component='span' color='primary.main'>Caring</Box>
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8}>
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                        </Typography>
                        <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={blueWriteTick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Stay Updated About Your Health'
                                    listitemtextprops={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={blueWriteTick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Check Your Results Online'
                                    listitemtextprops={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={blueWriteTick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Manage Your Appointments'
                                    listitemtextprops={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                        </List>
                    </Box> 
                </Stack>
            </Container>
        </Box> 
    );
}
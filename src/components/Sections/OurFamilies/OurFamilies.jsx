import { Box, Container, Typography, Stack} from "@mui/material";
import cards from "../../../assets/our-families-cards.png";


export default function OurFamilies() {
    return (
        <Box py = {1} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container >
                <Stack direction={{ xs: 'column', md: "row" }} spacing={6} alignItems="center">
                    <Box py = {6} >
                        <Typography
                            fontWeight={600}
                            color="#2AA7FF"
                        >
                            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                        </Typography>
                        <Typography variant="h2" color="#1B3C74" fontSize="48px">
                            Our Families
                        </Typography>
                        <Typography color='#77829D' lineHeight="240%" fontWeight={500} fontFamily="inter" fontSize="17px">
                            We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                        </Typography> 
                    </Box>
                    <Box>
                        <Box
                            component='img'
                            src={cards}
                            width={1} 
                            height='240%'
                        />
                    </Box> 
                </Stack>
            </Container>
        </Box>
    );
}
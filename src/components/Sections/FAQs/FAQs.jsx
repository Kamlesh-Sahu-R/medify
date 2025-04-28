import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from '../../../assets/faqs-banner.jpg'
import AccordianFAQs from "./AccordianFAQs";


export default function FAQs() {

    const faqs1 = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'This is best hospital for the treatment.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'We have good quality of doctors.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'We 10-15 yeas of experienced doctors.'
        },
        {
            question: 'How to get appointment for emergency cases?',
            answer: 'Please contacte us via phone call to XXXXXXXXXX.'
        }
    ];


    return (
        <Box py={3}>
            <Container maxWidth='xl'>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Get Your Answer
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2} color="#1B3C74" fontWeight={600}>
                    Frequently Asked Questions
                </Typography>
                <Grid container justifyContent={"center"}  alignItems={"center"} spacing={10}>
                    <Grid justifyContent={"center"} alignItems={"center"} size={4}>
                        <Box
                            src={faqBanner}
                            component='img'
                            width={1}
                            height='auto'
                        />
                    </Grid>
                    <Grid size={4} justifyContent={"center"} alignItems={"center"} >
                        <AccordianFAQs faqs={faqs1} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

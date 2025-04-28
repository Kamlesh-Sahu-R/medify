import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';

export default function AccordianFAQs({faqs}) {
    return(
        <div>
            {faqs.map((item, index) => (
                            <Accordion 
                                key={index}
                                sx={{
                                    boxShadow: 'none',       
                                    border: 'none', 
                                    '&::before': {
                                        display: 'none',
                                    },
                                }}
                            >
                                <AccordionSummary 
                                    aria-controls={`panel${index}d-content`} 
                                    id={`panel${index}d-header`}
                                    expandIcon={<AddIcon sx={{ color: 'primary.main' }} />}
                                >
                                    <Typography 
                                        fontSize={18}
                                        fontWeight={700}
                                        color='#1B3C74'
                                        lineHeight={2}
                                    >
                                        {item.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
        </div>
    );
}
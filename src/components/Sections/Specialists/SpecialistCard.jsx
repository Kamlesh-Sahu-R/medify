import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function SpecialistCard({ img, title, designation }) {
  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="370px"
          height="505px"
          image={img}
          alt={title}
          mb={2}
          sx={{ boxShadow: '0 15px 55px -10px rgba(0,0,0,0.09)', borderRadius: '250px 240px 4px 4px' }}
        />
        <CardContent>
            <Typography
                fontSize={{ xs: 16, md: 24 }}
                color='#1B3C74'
                textAlign={'center'}
            >
                {title}
            </Typography>
            <Typography
                fontSize={{ xs: 14, md: 16 }}
                fontWeight={500}
                color='primary.main'
                textAlign={'center'}
            >
                {designation}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

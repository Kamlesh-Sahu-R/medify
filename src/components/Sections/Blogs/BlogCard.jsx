import { Card, Box, Stack, CardContent, CardMedia, Typography } from "@mui/material";
import blogImg from '../../../assets/blog.png'
import person from '../../../assets/person.png'

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345, height: "485px"}}>
      <CardMedia
        component="img"
        alt="blog card"
        height="295"
        image={blogImg}
      />
      <CardContent>
        <Typography color='#77829D' fontWeight={500} mb={1} fontSize={{ xs: 12, md: 16 }}>
            Medical | March 31, 2022
        </Typography>
        <Typography component='h3' color='#1B3C74' fontSize={{ xs: 14, md: 18 }} fontWeight={500} lineHeight={1.2} mb={2}>
            6 Tips To Protect Your Mental Health When You're Sick
        </Typography>
        <Stack direction='row' spacing={1} alignItems='center'>
                    <Box
                        component='img'
                        src={person}
                        height={32}
                        width={32}
                    />
                    <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }}>
                        Rebecca Lee
                    </Typography>
                </Stack>
      </CardContent>
    </Card>
  );
}

import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

export default function Blogs() {
    return (
        <Box py={6}>
            <Container>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Blog & News
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2} color="#1B3C74">
                    Read Our Latest News
                </Typography>

                <Grid container spacing={4}>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </Grid>

            </Container>
        </Box>
    )
}
import { Box, Container, Grid, Typography, List, ListItem, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 6, bgcolor: 'grey.900', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Product
            </Typography>
            <List dense>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">Features</Link>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">Testimonials</Link>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">Highlights</Link>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">Pricing</Link>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">FAQs</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <List dense>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">About us</Link>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">Careers</Link>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">Press</Link>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">Legal</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Terms
            </Typography>
            <List dense>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">Privacy</Link>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">Contact</Link>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">Privacy Policy</Link>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <Link href="#" color="inherit" underline="hover">Terms of Service</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              AI Flashcard + Quiz
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              MUI: A popular React UI framework
            </Typography>
            <Typography variant="body2">
              Copyright © AI Flashcard + Quiz 2026
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

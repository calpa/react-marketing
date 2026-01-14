import { Box, Container, TextField, Button, Typography } from '@mui/material';

const Newsletter = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Join the newsletter
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Subscribe for weekly updates. No spams ever!
        </Typography>
        <Box component="form" sx={{ display: 'flex', gap: 2, maxWidth: 500, mx: 'auto' }}>
          <TextField
            placeholder="Email"
            variant="outlined"
            sx={{ 
              bgcolor: 'white', 
              borderRadius: 1,
              flexGrow: 1,
            }}
          />
          <Button variant="contained" sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: 'secondary.dark' } }}>
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;

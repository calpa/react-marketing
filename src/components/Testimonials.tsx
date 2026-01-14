import { Box, Container, Grid, Card, CardContent, Avatar, Typography } from '@mui/material';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Medical Student',
    company: 'Logo 1',
    content: 'AI Flashcard + Quiz has revolutionized my study routine. The AI-generated cards perfectly match my learning style, and I\'ve seen a 40% improvement in my retention rates.',
    avatar: 'SC',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Software Developer',
    company: 'Logo 2',
    content: 'The adaptive learning technology is incredible. It focuses on my weak areas and helps me master complex concepts faster than traditional methods.',
    avatar: 'MR',
  },
  {
    name: 'Emily Johnson',
    role: 'Language Learner',
    company: 'Logo 3',
    content: 'I love how the AI creates contextual examples for vocabulary. It\'s like having a personal tutor available 24/7. Highly recommended!',
    avatar: 'EJ',
  },
  {
    name: 'David Kim',
    role: 'CS Student',
    company: 'Logo 4',
    content: 'The quiz generation feature is amazing. It creates challenging questions that really test my understanding. Perfect for exam preparation.',
    avatar: 'DK',
  },
  {
    name: 'Lisa Thompson',
    role: 'Marketing Professional',
    company: 'Logo 5',
    content: 'As someone constantly learning new skills, this platform has been invaluable. The AI helps me focus on what matters most.',
    avatar: 'LT',
  },
  {
    name: 'James Wilson',
    role: 'High School Teacher',
    company: 'Logo 6',
    content: 'I use this to create study materials for my students. The AI saves me hours of work and the results are consistently high-quality.',
    avatar: 'JW',
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Testimonials
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
          See what our customers love about our products. Discover how we excel in efficiency, durability, and satisfaction. Join us for quality, innovation, and reliable support.
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
                    "{testimonial.content}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2">{testimonial.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;

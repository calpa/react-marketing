import { Container, Grid, Typography, Box } from '@mui/material';
import { Psychology, TrendingUp, School, Speed, Group, Star } from '@mui/icons-material';

const highlights = [
  {
    icon: <Psychology />,
    title: 'Adaptable performance',
    description: 'Our AI effortlessly adjusts to your learning style, boosting efficiency and simplifying your study sessions.',
  },
  {
    icon: <TrendingUp />,
    title: 'Built to last',
    description: 'Experience unmatched durability in your learning journey with lasting knowledge retention.',
  },
  {
    icon: <School />,
    title: 'Great user experience',
    description: 'Integrate our platform into your routine with an intuitive and easy-to-use interface designed for learners.',
  },
  {
    icon: <Speed />,
    title: 'Innovative functionality',
    description: 'Stay ahead with AI features that set new standards, addressing your evolving learning needs better than the rest.',
  },
  {
    icon: <Group />,
    title: 'Reliable support',
    description: 'Count on our responsive customer support, offering assistance that goes beyond the subscription.',
  },
  {
    icon: <Star />,
    title: 'Precision in every detail',
    description: 'Enjoy a meticulously crafted platform where AI-generated content makes a significant impact on your learning.',
  },
];

const Highlights = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Highlights
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
        Explore why our product stands out: adaptability, durability, user-friendly design, and innovation. Enjoy reliable customer support and precision in every detail.
      </Typography>
      <Grid container spacing={4}>
        {highlights.map((highlight, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <Box sx={{ display: 'flex', p: 2 }}>
              <Box sx={{ mr: 3, color: 'primary.main' }}>
                {highlight.icon}
              </Box>
              <Box>
                <Typography variant="h6" gutterBottom>
                  {highlight.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {highlight.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Highlights;

import { Container, Grid, Typography, Box, Card, CardContent } from '@mui/material';
import { Psychology, Speed, Group, ArrowForward } from '@mui/icons-material';

const features = [
  {
    icon: <Psychology sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'AI-Powered Learning',
    description: 'Advanced algorithms that adapt to your learning style and pace, creating personalized study paths for maximum retention.',
    badge: 'Smart Technology',
  },
  {
    icon: <Speed sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Fast Progress Tracking',
    description: 'Monitor your improvement with detailed analytics and insights. See your learning curve and optimize your study time.',
    badge: 'Real-time Analytics',
  },
  {
    icon: <Group sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Collaborative Study',
    description: 'Share flashcards and quiz with friends for better learning outcomes. Study together and achieve more as a team.',
    badge: 'Team Learning',
  },
];

const Features = () => {
  return (
    <Box id="features" sx={{ py: { xs: 10, md: 16 }, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography 
            variant="h4" 
            component="h2"
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: 'text.primary',
              mb: 3
            }}
          >
            Powerful features for modern learning
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '1.125rem',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Our platform combines cutting-edge AI with proven learning techniques to deliver an unmatched educational experience
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  p: 3,
                  borderRadius: 4,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                    '& .feature-icon': {
                      transform: 'scale(1.1)',
                      color: 'primary.dark',
                    }
                  }
                }}
              >
                <CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 3 }}>
                    <Box className="feature-icon" sx={{ 
                      display: 'inline-flex',
                      p: 2.5,
                      borderRadius: 3,
                      bgcolor: 'rgba(37, 99, 235, 0.08)',
                      transition: 'all 0.3s ease',
                      mb: 3
                    }}>
                      {feature.icon}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Typography 
                        variant="h5" 
                        component="h3"
                        sx={{ 
                          fontWeight: 600,
                          fontSize: '1.25rem',
                          color: 'text.primary',
                          lineHeight: 1.3
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: 'primary.main',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          bgcolor: 'rgba(37, 99, 235, 0.08)',
                          px: 2,
                          py: 0.5,
                          borderRadius: 1
                        }}
                      >
                        {feature.badge}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: '1rem',
                      flexGrow: 1,
                      mb: 3
                    }}
                  >
                    {feature.description}
                  </Typography>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    color: 'primary.main',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    '&:hover': {
                      '& .arrow-icon': {
                        transform: 'translateX(4px)',
                      }
                    }
                  }}>
                    <span>Learn more</span>
                    <ArrowForward 
                      className="arrow-icon" 
                      sx={{ 
                        fontSize: 18,
                        transition: 'transform 0.3s ease'
                      }} 
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '0.875rem'
            }}
          >
            ✨ And many more features designed to accelerate your learning journey
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

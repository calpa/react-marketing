import { Box, Container, Grid, TextField, Button, Typography, Chip } from '@mui/material';
import { School, AutoAwesome, TrendingUp } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box 
      id="hero"
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 2 }}>
              <Chip 
                label="🚀 New AI-Powered Learning" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                }} 
              />
            </Box>
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                mb: 2,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              AI Flashcard + Quiz
            </Typography>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                mb: 3,
                fontWeight: 500,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                opacity: 0.95
              }}
            >
              Transform your learning with intelligent flashcards and personalized quizzes
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4,
                fontSize: '1.125rem',
                opacity: 0.9,
                maxWidth: 500,
                lineHeight: 1.7
              }}
            >
              Experience the future of education with our AI-powered platform that adapts to your learning style, 
              generates personalized content, and helps you master any subject faster than ever before.
            </Typography>
            <Box 
              component="form" 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                gap: 2, 
                mb: 3,
                maxWidth: 520
              }}
            >
              <TextField
                placeholder="Enter your email"
                fullWidth
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.95)', 
                  borderRadius: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    height: '100%',
                    '& fieldset': {
                      borderColor: 'transparent',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputBase-input': {
                    py: 1.75,
                    px: 2,
                    display: 'flex',
                    alignItems: 'center',
                  }
                }}
              />
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: '#1F2937',
                  color: 'white',
                  px: 4,
                  py: 1.75,
                  borderRadius: 2,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                  '&:hover': { 
                    bgcolor: '#374151',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                Start Free Trial
              </Button>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.875rem' }}>
              ✓ No credit card required ✓ 14-day free trial ✓ Cancel anytime
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', mt: { xs: 4, md: 0 } }}>
              <Box sx={{ position: 'relative' }}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    position: 'relative'
                  }}
                >
                  <School sx={{ fontSize: 280, opacity: 0.3 }} />
                </Box>
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: -20,
                    right: -40,
                    display: 'flex',
                    gap: 2
                  }}
                >
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    p: 2, 
                    borderRadius: 2,
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                    <AutoAwesome sx={{ fontSize: 24 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>AI-Powered</Typography>
                  </Box>
                </Box>
                <Box 
                  sx={{ 
                    position: 'absolute',
                    bottom: -20,
                    left: -40,
                    display: 'flex',
                    gap: 2
                  }}
                >
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    p: 2, 
                    borderRadius: 2,
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                    <TrendingUp sx={{ fontSize: 24 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Fast Results</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        bgcolor: 'rgba(255, 255, 255, 0.95)', 
        color: 'text.primary',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        py: 1
      }}
    >
      <Toolbar sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              color: '#10B981',
              fontWeight: 700,
              fontSize: { xs: '1.125rem', sm: '1.25rem' },
              letterSpacing: '-0.5px',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('hero')}
          >
            🧠 AI Flashcard + Quiz
          </Typography>
        </Box>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          <Button 
            color="inherit" 
            onClick={() => scrollToSection('features')}
            sx={{ 
              px: 3,
              py: 1.5,
              fontWeight: 500,
              fontSize: '0.95rem',
              color: 'text.secondary',
              '&:hover': {
                color: '#10B981',
                bgcolor: 'rgba(16, 185, 129, 0.08)',
                borderRadius: 2
              }
            }}
          >
            Features
          </Button>
          <Button 
            color="inherit" 
            onClick={() => scrollToSection('pricing')}
            sx={{ 
              px: 3,
              py: 1.5,
              fontWeight: 500,
              fontSize: '0.95rem',
              color: 'text.secondary',
              '&:hover': {
                color: '#10B981',
                bgcolor: 'rgba(16, 185, 129, 0.08)',
                borderRadius: 2
              }
            }}
          >
            Pricing
          </Button>
          <Button 
            color="inherit" 
            onClick={() => scrollToSection('testimonials')}
            sx={{ 
              px: 3,
              py: 1.5,
              fontWeight: 500,
              fontSize: '0.95rem',
              color: 'text.secondary',
              '&:hover': {
                color: '#10B981',
                bgcolor: 'rgba(16, 185, 129, 0.08)',
                borderRadius: 2
              }
            }}
          >
            Testimonials
          </Button>
        </Box>
        
        <Button 
          variant="contained" 
          onClick={() => scrollToSection('hero')}
          sx={{ 
            ml: { xs: 1, md: 3 },
            px: 3,
            py: 1.5,
            fontWeight: 600,
            fontSize: '0.95rem',
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
              transform: 'translateY(-1px)',
            }
          }}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

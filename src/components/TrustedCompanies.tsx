import { Container, Typography, Box } from '@mui/material';

const companies = [
  'TechCorp Solutions', 'EduTech Inc', 'LearnSmart AI', 'StudyPro Systems',
  'BrainBoost Technologies', 'QuizMaster Pro'
];

const TrustedCompanies = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h4" 
            component="h2"
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: 'text.primary',
              mb: 2
            }}
          >
            Trusted by leading companies
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '1.125rem',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Join thousands of organizations that use our platform to enhance their learning and development programs
          </Typography>
        </Box>
        
        <Box 
          sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 3, md: 6 },
            py: 4
          }}
        >
          {companies.map((company, index) => (
            <Box 
              key={index}
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 2, sm: 3 },
                py: 2,
                bgcolor: 'white',
                borderRadius: 3,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                minWidth: { xs: '140px', sm: '160px' },
                height: { xs: '80px', sm: '90px' },
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)',
                  borderColor: 'primary.main',
                }
              }}
            >
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 600,
                  color: 'text.secondary',
                  textAlign: 'center',
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              >
                {company}
              </Typography>
            </Box>
          ))}
        </Box>
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontStyle: 'italic',
              fontSize: '0.875rem'
            }}
          >
            And many more innovative companies worldwide
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TrustedCompanies;

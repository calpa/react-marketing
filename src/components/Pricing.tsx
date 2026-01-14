import { Box, Container, Grid, Card, CardContent, CardActions, Button, Typography, Chip, List, ListItem, ListItemText } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const pricingPlans = [
  {
    title: 'Free',
    price: '$0',
    period: 'per month',
    features: [
      '100 flashcards per month',
      'Basic quiz generation',
      'Limited AI suggestions',
      'Community support',
    ],
    buttonText: 'Get Started',
  },
  {
    title: 'Professional',
    price: '$15',
    period: 'per month',
    recommended: true,
    features: [
      'Unlimited flashcards',
      'Advanced quiz generation',
      'Personalized AI learning paths',
      'Priority email support',
      'Progress analytics',
      'Study groups',
    ],
    buttonText: 'Start Free Trial',
  },
  {
    title: 'Enterprise',
    price: '$30',
    period: 'per month',
    features: [
      'Everything in Professional',
      'Custom AI models',
      'Team collaboration tools',
      'API access',
      'Phone & email support',
      'Custom integrations',
    ],
    buttonText: 'Contact Sales',
  },
];

const Pricing = () => {
  return (
    <Box id="pricing" sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
          Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material UI components with little customization.
        </Typography>
        <Grid container spacing={4} alignItems="flex-start">
          {pricingPlans.map((plan, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', ...(plan.recommended && { border: 2, borderColor: 'primary.main' }) }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  {plan.recommended && (
                    <Chip label="Recommended" color="primary" size="small" sx={{ mb: 2 }} />
                  )}
                  <Typography variant="h5" component="h2" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Typography variant="h3" color="primary.main" gutterBottom>
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {plan.period}
                  </Typography>
                  <List sx={{ textAlign: 'left' }}>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ py: 0.5 }}>
                        <CheckCircle sx={{ mr: 1, color: 'success.main', fontSize: 20 }} />
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', p: 3 }}>
                  <Button variant={plan.recommended ? "contained" : "outlined"} fullWidth>
                    {plan.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Chip,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  ExpandMore,
  Star,
  CheckCircle,
  Email,
  Send,
  Menu,
  School,
  Psychology,
  Speed,
  Group,
  TrendingUp,
} from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const companies = [
  'TechCorp Solutions', 'EduTech Inc', 'LearnSmart AI', 'StudyPro Systems',
  'BrainBoost Technologies', 'QuizMaster Pro'
];

const features = [
  {
    icon: <Psychology sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'AI-Powered Learning',
    description: 'Advanced algorithms that adapt to your learning style and pace',
  },
  {
    icon: <Speed sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Fast Progress Tracking',
    description: 'Monitor your improvement with detailed analytics and insights',
  },
  {
    icon: <Group sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Collaborative Study',
    description: 'Share flashcards and quiz with friends for better learning outcomes',
  },
];

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

const faqs = [
  {
    question: 'How does the AI generate flashcards?',
    answer: 'Our AI analyzes your learning materials and generates optimized flashcards based on proven learning techniques. It considers factors like difficulty, context, and your personal learning patterns.',
  },
  {
    question: 'Can I import my existing study materials?',
    answer: 'Yes! You can import PDFs, documents, and even web pages. Our AI will automatically extract key information and create flashcards and quizzes.',
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Currently, we offer a responsive web experience that works perfectly on mobile devices. Native apps for iOS and Android are coming soon!',
  },
  {
    question: 'How accurate are the AI-generated quizzes?',
    answer: 'Our AI has been trained on millions of study materials and achieves 95%+ accuracy in generating relevant and challenging quiz questions.',
  },
  {
    question: 'Can I collaborate with classmates?',
    answer: 'Absolutely! Professional and Enterprise plans include collaboration features where you can share flashcards, study together, and track group progress.',
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        {/* Navigation */}
        <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: 'text.primary' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
              AI Flashcard + Quiz
            </Typography>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button variant="contained" sx={{ ml: 2 }}>
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'primary.main', color: 'white' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                  AI Flashcard + Quiz
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                  Our latest AI-powered learning platform
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                  Explore our cutting-edge AI study tools, delivering high-quality learning solutions tailored to your needs. Elevate your learning experience with top-tier features and intelligent study assistance.
                </Typography>
                <Box component="form" sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <TextField
                    placeholder="Email"
                    variant="outlined"
                    sx={{ 
                      bgcolor: 'white', 
                      borderRadius: 1,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255,255,255,0.3)',
                        },
                      }
                    }}
                    fullWidth
                  />
                  <Button variant="contained" size="large" sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: 'secondary.dark' } }}>
                    Start now
                  </Button>
                </Box>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  By clicking "Start now" you agree to our Terms & Conditions.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <School sx={{ fontSize: 300, opacity: 0.3 }} />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Trusted Companies */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Trusted by the best companies
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {companies.map((company, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'grey.50' }}>
                  <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                    {company}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Product Features */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Product features
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
            Provide a brief overview of the key features of the product. For example, you could list the number of features, their types or benefits, and add-ons.
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Testimonials */}
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
                <Grid item xs={12} md={6} lg={4} key={index}>
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

        {/* Highlights */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Highlights
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
            Explore why our product stands out: adaptability, durability, user-friendly design, and innovation. Enjoy reliable customer support and precision in every detail.
          </Typography>
          <Grid container spacing={4}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
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

        {/* Pricing */}
        <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
              Pricing
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
              Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material UI components with little customization.
            </Typography>
            <Grid container spacing={4} alignItems="flex-start">
              {pricingPlans.map((plan, index) => (
                <Grid item xs={12} md={4} key={index}>
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

        {/* FAQ */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Frequently asked questions
          </Typography>
          <Box sx={{ mt: 4 }}>
            {faqs.map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>

        {/* Newsletter */}
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

        {/* Footer */}
        <Box sx={{ py: 6, bgcolor: 'grey.900', color: 'white' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
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
              <Grid item xs={12} md={3}>
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
              <Grid item xs={12} md={3}>
                <Typography variant="h6" gutterBottom>
                  Terms
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0 }}>
                    <Link href="#" color="inherit" underline="hover">Privacy</Link>
                  </ListItem>
                  <ListItem sx={{ py: 0 }}>
                    <Link href="#" color="inherit" underline="hover">Contact</Link>
      </Box>
    </ThemeProvider>
  );
}

export default App;

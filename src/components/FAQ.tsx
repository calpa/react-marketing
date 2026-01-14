import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

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

const FAQ = () => {
  return (
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
  );
};

export default FAQ;

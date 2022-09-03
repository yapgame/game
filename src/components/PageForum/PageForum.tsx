import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ForumCard from './ForumCard';
import { styleButton } from '../PageSignIn/styles';

const cards = [1, 2, 3];

function PageForum() {
  return (
    <Container maxWidth="lg">
      <Box>
        <Button
          variant="outlined"
          size="large"
          sx={styleButton}
          type="submit"
        >
          Create
        </Button>
        <Typography variant="overline" display="block" gutterBottom>
          Forum
        </Typography>
        {cards.map((card) => <ForumCard key={card} />)}
      </Box>
    </Container>
  );
}

export default PageForum;

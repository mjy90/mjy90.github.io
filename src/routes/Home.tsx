import React from 'react';
import {
  Container,
  Grid,
  Typography,
} from '@mui/material';

import ScaledText from '../components/ScaledText';
import MikeCheers from '../assets/Cheers.jpg';
import MikeCheersMask from '../assets/parallelogram-mask.png';
import Accordion from '../components/Accordion';

import { faqs } from '../constants/faqs';

export default function Home() {
  return (
    <Container>
      <Grid container spacing={4} alignItems='center'>
        {/* Title row */}
        <Grid item xs={12} md={6}>
          <ScaledText text={"mike young,\nsoftware\ndeveloper"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={MikeCheers}
            alt="Mike, donning a goofy smile and holding a coffee mug, as if to say 'Cheers!'"
            style={{
              width: '100%',
              maskImage: `url(${MikeCheersMask})`,
              WebkitMaskImage: `url(${MikeCheersMask})`,
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </Grid>

        {/* Philosophy */}
        <Grid item xs={12} md={6}>
          {/* Show a random image */}
          <img
            src="https://source.unsplash.com/random"
            alt="Random image from Unsplash"
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ScaledText text='my philosophy' />
          <Typography variant='body1' my={2}>
            Build with compassion. Mistakes will happen. This stuff is hard.
          </Typography>
          <Typography variant='body1' my={2}>
            Help, and be comfortable asking for help.
          </Typography>
          <Typography variant='body1' my={2}>
            Push your limits. Allow ego and absolutism to wither in the long shadow of curiosity!
          </Typography>
        </Grid>

        {/* FAQ */}
        <Grid item xs={12}>
          <Typography variant='h1' mb={2}>faq</Typography>
          <Accordion items={faqs} />
        </Grid>
      </Grid>
    </Container>
  );
}

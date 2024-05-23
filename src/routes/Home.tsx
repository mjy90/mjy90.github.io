import React from 'react';
import {
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
    <Grid container alignItems='center'>
      {/* Title row */}
      <Grid item xs={12} md={7}>
        <ScaledText text={"mike young,\nsoftware\ndeveloper"} />
      </Grid>
      <Grid item xs={12} md={5}>
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

      {/* About Me */}
      <Grid item xs={12}>
        <Typography variant='h1' mb={2}>a bit about me</Typography>
        <Typography variant='body1' my={2}>
          I'm a software engineer with ~11 years experience building intuitive, reliable stuff and an
          inclusive, empowering, safe-to-fail engineering culture.
        </Typography>
        <Typography variant='body1' my={2}>
          I get a particular kick out of front-end developoment. Call me simple, but I like the
          instant gratification of seeing pretty pictures in the browser.
          That said, I also enjoy the challenge of architecting large systems, optimizing complex
          queries, or trying to make sense of that legacy code none dare touch.
        </Typography>
        <Typography variant='body1' my={2}>
          I'm also a big fan of mentoring junior folks through pair programming, code review, and
          generally showing up for them. I get most of my fulfillment from helping others.
        </Typography>
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
  );
}

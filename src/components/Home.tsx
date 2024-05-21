import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import ScaledText from './ScaledText';
import MikeCheers from '../assets/Cheers.jpg';
import MikeCheersMask from '../assets/parallelogram-mask.png';
import Accordion from './Accordion';

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
          <Accordion
            items={[
              {
                title: "What's your favorite part of being a software developer?",
                content: [
                  `I get most of my fulfillment from helping others. I enjoy taking time to
                  unstick others and mentor junior folks through pair programming, code review,
                  and doing reconnaissance.`,
                  `I also love a good, hard problem to solve. Whether it's architecting large
                  systems, or optimizing a complex query, or diving into that legacy code no one
                  wants to touch, my brain just lights up.`
                ],
              },
              {
                title: "What was your greatest technical accomplishment?",
                content: `
                  I don't know how great the accomplishment was to others, but my most formative
                  accomplishment was the Farm Manager I built at Crop One, a now-defunct
                  hydroponics lettuce company. It was a system used by the Production and
                  Science teams to improve the efficiency, traceability, and data integrity of
                  operations around the farm. It employed intuitive UIs and data visualization
                  that mimicked real-life infrastructure.
                `,
              },
              {
                title: 'What are your greatest strength and weakness?',
                content: (
                  <>
                    <Typography pb={2}>Really? This ol' schtick? Alright, here we go…</Typography>
                    <Typography pb={2}>
                      I'd say <strong>my greatest strength is curiosity</strong>. The older and more
                      experienced I become, the more I lean into it, allowing curiosity to override
                      ego, sureness, and even boredom. Everyone has something to teach you. Every
                      subject has unknowns. From every meeting, however boring, can insight be
                      gleaned! But let's keep them to a minimum anyway, shall we?
                    </Typography>
                    <Typography pb={2}>
                      <strong>My greatest weakness is perfectionism</strong>. I don't want to put
                      my name on something unless it's unimpeachable. This is a holdover from
                      earlier in my career, when I had an ego—now the ego is gone, but the shame
                      lives on 🫠 But that perfectionism also means I deliver tested, well-
                      documented, readable, and sometimes even performant code!
                    </Typography>
                    <Typography color='text.secondary'><em>
                      What's this…? In a <strong>stunning</strong> twist—which could <strong>never
                      </strong> have been foreseen—Mike's chosen weakness of discussion is actually
                      a <strong>STRENGTH?!</strong> What incredible pageantry!
                    </em></Typography>
                  </>
                ),
              },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
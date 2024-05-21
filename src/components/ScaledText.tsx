import { Typography, TypographyOwnProps } from '@mui/material';
import React, {useEffect, useRef} from 'react';

type ScaledTextProps = {
  text: string;
  minWidth?: number;
  maxWidth?: number;
  typographyProps?: TypographyOwnProps;
};

export default function ScaledText({ text, minWidth=300, maxWidth=1000, typographyProps={} }: ScaledTextProps) {
  const lines = text.split('\n');
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = lines.map(() => useRef<HTMLDivElement>(null));

  useEffect(() => {
    // Scale each line of text by a factor of the difference of the container's width and the
    // line's width, clampoed between the min and max widths.
    const resizeText = () => {
      lineRefs.forEach((lineRef) => {
        if (lineRef.current && containerRef.current) {
          const lineWidth = lineRef.current.clientWidth;
          const containerWidth = containerRef.current.clientWidth;
          if (containerWidth && lineWidth) {
            const currentFontSize = parseFloat(getComputedStyle(lineRef.current).fontSize);
            const fontSize = Math.min(
              maxWidth,
              Math.max(
                minWidth,
                containerWidth
              ) / lineWidth * currentFontSize
            );
            lineRef.current.style.fontSize = `${fontSize}px`;
          }
        }
      });
    };
    // Resize the text
    resizeText();
    // Make the container visible only after the text has been resized, to avoid jitter.
    if (containerRef.current) containerRef.current.style.opacity = '1';
    // Repeat when the window is resized.
    window.addEventListener('resize', resizeText);
    return () => window.removeEventListener('resize', resizeText);
  }, [lineRefs, minWidth, maxWidth]);

  return (
    <div
      ref={containerRef}
      style={{ opacity: 0 }}
    >
      {lines.map((line, index) => (
        <Typography
          key={index}
          ref={lineRefs[index]}
          variant='h1'
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
          {...typographyProps}
        >
            {line}
        </Typography>
      ))}
    </div>
  );
}
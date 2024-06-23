import React, { useEffect, useState } from 'react';
import { Document, DocumentProps, Page, PageProps, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { Button, Paper, Skeleton, Snackbar, Stack, Tooltip, styled } from '@mui/material';
import { Download } from '@mui/icons-material';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import ResumeFile from '../assets/Resume.pdf';

// Start the worker to load the PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const StyledDocument = styled(Document)<DocumentProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledPage = styled(Page)<PageProps>(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
}));

type FloatingControlsProps = {
  isLoading: boolean,
};

function FloatingControls({ isLoading }: FloatingControlsProps) {

  return (
    <Snackbar open={!isLoading} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Paper>
        <Stack direction='row'>
          <Tooltip title='Download resume'>
            <span>
              <Button
                variant='contained'
                color='success'
                component='a'
                href={ResumeFile}
                download="Mike Young's Resume"
                aria-label='Download resume'
                target='_blank'
                rel='noreferrer'
                disabled={isLoading}
                endIcon={<Download />}
                sx={{px: 2}}
              >
                Download Resume
              </Button>
            </span>
          </Tooltip>
        </Stack>
      </Paper>
    </Snackbar>
  );
}

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [numPages, setNumPages] = useState<number>(0);
  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: PDFDocumentProxy): void => {
    setIsLoading(false);
    setNumPages(nextNumPages);
    console.log(`Loaded ${nextNumPages} pages`);
  }

  // Resize the page width to fit the viewport
  const [pageWidth, setPageWidth] = useState<number>(Math.min(800, window.innerWidth));
  useEffect(() => {
    const resizePage = () => {
      const pdfWidth = ResumeFile?.defaultWidth || 800;
      const newPageWidth = Math.min(pdfWidth, window.innerWidth);
      setPageWidth(newPageWidth);
    };
    // Resize the text
    resizePage();
    // Repeat when the window is resized.
    window.addEventListener('resize', resizePage);
    return () => window.removeEventListener('resize', resizePage);
  });

  return (
    <StyledDocument
      file={ResumeFile}
      onLoadSuccess={onDocumentLoadSuccess}
      options={options}
      loading={
        <Skeleton
          variant='rectangular'
          animation='wave'
          height={pageWidth * 3}
          width={pageWidth}
          sx={{ mx: 'auto' }}
        />
      }
    >
      { Array.from(new Array(numPages), (_, index) => (
        <StyledPage
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          width={pageWidth}
          renderAnnotationLayer={false}
        />
      ))}

      <FloatingControls isLoading={isLoading} />
    </StyledDocument>
  );
}

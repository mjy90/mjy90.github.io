import React, { useEffect, useState } from 'react';
import { Document, DocumentProps, Page, PageProps, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { Skeleton, styled } from '@mui/material';

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
}));

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [numPages, setNumPages] = useState<number>();
  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: PDFDocumentProxy): void => {
    setIsLoading(false);
    setNumPages(nextNumPages);
    console.log(`Loaded ${nextNumPages} pages`);
  }

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
      {Array.from(new Array(numPages), (_, index) => (
        <StyledPage
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          width={pageWidth}
        />
      ))}
    </StyledDocument>
  );
}

import React, { useEffect, useState } from 'react';
import { Document, DocumentProps, Page, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { styled } from '@mui/material';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import ResumeFile from '../assets/Resume.pdf';

// Start the worker to load the PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const StyledDocument = styled(Document)`
  display: 'flex';
  flexDirection: 'column';
  alignItems: 'center';
`;

export default function Resume() {
  const [numPages, setNumPages] = useState<number>();
  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: PDFDocumentProxy): void => {
    setNumPages(nextNumPages);
  }

  const [pageWidth, setPageWidth] = useState<number>();
  useEffect(() => {
    const resizePage = () => {
      const pdfWidth = ResumeFile?.defaultWidth || 800;
      const windowWidth = window.innerWidth;
      const pageWidth = Math.min(pdfWidth, windowWidth);
      setPageWidth(pageWidth);
    };
    // Resize the text
    resizePage();
    // Repeat when the window is resized.
    window.addEventListener('resize', resizePage);
    return () => window.removeEventListener('resize', resizePage);
  });

  return (
    <StyledDocument file={ResumeFile} onLoadSuccess={onDocumentLoadSuccess} options={options}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          width={pageWidth}
        />
      ))}
    </StyledDocument>
  );
}

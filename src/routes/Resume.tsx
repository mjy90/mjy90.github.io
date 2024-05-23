import React, { useState } from 'react';
import { Document, Page, PageProps, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { styled } from '@mui/material/styles';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import ResumeFile from '../assets/Resume.pdf';

// Start the worker to load the PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const StyledPage = styled(Page)<PageProps>(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

export default function Resume() {
  const [numPages, setNumPages] = useState<number>();
  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: PDFDocumentProxy): void => {
    setNumPages(nextNumPages);
  }

  return (
    <Document file={ResumeFile} onLoadSuccess={onDocumentLoadSuccess} options={options}>
      {Array.from(new Array(numPages), (el, index) => (
        <StyledPage
          key={`page_${index + 1}`}
          pageNumber={index + 1}
        />
      ))}
    </Document>
  );
}

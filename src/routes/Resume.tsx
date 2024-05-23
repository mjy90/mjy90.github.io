import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import ResumeFile from '../assets/Resume.pdf';

// Start the worker to load the PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeFileId = '1dhzmNkywDf5PxRGVT6jk5qhwmcF2_pEb';
// const resumeUrl = `https://drive.google.com/file/d/${resumeFileId}/preview`;
const resumeUrl = `https://drive.google.com/uc?export=view&id=${resumeFileId}`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

export default function Resume() {
  const [numPages, setNumPages] = useState<number>();
  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: PDFDocumentProxy): void => {
    setNumPages(nextNumPages);
  }

  return (
    <Document file={ResumeFile} onLoadSuccess={onDocumentLoadSuccess} options={options}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
        />
      ))}
    </Document>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import {
  Document,
  DocumentProps,
  Page as PdfPage,
  PageProps as PdfPageProps,
  pdfjs,
} from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import {
  IconButton,
  Paper,
  Skeleton,
  Snackbar,
  Stack,
  Tooltip,
  styled,
} from '@mui/material';
import { ArrowUpward, ArrowDownward, Download } from '@mui/icons-material';

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

const StyledPage = styled(PdfPage)<PdfPageProps>(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
}));

type FloatingControlsProps = {
  page: number,
  numPages: number,
  isLoading: boolean,
  goToPage: (page: number) => void,
};

function FloatingControls({ page, numPages, isLoading, goToPage }: FloatingControlsProps) {
  return (
    <Snackbar open={!isLoading} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Paper>
        <Stack direction='row'>
          <Tooltip title='Page up'>
            <span>
              <IconButton
                onClick={() => goToPage(page - 1)}
                aria-label='Page up'
                disabled={isLoading || page === 1}
              >
                <ArrowUpward />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title='Page down'>
            <span>
              <IconButton
                onClick={() => goToPage(page + 1)}
                aria-label='Page down'
                disabled={isLoading || page === numPages}
              >
                <ArrowDownward />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title='Download resume'>
            <span>
              <IconButton
                component='a'
                href={ResumeFile}
                download="Mike Young's Resume"
                aria-label='Download resume'
                target='_blank'
                rel='noreferrer'
                disabled={isLoading}
              >
                <Download />
              </IconButton>
            </span>
          </Tooltip>
        </Stack>
      </Paper>
    </Snackbar>
  );
}

type PageProps = {
  pageNum: number,
  pageWidth: number,
  registerRef: (ref: React.RefObject<HTMLDivElement>) => void,
  deregisterRef: (ref: React.RefObject<HTMLDivElement>) => void,
};

function Page({ pageNum, pageWidth, registerRef, deregisterRef }: PageProps) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(`Page ${pageNum} mounted`);
    registerRef(pageRef);

    return () => {
      console.log(`Page ${pageNum} unmounted`);
      deregisterRef(pageRef);
    };
  }, []);

  return (
    <StyledPage
      pageNumber={pageNum}
      width={pageWidth}
      inputRef={pageRef}
    />
  );
}

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState<number>(Math.min(800, window.innerWidth));
  const [numPages, setNumPages] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [pageRefs, setPageRefs] = useState<React.RefObject<any>[]>([]);

  const onDocumentLoadSuccess = ({ numPages: newNumPages }: PDFDocumentProxy): void => {
    setIsLoading(false);
    setNumPages(newNumPages);
    console.log(`Loaded ${newNumPages} pages`);
  };
  const goToPage = (newPage: number) => {
    if (newPage < 1 || newPage > numPages) return;
    setPage(newPage);
    const pageRef = pageRefs[newPage - 1];
    pageRef.current?.scrollIntoView();
  };
  const registerPageRef = (ref: React.RefObject<HTMLDivElement>) => {
    setPageRefs((prevRefs) => [...prevRefs, ref]);
  };
  const deregisterPageRef = (ref: React.RefObject<HTMLDivElement>) => {
    setPageRefs((prevRefs) => prevRefs.filter((r) => r !== ref));
  };

  // Resize the page width to fit the viewport
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

  // Track page refs that have scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      console.log('entries', entries);

      // When new pages scroll into view, grab their page numbers from the DOM
      const pagesInView = entries.map((entry) => {
        const pageNum = (entry.target as HTMLDivElement).dataset?.pageNumber;
        if (pageNum && entry.isIntersecting) {
          return parseInt(pageNum);
        }
      }).filter((n) => n !== undefined) as number[];

      // We'll consider the highest-numbered page as the current page
      if (pagesInView.length) {
        setPage(Math.max(...pagesInView));
      }
    });

    pageRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
  }, [pageRefs]);

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
        <Page
          key={`page_${index + 1}`}
          pageNum={index + 1}
          pageWidth={pageWidth}
          registerRef={registerPageRef}
          deregisterRef={deregisterPageRef}
        />
      ))}

      <FloatingControls page={page} goToPage={goToPage} numPages={numPages} isLoading={isLoading} />
    </StyledDocument>
  );
}

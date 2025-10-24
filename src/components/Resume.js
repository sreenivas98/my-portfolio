import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa";
import resumePdf from "../Assets/Resume.pdf";
import "./CSS/resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const viewerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    const element = viewerRef.current;
    if (!element || typeof ResizeObserver === "undefined") {
      setContainerWidth(element?.clientWidth ?? 900);
      return;
    }

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setContainerWidth(entry.contentRect.width);
      });
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleDocumentLoad = ({ numPages: totalPages }) => {
    setNumPages(totalPages);
    setPageNumber(1);
    setLoadError(null);
  };

  const handleDocumentError = () => {
    setLoadError("Unable to load the resume preview. Please use the download button.");
  };

  const pageWidth = Math.min(containerWidth || 900, 900);
  const canGoBack = pageNumber > 1;
  const canGoForward = numPages > 0 && pageNumber < numPages;

  const showControls = numPages > 1;

  return (
    <div className="resume">
      <a className="resume-download" href={resumePdf} download="Sreenivas_Resume.pdf">
        <button>
          <FaDownload /> Download Resume
        </button>
      </a>

      <div className="resume-viewer" ref={viewerRef}>
        <Document
          file={resumePdf}
          onLoadSuccess={handleDocumentLoad}
          onLoadError={handleDocumentError}
          loading={<div className="resume-loading">Preparing resume preview...</div>}
          className="resume-document"
          error={
            <div className="resume-error">
              {loadError || "Unable to load the resume preview. Please use the download button."}
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            width={pageWidth}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            className="resume-page"
          />
        </Document>
      </div>

      {showControls && (
        <div className="resume-controls">
          <div className="resume-nav-wrapper">
            <span className="resume-nav-caption" aria-hidden="true">Previous</span>
            <button
              type="button"
              className="resume-nav"
              onClick={() => setPageNumber((value) => Math.max(value - 1, 1))}
              disabled={!canGoBack}
              aria-label="Show previous page"
            >
              <FaArrowLeft className="resume-nav-icon" />
              <span className="resume-nav-label">Previous</span>
              <span className="resume-nav-label-short" aria-hidden="true">
                Prev
              </span>
            </button>
          </div>

          <span className="resume-page-indicator">
            Page {pageNumber} of {numPages}
          </span>

          <div className="resume-nav-wrapper">
            <span className="resume-nav-caption" aria-hidden="true">Next</span>
            <button
              type="button"
              className="resume-nav"
              onClick={() => setPageNumber((value) => Math.min(value + 1, numPages))}
              disabled={!canGoForward}
              aria-label="Show next page"
            >
              <span className="resume-nav-label">Next</span>
              <span className="resume-nav-label-short" aria-hidden="true">
                Next
              </span>
              <FaArrowRight className="resume-nav-icon" />
            </button>
          </div>
        </div>
      )}

      <a className="resume-download" href={resumePdf} download="Sreenivas_Resume.pdf">
        <button>
          <FaDownload /> Download Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;

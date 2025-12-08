import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import React, { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />

        <h2>Resume.pdf</h2>
        <div className="flex items-center gap-1">
          <ChevronLeft className="icon" onClick={() => setPageNumber(1)} />
          <ChevronRight className="icon" onClick={() => setPageNumber(2)} />
        </div>

        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <Document file="files/resume.pdf">
        <Page pageNumber={pageNumber} renderTextLayer renderAnnotationLayer />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;

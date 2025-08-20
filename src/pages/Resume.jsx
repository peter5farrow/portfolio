import PdfViewer from "../components/PdfViewer";
import pdf from "../assets/Peter Farrow Resume.pdf";
import pdfpng from "../assets/Peter Farrow Resume.png";

export default function Resume() {
  return (
    <>
      <h1 className="header">Resume</h1>
      <PdfViewer url={pdf} />
      {/* <img src={pdfpng} alt="" className="resume" width="75%"></img> */}
    </>
  );
}

import PdfViewer from "../components/pdfViewer";
import pdf from "../assets/resume.pdf";
import pdfpng from "../assets/resume.png";

export default function Resume() {
  return (
    <>
      {/* <PdfViewer url={pdf} /> */}
      <h1>Here's my resume woooo</h1>
      <img src={pdfpng} alt="" className="resume"></img>
    </>
  );
}

import PdfViewer from "../components/pdfViewer";
import pdfpng from "../assets/resume.png";
import pdf from "../assets/PFarrowDevResumeNov24.pdf";

export default function Resume() {
  return (
    <>
      <h1 className="header">Resum&eacute;</h1>
      <PdfViewer url={pdf} />
      {/* <img src={pdfpng} alt="" className="resume"></img> */}
    </>
  );
}

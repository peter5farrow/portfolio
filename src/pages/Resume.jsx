import PdfViewer from "../components/PdfViewer";
import pdf from "../assets/Peter Farrow Resume.pdf";

export default function Resume() {
  return (
    <>
      <h1 className="header">Resum&eacute;</h1>
      <PdfViewer url={pdf} />
      {/* <img src={pdfpng} alt="" className="resume"></img> */}
    </>
  );
}

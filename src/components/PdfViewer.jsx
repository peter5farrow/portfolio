import React from "react";

export default function PdfViewer({ url }) {
  return <iframe src={url} width="75%" height="700px" title="PDF Viewer" />;
}

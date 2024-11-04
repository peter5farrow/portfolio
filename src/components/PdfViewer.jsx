import React from "react";

export default function PdfViewer({ url }) {
  return <iframe src={url} width="1000px" height="600px" title="PDF Viewer" />;
}

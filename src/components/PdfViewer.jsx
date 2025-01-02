import React from "react";

export default function PdfViewer({ url }) {
  return <iframe src={url} width="80%" height="500vh" title="PDF Viewer" />;
}

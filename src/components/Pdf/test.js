// import { NextPage } from 'next';
// import React from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import Header_invester from '../header/header_invester';

// import pdfjsWorkerSrc from '../../pdf-worker';

// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc;

// const PdfPage: NextPage = () => {
//     const url = '/pdf/62.pdf';
//     const [numPages, setNumPages] = React.useState(1);
//     const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//         setNumPages(numPages);
//     };

//     return (
//         <div>
//             <Header_invester />
//             <div className="flex">
//                 <div className="">
//                     Hello world.pdf
//                     <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
//                         <div style={{ border: 'solid 1px gray', width: 300, height: 300 }}>
//                             <Page pageNumber={numPages} />
//                         </div>
//                     </Document>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PdfPage;
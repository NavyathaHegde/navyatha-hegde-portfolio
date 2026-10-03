// CDN-hosted certificate assets (image previews + original PDFs)
import cert1Img from '../assets/certificates/cert-1.jpg.asset.json';
import cert1Pdf from '../assets/certificates/cert-1.pdf.asset.json';
import cert2Img from '../assets/certificates/cert-2.jpg.asset.json';
import cert2Pdf from '../assets/certificates/cert-2.pdf.asset.json';
import cert3Img from '../assets/certificates/cert-3.jpg.asset.json';
import cert3Pdf from '../assets/certificates/cert-3.pdf.asset.json';
import cert4Img from '../assets/certificates/cert-4.jpg.asset.json';
import cert4Pdf from '../assets/certificates/cert-4.pdf.asset.json';
import cert5Img from '../assets/certificates/cert-5.jpg.asset.json';
import cert5Pdf from '../assets/certificates/cert-5.pdf.asset.json';
import cert6Img from '../assets/certificates/cert-6.jpg.asset.json';
import cert6Pdf from '../assets/certificates/cert-6.pdf.asset.json';
import cert7Img from '../assets/certificates/cert-7.jpg.asset.json';
import cert7Pdf from '../assets/certificates/cert-7.pdf.asset.json';
import cert8Img from '../assets/certificates/cert-8.jpg.asset.json';
import cert8Pdf from '../assets/certificates/cert-8.pdf.asset.json';
import cert9Img from '../assets/certificates/cert-9.jpg.asset.json';
import cert9Pdf from '../assets/certificates/cert-9.pdf.asset.json';
import hackathonImg from '../assets/certificates/hackathon.jpg.asset.json';

export const certificateFiles: Record<string, { imageUrl: string; pdfUrl?: string }> = {
  'cert-1': { imageUrl: cert1Img.url, pdfUrl: cert1Pdf.url },
  'cert-2': { imageUrl: cert2Img.url, pdfUrl: cert2Pdf.url },
  'cert-3': { imageUrl: cert3Img.url, pdfUrl: cert3Pdf.url },
  'cert-4': { imageUrl: cert4Img.url, pdfUrl: cert4Pdf.url },
  'cert-5': { imageUrl: cert5Img.url, pdfUrl: cert5Pdf.url },
  'cert-6': { imageUrl: cert6Img.url, pdfUrl: cert6Pdf.url },
  'cert-7': { imageUrl: cert7Img.url, pdfUrl: cert7Pdf.url },
  'cert-8': { imageUrl: cert8Img.url, pdfUrl: cert8Pdf.url },
  'cert-9': { imageUrl: cert9Img.url, pdfUrl: cert9Pdf.url },
};

export const hackathonCertificateImage = hackathonImg.url;

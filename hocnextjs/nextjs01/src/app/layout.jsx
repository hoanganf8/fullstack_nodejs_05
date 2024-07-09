import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "F8 - Học lập trình để đi làm",
  description: "Học lập trình bài bản tại F8",
  keywords: "f8, fullstack, html-css",
  openGraph: {
    title: "Tiêu đề hiển thị trên FB",
    images: ["https://fullstack.edu.vn/image.jpg"],
  },
};

export default function RootLayout({ children }) {
  // console.log(process.env.APP_NAME);
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

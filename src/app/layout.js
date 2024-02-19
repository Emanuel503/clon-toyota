import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clon Toyota",
  description: "Este es un clon de la pagina de Toyota https://www.toyota.com/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
          <Nav/>
          {children}
        </body>
    </html>
  );
}

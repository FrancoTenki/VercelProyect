import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}
        <footer className='py-10 flex justify-center items-center'>
          Hecho con amor vesion 1.0 
        </footer>
      </body>
    </html>
  );
}

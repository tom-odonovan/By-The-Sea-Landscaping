import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@200&family=Roboto&display=swap" rel="stylesheet" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;

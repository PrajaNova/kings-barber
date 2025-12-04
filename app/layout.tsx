import "./main.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />
        <title>
          Kings Barber - Premium Barbershop in Singapore | UK-Trained Barbers
        </title>
        <meta
          name="description"
          content="Kings Barber Singapore - Trained in England, perfected locally. Premium haircuts, traditional wet shaves, scalp treatments, and men's grooming products. Certified by Sid Sottung Academy (UK). Visit us at Shaw Corner."
        />
        <meta
          property="og:title"
          content="Kings Barber - Premium Barbershop in Singapore"
        />
        <meta
          property="og:description"
          content="UK-trained barbers offering premium haircuts, traditional wet shaves, and men's grooming services since 2015."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

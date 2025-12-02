import "./main.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head></head>
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  );
};
export default RootLayout;


import "../styles/globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="Pt-BR" className="[color-scheme:dark]">
      <body>{children}</body>
    </html>
  )
}

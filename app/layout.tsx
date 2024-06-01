import '@/app/ui/global.css'
import { schoolbell } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${schoolbell.className} antialiased`}>{children}</body>
    </html>
  );
}

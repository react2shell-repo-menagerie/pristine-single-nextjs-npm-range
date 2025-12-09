import './globals.css'

export const metadata = {
  title: 'CVE-2025-66478 Test App (Range Versions)',
  description: 'Test application for React2Shell vulnerability with range version specifiers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

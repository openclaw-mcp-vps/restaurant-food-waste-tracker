import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Restaurant Food Waste Tracker — Track & Reduce Waste Costs',
  description: 'Track food waste by item and shift, identify patterns, and get smart suggestions to cut ordering and portion costs.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6833840d-3f89-4b9f-b9c1-f9d96f754ed8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "黃金市場分析與投資建議",
  description: "全面分析黃金市場趨勢、技術指標及投資策略",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <header className="border-b border-gray-700 bg-black/30 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-yellow-500"></div>
                  <span className="text-xl font-bold text-yellow-500">黃金市場分析</span>
                </div>
                <div className="hidden md:flex space-x-6">
                  <Link href="/" className="text-gray-300 hover:text-yellow-500 transition-colors">首頁</Link>
                  <Link href="/market-overview" className="text-gray-300 hover:text-yellow-500 transition-colors">市場概況</Link>
                  <Link href="/trend-analysis" className="text-gray-300 hover:text-yellow-500 transition-colors">趨勢分析</Link>
                  <Link href="/technical-analysis" className="text-gray-300 hover:text-yellow-500 transition-colors">技術分析</Link>
                  <Link href="/market-sentiment" className="text-gray-300 hover:text-yellow-500 transition-colors">市場情緒</Link>
                  <Link href="/asset-comparison" className="text-gray-300 hover:text-yellow-500 transition-colors">資產比較</Link>
                  <Link href="/investment-recommendations" className="text-gray-300 hover:text-yellow-500 transition-colors">投資建議</Link>
                </div>
                <div className="md:hidden">
                  <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" x2="20" y1="12" y2="12"></line>
                      <line x1="4" x2="20" y1="6" y2="6"></line>
                      <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t border-gray-700 bg-black/30 backdrop-blur-sm py-6">
            <div className="container mx-auto px-4 text-center text-gray-400">
              <p>© 2025 黃金市場分析與投資建議 | 數據來源: 世界黃金協會、LiteFinance、Long Forecast</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

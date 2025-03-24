import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className="animate-pulse">
          <div className="h-24 w-24 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text text-transparent">
          黃金市場分析與投資建議
        </h1>
        <p className="max-w-2xl text-xl text-gray-300">
          全面分析黃金市場趨勢、技術指標及投資策略，助您做出明智的投資決策
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
          <Link href="/market-overview" className="group">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">
              <div className="h-12 w-12 rounded-lg bg-yellow-500/20 mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">市場概況</h2>
              <p className="mt-2 text-gray-400">了解當前黃金市場狀況、價格趨勢與預測、影響因素及供需分析</p>
            </div>
          </Link>
          
          <Link href="/trend-analysis" className="group">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">
              <div className="h-12 w-12 rounded-lg bg-yellow-500/20 mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">趨勢分析</h2>
              <p className="mt-2 text-gray-400">探索黃金價格長短期趨勢、波動性分析及投資建議</p>
            </div>
          </Link>
          
          <Link href="/technical-analysis" className="group">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">
              <div className="h-12 w-12 rounded-lg bg-yellow-500/20 mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">技術分析</h2>
              <p className="mt-2 text-gray-400">查看黃金技術指標、支撐阻力位及價格形態分析</p>
            </div>
          </Link>
          
          <Link href="/market-sentiment" className="group">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">
              <div className="h-12 w-12 rounded-lg bg-yellow-500/20 mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">市場情緒</h2>
              <p className="mt-2 text-gray-400">分析師評級與預測、市場情緒指標及影響因素分析</p>
            </div>
          </Link>
          
          <Link href="/asset-comparison" className="group">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">
              <div className="h-12 w-12 rounded-lg bg-yellow-500/20 mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                  <line x1="12" y1="3" x2="12" y2="21"></line>
                  <polyline points="8 8 4 12 8 16"></polyline>
                  <polyline points="16 16 20 12 16 8"></polyline>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">資產比較</h2>
              <p className="mt-2 text-gray-400">黃金與其他資產的相關性、風險收益特性及表現比較</p>
            </div>
          </Link>
          
          <Link href="/investment-recommendations" className="group">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">
              <div className="h-12 w-12 rounded-lg bg-yellow-500/20 mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">投資建議</h2>
              <p className="mt-2 text-gray-400">短中長期投資策略、風險管理及投資組合配置建議</p>
            </div>
          </Link>
        </div>
        
        <div className="mt-12 flex flex-col items-center space-y-4">
          <div className="text-sm text-gray-500 flex items-center space-x-2">
            <span>最後更新: 2025年3月24日</span>
            <span>•</span>
            <span>數據來源: 世界黃金協會</span>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></div>
            <span className="text-sm">實時數據更新中</span>
          </div>
        </div>
      </div>
    </div>
  );
}

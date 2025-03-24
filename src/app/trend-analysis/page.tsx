"use client";

import React from 'react';
import GoldPriceChart from '@/components/charts/GoldPriceChart';

// 模擬黃金短期趨勢數據
const shortTermTrendData = [
  { name: '2/23', price: 2954.40 },
  { name: '2/28', price: 2980.20 },
  { name: '3/5', price: 3010.50 },
  { name: '3/10', price: 3057.40 },
  { name: '3/15', price: 3040.30 },
  { name: '3/20', price: 3030.10 },
  { name: '3/23', price: 3021.30 },
];

// 模擬黃金一年期趨勢數據
const oneYearTrendData = [
  { name: '2024/3', price: 2174.80 },
  { name: '2024/5', price: 2300.50 },
  { name: '2024/7', price: 2450.30 },
  { name: '2024/9', price: 2600.10 },
  { name: '2024/11', price: 2750.40 },
  { name: '2025/1', price: 2900.20 },
  { name: '2025/3', price: 3021.30 },
];

// 模擬黃金長期趨勢數據
const longTermTrendData = [
  { name: '2020', price: 1567.00 },
  { name: '2021', price: 1830.00 },
  { name: '2022', price: 1975.00 },
  { name: '2023', price: 2062.00 },
  { name: '2024', price: 2600.00 },
  { name: '2025', price: 3021.30 },
];

export default function TrendAnalysis() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text text-transparent">
          黃金價格趨勢分析報告
        </h1>
        
        <div className="text-sm text-gray-400 mb-8">
          分析時間: 2025-03-23 23:23:09
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">總體趨勢摘要</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-white">黃金期貨 (GC=F) 長期趨勢 (5年)</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">價格變化:</span>
                  <span className="text-green-500 font-medium">$1454.30 (92.81%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">年化回報率:</span>
                  <span className="text-green-500 font-medium">14.03%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">趨勢方向:</span>
                  <span className="text-red-500 font-medium">下降</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">波動率 (年化):</span>
                  <span className="text-gray-300 font-medium">15.61%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">最大回撤:</span>
                  <span className="text-red-500 font-medium">-20.87%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-white">黃金期貨 (GC=F) 短期趨勢 (1個月)</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">價格變化:</span>
                  <span className="text-green-500 font-medium">$66.90 (2.26%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">趨勢方向:</span>
                  <span className="text-red-500 font-medium">下降</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">波動率 (年化):</span>
                  <span className="text-gray-300 font-medium">0.76%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">最新RSI:</span>
                  <span className="text-red-500 font-medium">20.18 (超賣)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">詳細分析結果</h2>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-3 text-white">GC=F - 短期（1個月）</h3>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">分析期間:</span>
                      <span className="text-gray-300">2025-02-23 至 2025-03-23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">起始價格:</span>
                      <span className="text-gray-300">$2954.40</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">結束價格:</span>
                      <span className="text-gray-300">$3021.30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">價格變化:</span>
                      <span className="text-green-500">$66.90 (2.26%)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">年化回報率:</span>
                      <span className="text-green-500">0.08%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">波動率 (年化):</span>
                      <span className="text-gray-300">0.76%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">夏普比率:</span>
                      <span className="text-red-500">-2.5077</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">最新RSI:</span>
                      <span className="text-red-500">20.18 (超賣)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <GoldPriceChart data={shortTermTrendData} title="黃金短期趨勢 (1個月)" />
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-3 text-white">GC=F - 1年期</h3>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">分析期間:</span>
                      <span className="text-gray-300">2024-03-25 至 2025-03-23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">起始價格:</span>
                      <span className="text-gray-300">$2174.80</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">結束價格:</span>
                      <span className="text-gray-300">$3021.30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">價格變化:</span>
                      <span className="text-green-500">$846.50 (38.92%)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">年化回報率:</span>
                      <span className="text-green-500">39.11%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">波動率 (年化):</span>
                      <span className="text-gray-300">15.42%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">夏普比率:</span>
                      <span className="text-green-500">2.0977</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">最新RSI:</span>
                      <span className="text-yellow-500">77.05 (超買)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <GoldPriceChart data={oneYearTrendData} title="黃金一年期趨勢" />
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-3 text-white">GC=F - 長期（5年）</h3>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">分析期間:</span>
                      <span className="text-gray-300">2020-03-23 至 2025-03-23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">起始價格:</span>
                      <span className="text-gray-300">$1567.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">結束價格:</span>
                      <span className="text-gray-300">$3021.30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">價格變化:</span>
                      <span className="text-green-500">$1454.30 (92.81%)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">年化回報率:</span>
                      <span className="text-green-500">14.03%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">波動率 (年化):</span>
                      <span className="text-gray-300">15.61%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">夏普比率:</span>
                      <span className="text-green-500">0.7921</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">最新RSI:</span>
                      <span className="text-yellow-500">77.05 (超買)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <GoldPriceChart data={longTermTrendData} title="黃金長期趨勢 (5年)" />
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">趨勢分析結論</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">長期趨勢 (5年)</h3>
              <p className="text-gray-300">
                黃金在過去5年的價格走勢<strong className="text-yellow-500">不夠明確</strong>，雖然整體呈現上升，但趨勢強度較弱，波動較大。
              </p>
              <p className="text-gray-300 mt-2">
                最大回撤為-20.87%，表明即使在長期上升趨勢中，黃金價格也會經歷顯著的調整。投資者應做好心理準備，接受這種波動性。
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">中期趨勢 (1年)</h3>
              <p className="text-gray-300">
                過去一年黃金呈現<strong className="text-green-500">強勁的上升趨勢</strong>，價格增長了約39%。這表明當前黃金市場處於牛市階段。
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">短期趨勢 (1個月)</h3>
              <p className="text-gray-300">
                過去一個月黃金價格<strong>基本持平</strong>，處於盤整狀態。
              </p>
              <p className="text-gray-300 mt-2">
                最新RSI為20.18，處於<strong className="text-red-500">超賣</strong>區域，可能出現短期反彈。
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">波動性分析</h3>
              <p className="text-gray-300">
                短期波動率（0.76%）低於長期波動率（15.61%），表明<strong>近期市場波動減弱</strong>，可能處於盤整階段。
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">總體投資建議</h3>
              <ol className="list-decimal list-inside text-gray-300 space-y-2">
                <li><strong className="text-white">長期投資者</strong>：趨勢不明確，建議保持觀望或維持現有配置不變。</li>
                <li><strong className="text-white">中期投資者</strong>：等待更明確的趨勢信號出現。</li>
                <li><strong className="text-white">短期交易者</strong>：可在重要支撐位和阻力位附近進行短線操作，但應嚴格控制倉位。</li>
              </ol>
              <p className="text-yellow-500 mt-4 text-sm">
                <strong>風險提示</strong>：過去的表現不代表未來的結果。投資黃金仍然存在風險，包括價格波動、流動性風險等。投資者應根據自身風險承受能力和投資目標做出決策。
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">數據來源和分析方法</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>數據來源：Yahoo Finance API</li>
              <li>分析工具：Python (pandas, numpy, scipy, matplotlib, seaborn)</li>
              <li>技術指標：移動平均線、相對強弱指標(RSI)、布林帶</li>
              <li>統計指標：波動率、夏普比率、最大回撤、趨勢強度(R²)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

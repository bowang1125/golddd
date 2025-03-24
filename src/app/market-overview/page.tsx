"use client";

import React from 'react';
import GoldPriceChart from '@/components/charts/GoldPriceChart';

// 模擬2025年黃金價格預測數據
const goldPricePrediction2025 = [
  { name: '1月', price: 2862.00 },
  { name: '2月', price: 3040.00 },
  { name: '3月', price: 3040.00 },
  { name: '4月', price: 2990.00, prediction: 2990.00 },
  { name: '5月', price: null, prediction: 2925.00 },
  { name: '6月', price: null, prediction: 2921.00 },
  { name: '7月', price: null, prediction: 3000.00 },
  { name: '8月', price: null, prediction: 3081.00 },
  { name: '9月', price: null, prediction: 3140.00 },
  { name: '10月', price: null, prediction: 3200.00 },
  { name: '11月', price: null, prediction: 3260.00 },
  { name: '12月', price: null, prediction: 3400.00 },
];

// 模擬黃金長期價格數據
const goldPriceHistorical = [
  { name: '2020', price: 1567.00 },
  { name: '2021', price: 1830.00 },
  { name: '2022', price: 1975.00 },
  { name: '2023', price: 2062.00 },
  { name: '2024', price: 2600.00 },
  { name: '2025', price: null, prediction: 3400.00 },
  { name: '2026', price: null, prediction: 4000.00 },
  { name: '2027', price: null, prediction: 4300.00 },
  { name: '2028', price: null, prediction: 4600.00 },
  { name: '2029', price: null, prediction: 4800.00 },
  { name: '2030', price: null, prediction: 5085.00 },
];

export default function MarketOverview() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text text-transparent">
          黃金市場概況分析
        </h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">當前市場狀況</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">當前黃金價格</p>
                <p className="text-4xl font-bold text-yellow-500">$3,016.86</p>
                <p className="text-green-500 text-sm">+$12.40 (0.41%)</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">歷史最高</p>
                  <p className="text-xl font-semibold">$3,057.4</p>
                  <p className="text-gray-400 text-xs">2025年3月20日</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">歷史最低</p>
                  <p className="text-xl font-semibold">$252.55</p>
                  <p className="text-gray-400 text-xs">1999年8月25日</p>
                </div>
              </div>
            </div>
            <div className="h-1 w-full bg-gray-700 mb-6"></div>
            <p className="text-gray-300">
              截至2025年3月24日，黃金的交易價格為 $3,016.86 美元/盎司。黃金價格於2025年3月20日創下 $3,057.4 的歷史新高，而歷史低點則是在1999年8月25日觸及的 $252.55。
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">價格趨勢與預測</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-white">短期預測（2025年）</h3>
          <p className="text-gray-300 mb-4">
            根據LiteFinance的分析，2025年黃金價格預計將持續上漲趨勢。分析師預測金價將在以下範圍波動：
          </p>
          
          <GoldPriceChart data={goldPricePrediction2025} title="2025年黃金價格預測" />
          
          <p className="text-gray-300 mb-6">
            根據Long Forecast的預測，到2025年底，黃金價格可能達到4,042美元。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-white">中長期預測（2026-2030年）</h3>
          <p className="text-gray-300 mb-4">
            2026年：黃金可能面臨更大的波動性，據Gov Capital稱，貴金屬將在3,440美元至4,907美元之間大幅波動。
            2030年：Coin Price Forecast的分析師預計，黃金將保持其作為主要避險資產的地位，價格可能攀升至5,085美元。長期平均年增長率估計約為7%。
          </p>
          
          <GoldPriceChart data={goldPriceHistorical} title="黃金長期價格趨勢與預測 (2020-2030)" />
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">影響黃金價格的基本面因素</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-yellow-500/50">
              <h3 className="text-lg font-semibold mb-2 text-white">通貨膨脹</h3>
              <p className="text-gray-300">
                通貨膨脹會影響黃金的價值，但影響並不像對投資者想像的那麼大。儘管在美國物價上漲，黃金價格也會上升，但從長期來看，通貨膨脹與黃金價格之間並不存在很強的相關性。
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-yellow-500/50">
              <h3 className="text-lg font-semibold mb-2 text-white">貨幣匯率波動</h3>
              <p className="text-gray-300">
                黃金與美元一樣，都被視為避險資產。因此，如果一種貨幣的匯率相對於其他儲備貨幣的價值上升，但其他貨幣的黃金購買力保持不變，導致貴金屬相對於貶值貨幣的價值上升。
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-yellow-500/50">
              <h3 className="text-lg font-semibold mb-2 text-white">地緣政治緊張局勢</h3>
              <p className="text-gray-300">
                任何軍事衝突或金融危機都會為投資者帶來巨大的不確定性。黃金是市場波動期間的有效對沖工具。此外，過度支出、貨幣供應、政治不穩定和貨幣貶值等因素也促進了黃金的成長。
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-yellow-500/50">
              <h3 className="text-lg font-semibold mb-2 text-white">利率</h3>
              <p className="text-gray-300">
                黃金價格容易受到利率變動的影響。貴金屬對提供潛在收入的資產高度敏感，包括債券甚至股票。但它不是組織的，但存在明顯的負相關性。當美國公債利率上升時，金價大概率會下降。
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-yellow-500/50">
              <h3 className="text-lg font-semibold mb-2 text-white">央行政策</h3>
              <p className="text-gray-300">
                各國央行，尤其是亞洲央行，積極購買黃金，以實現資產多元化並減少對美元和歐元的依賴。這一趨勢支持超年內金價的成長。
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">黃金供需分析</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">供應情況</h3>
              <p className="text-gray-300">
                黃金供應主要來自金礦生產、回收和生產商對沖。根據世界黃金協會的數據，全球黃金供應在近年來保持相對穩定。
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">需求情況</h3>
              <p className="text-gray-300">
                黃金需求可分為以下幾個主要類別：首飾（傳統上是黃金最大的需求來源）、科技（工業和電子產品中的黃金使用）、投資（包括金條、金幣和ETF等）、各國央行和其他機構（作為儲備資產）。
              </p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2 text-white">黃金ETF持有量和流量</h3>
            <p className="text-gray-300">
              黃金支持ETF和類似產品佔黃金市場的很大一部分。機構投資者和個人投資者利用這些產品來實施各種投資策略。從2024年7月到2025年2月的數據顯示，北美、歐洲和亞洲地區的黃金ETF持有量有所波動，但整體呈現增長趨勢。
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">技術分析要點</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">支撐位和阻力位</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>支撐位：2,600美元和2,550美元是關鍵水平，如果價格回落，買家可以建倉。</li>
                <li>阻力位：3,000美元是目前動能的主要目標。</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">技術指標</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>SMA 50和SMA 100：價格高於兩條移動平均線（50日均線為2,663美元，100日均線為2,560美元），確認了上升趨勢。</li>
                <li>RSI (65.5)顯示該指標有持續成長的潛力，直至達到超買區域。</li>
                <li>MACD：長條圖進入正區，MACD線自下而上穿過信號線，顯示上升趨勢可能會持續。</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">投資策略建議</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">短期策略（3-6個月）</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>回調至2,600-2,660美元時買入</li>
                <li>目標：2,900美元至3,000美元</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">中期策略（6-12個月）</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>保持多頭交易，直到價格達到3,200美元的目標</li>
                <li>一旦價格超過2,900美元，即可部分獲利</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">長期策略（2024-2025年）</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>可維持多頭交易，直到價格達到3,400美元的目標</li>
                <li>在2,550美元至2,700美元的支撐區域修正時買入</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">結論</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <p className="text-gray-300">
              在強勁的宏觀經濟因素推動下，黃金繼續表現出持續的成長。在所有時間範圍內，上升趨勢都很明顯。儘管不能排除短期波動的可能性，但在2025年黃金價格可能攀升至3,200-3,400美元的長期目標。影響價格變動的主要因素為利率、全球市場的供需、地緣政治緊張局勢以及已開發國家通膨上升和不穩定背景下的貨幣貶值。
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">資料來源</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>LiteFinance - 2025年、2026年、2027-2030年及以後的黃金價格預測</li>
              <li>世界黃金協會(World Gold Council) - 黃金供應和需求統計數據</li>
              <li>Long Forecast - 黃金價格預測</li>
              <li>Gov Capital - 黃金價格預測</li>
              <li>Coin Price Forecast - 黃金長期價格預測</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

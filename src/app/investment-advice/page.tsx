"use client";

import React from 'react';

export default function InvestmentAdvice() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text text-transparent">
          黃金投資建議
        </h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">投資策略概述</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">
              基於當前市場分析、技術指標和宏觀經濟環境，我們為不同類型的投資者提供以下黃金投資策略建議：
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">短期投資者 (1-3個月)</h3>
                <p className="text-gray-300 mb-2">策略傾向：<span className="text-yellow-500 font-semibold">謹慎中性</span></p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>目標價格區間：$2,950-$3,100</li>
                  <li>建議配置：總資產的3-5%</li>
                  <li>風險等級：中高</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">中期投資者 (3-12個月)</h3>
                <p className="text-gray-300 mb-2">策略傾向：<span className="text-green-500 font-semibold">適度看漲</span></p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>目標價格區間：$3,100-$3,400</li>
                  <li>建議配置：總資產的5-10%</li>
                  <li>風險等級：中等</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">長期投資者 (1-3年)</h3>
                <p className="text-gray-300 mb-2">策略傾向：<span className="text-green-500 font-semibold">強烈看漲</span></p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>目標價格區間：$3,400-$5,000</li>
                  <li>建議配置：總資產的10-15%</li>
                  <li>風險等級：中低</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-500">市場觀點摘要</h3>
              <p className="text-gray-300">
                當前黃金市場處於強勁上升趨勢中，受益於地緣政治緊張局勢、通膨擔憂和央行購金等因素。技術指標顯示短期可能面臨回調風險，但中長期前景仍然看好。投資者應根據自身風險承受能力和投資目標，選擇適合的投資策略和工具。
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">具體投資建議</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">短期投資策略 (1-3個月)</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">市場觀察與時機選擇</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>RSI指標顯示黃金目前處於超買區域，短期內可能面臨回調</li>
                  <li>建議在價格回調至$2,900-$2,950區間時分批買入</li>
                  <li>密切關注美聯儲政策聲明和通膨數據，作為調整策略的依據</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">建議投資工具</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>黃金ETF (如SPDR Gold Shares, GLD)：適合大多數投資者，流動性高，交易成本低</li>
                  <li>黃金礦業股：適合尋求槓桿效應的投資者，但風險較高</li>
                  <li>黃金期貨：僅適合專業投資者，風險高但靈活性強</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">風險管理</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>設置嚴格的止損位，建議在$2,850以下</li>
                  <li>分批建倉，避免一次性投入全部資金</li>
                  <li>設定目標價格$3,100，達到後考慮獲利了結</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-8 text-white">中期投資策略 (3-12個月)</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">市場趨勢與配置策略</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>中期趨勢仍然向上，支持逢低買入策略</li>
                  <li>建議在$2,900-$3,000區間分批建立中期持倉</li>
                  <li>可採用定期定額投資方式，降低市場時機選擇風險</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">建議投資工具</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>黃金ETF：適合大多數投資者的核心持倉</li>
                  <li>實物黃金（金條、金幣）：適合作為長期保值資產</li>
                  <li>黃金礦業ETF (如GDX)：提供對黃金價格上漲的槓桿效應</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">投資組合配置</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>保守型投資者：配置總資產的5-7%於黃金</li>
                  <li>平衡型投資者：配置總資產的7-10%於黃金</li>
                  <li>進取型投資者：配置總資產的3-5%於黃金，2-3%於黃金礦業股</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-8 text-white">長期投資策略 (1-3年)</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">長期趨勢與戰略配置</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>長期看好黃金前景，預計到2030年可能達到$5,000以上</li>
                  <li>建議採用價值平均策略，定期調整持倉至目標配置比例</li>
                  <li>將黃金視為投資組合的戰略性配置，而非短期交易工具</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">建議投資工具</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>實物黃金：適合長期持有，無交易對手風險</li>
                  <li>黃金ETF：適合需要流動性的長期投資者</li>
                  <li>黃金礦業股：作為長期投資組合的衛星配置，提供額外收益潛力</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">長期投資理念</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>將黃金視為財富保值工具，而非短期投機品</li>
                  <li>關注長期基本面因素，如央行購金趨勢、全球債務水平和去美元化進程</li>
                  <li>定期重新評估投資組合配置，但避免頻繁交易</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">不同投資者類型的建議</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">保守型投資者</h3>
                <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">投資目標</h4>
                  <p className="text-gray-300">
                    保值為主，穩健增值為輔，重視資本保全，避免大幅波動。
                  </p>
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">建議策略</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>配置10-15%的資產於黃金</li>
                    <li>主要投資工具：實物黃金和黃金ETF</li>
                    <li>採用定期定額投資方式</li>
                    <li>長期持有，避免頻繁交易</li>
                    <li>將黃金視為投資組合的避險部分</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">平衡型投資者</h3>
                <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">投資目標</h4>
                  <p className="text-gray-300">
                    平衡風險和收益，追求中長期穩定增長，能夠承受適度波動。
                  </p>
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">建議策略</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>配置5-10%的資產於黃金</li>
                    <li>主要投資工具：黃金ETF，少量實物黃金</li>
                    <li>可考慮配置1-2%於優質黃金礦業股</li>
                    <li>結合定期定額和逢低買入策略</li>
                    <li>定期重新平衡投資組合</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">進取型投資者</h3>
                <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">投資目標</h4>
                  <p className="text-gray-300">
                    追求較高回報，能夠承受較大波動，願意承擔更高風險。
                  </p>
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">建議策略</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>配置3-5%的資產於黃金</li>
                    <li>配置2-3%於黃金礦業股或礦業ETF</li>
                    <li>可考慮使用期貨或期權進行戰術性交易</li>
                    <li>積極把握市場波動機會</li>
                    <li>設置嚴格的止損和獲利目標</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">機構投資者</h3>
                <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">投資目標</h4>
                  <p className="text-gray-300">
                    追求長期穩定回報，重視風險管理和投資組合多元化。
                  </p>
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">建議策略</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>配置3-7%的資產於黃金</li>
                    <li>主要投資工具：大型黃金ETF和實物黃金</li>
                    <li>可考慮通過衍生品進行風險對沖</li>
                    <li>定期評估黃金在整體資產配置中的角色</li>
                    <li>關注ESG因素對黃金投資的影響</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">市場監測指標</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">
              投資者應密切關注以下關鍵指標，作為調整投資策略的依據：
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">技術指標</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>RSI (相對強弱指標)：超過70表示超買，低於30表示超賣</li>
                  <li>移動平均線：關注50日和200日均線的交叉</li>
                  <li>MACD：關注MACD線與信號線的交叉</li>
                  <li>布林帶：關注價格是否觸及上下軌</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">基本面指標</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>美聯儲政策聲明和利率決議</li>
                  <li>通膨數據 (CPI, PPI)</li>
                  <li>美元指數走勢</li>
                  <li>央行購金數據</li>
                  <li>地緣政治事件發展</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">市場情緒指標</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>黃金ETF持倉變化</li>
                  <li>期貨市場投機部位</li>
                  <li>恐懼與貪婪指數</li>
                  <li>社交媒體情緒分析</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">相關市場指標</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>白銀價格走勢</li>
                  <li>黃金/白銀比率</li>
                  <li>實際利率變化</li>
                  <li>股市波動性指數 (VIX)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">風險提示與免責聲明</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold mb-2 text-red-400">投資風險提示</h3>
              <p className="text-gray-300">
                所有投資都涉及風險，包括本金損失的可能性。過去的表現不代表未來的結果。黃金價格可能受到多種因素影響，包括但不限於利率變化、通膨預期、地緣政治事件、美元走勢和市場情緒等。投資者在做出投資決策前，應充分了解相關風險，並根據自身財務狀況、投資目標和風險承受能力謹慎決策。
              </p>
            </div>
            
            <div className="bg-gray-700/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-white">免責聲明</h3>
              <p className="text-gray-300">
                本投資建議僅供參考，不構成任何投資建議、要約或邀請。我們不對任何人因使用本資料而引致的任何損失承擔責任。投資者應在做出任何投資決策前，諮詢專業財務顧問的意見。市場情況瞬息萬變，投資策略應根據最新市場發展和個人情況適時調整。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

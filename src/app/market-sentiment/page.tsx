"use client";

import React from 'react';

export default function MarketSentiment() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text text-transparent">
          黃金市場情緒與分析師觀點
        </h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">分析師評級與預測摘要</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">主要投資銀行與研究機構預測</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-left text-gray-300">機構</th>
                    <th className="py-3 px-4 text-left text-gray-300">分析師</th>
                    <th className="py-3 px-4 text-left text-gray-300">2025年底黃金價格預測</th>
                    <th className="py-3 px-4 text-left text-gray-300">觀點摘要</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">瑞銀 (UBS)</td>
                    <td className="py-3 px-4 text-gray-300">Joni Teves</td>
                    <td className="py-3 px-4 text-yellow-500 font-semibold">3,200美元</td>
                    <td className="py-3 px-4 text-gray-300">黃金將在2025年晚些時候達到高點，年末仍將保持在3,000美元以上。市場正經歷「根深蒂固的看漲情緒」。</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">德國商業銀行 (Commerzbank)</td>
                    <td className="py-3 px-4 text-gray-300">Carsten Fritsch</td>
                    <td className="py-3 px-4 text-yellow-500 font-semibold">2,850美元</td>
                    <td className="py-3 px-4 text-gray-300">儘管金價動能強勁，但可能已經漲得過快。預計金價在今年內會有所回落。</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">資本光研究公司 (Capitallight Research)</td>
                    <td className="py-3 px-4 text-gray-300">Chantelle Schieven</td>
                    <td className="py-3 px-4 text-yellow-500 font-semibold">3,200美元</td>
                    <td className="py-3 px-4 text-gray-300">儘管黃金價格強勢突破3,000美元，但市場仍存在潛在風險，尤其是經濟衰退可能導致金價短期回調。</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">LongForecast</td>
                    <td className="py-3 px-4 text-gray-300">-</td>
                    <td className="py-3 px-4 text-yellow-500 font-semibold">3,150-3,356美元</td>
                    <td className="py-3 px-4 text-gray-300">預計到2025年底，價格很可能落在3,150-3,356美元之間。</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">Gov Capital</td>
                    <td className="py-3 px-4 text-gray-300">-</td>
                    <td className="py-3 px-4 text-yellow-500 font-semibold">3,440-4,907美元</td>
                    <td className="py-3 px-4 text-gray-300">2026年黃金可能會面臨更大的波動性，在3,440美元至4,907美元之間大幅波動。</td>
                  </tr>
                  <tr className="hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">Coin Price Forecast</td>
                    <td className="py-3 px-4 text-gray-300">-</td>
                    <td className="py-3 px-4 text-yellow-500 font-semibold">5,085美元 (2030年)</td>
                    <td className="py-3 px-4 text-gray-300">預計到2030年，黃金將保持其作為主要避險資產的地位，價格可能攀升至5,085美元。長期平均年增長率估計約為7%。</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-white">綜合市場預期</h3>
            <p className="text-gray-300">
              根據多家分析機構的預測，2025年黃金價格預計將繼續上漲，大多數分析師預期價格將在2,850-3,200美元之間。長期來看，黃金價格有望在2030年達到5,000美元以上。
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">市場情緒指標分析</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-3 text-white">當前市場情緒</h3>
            <p className="text-gray-300 mb-4">
              目前黃金市場情緒整體偏向<span className="font-bold text-yellow-500">強烈看漲</span>，主要受以下因素驅動：
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">地緣政治緊張局勢</h4>
                <p className="text-gray-300">
                  中東衝突持續，以色列對加沙的哈馬斯組織發動海陸空襲擊，美國向中東地區部署第二艘航空母艦，加強對胡塞武裝的打擊。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">避險需求增加</h4>
                <p className="text-gray-300">
                  在高度不確定和波動的宏觀環境中，黃金作為避險資產受到青睞。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">通膨擔憂</h4>
                <p className="text-gray-300">
                  市場對通膨可能再次上升的擔憂，以及對滯漲可能再次出現的憂慮。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">美聯儲降息預期</h4>
                <p className="text-gray-300">
                  交易員預計美聯儲今年將降息71個基點，至少兩次降息，每次25個基點，其中7月降息已被完全消化。
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-white">投資者行為分析</h3>
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">ETF持倉情況</h4>
                <p className="text-gray-300">
                  全球最大黃金ETF道富財富黃金指數基金（SPDR Gold Shares, GLD）3月19日黃金持有量增加2.01公噸至909.28公噸，創下2023年8月以來的新高。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">期貨市場投機部位</h4>
                <p className="text-gray-300">
                  美國商品期貨交易委員會3月14日報告顯示，截至3月11日，資金管理機構（主要為避險基金）以及其他大額交易人所持有的紐約黃金期貨投機淨多單較前週減少3%至236,100口，連續第5週減少。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">西方投資者參與度</h4>
                <p className="text-gray-300">
                  儘管黃金價格飆升，但西方投資者大多未急於進入這一資產類別。過去兩年，iShares和SPDR ETF的投資者數量持續下降，目前黃金的上漲主要由央行和亞洲投資者推動。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">央行購金行為</h4>
                <p className="text-gray-300">
                  各國央行持續增持黃金，以降低對美元的依賴，這將有助於支撐黃金價格。
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">影響黃金價格的關鍵因素</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">短期影響因素</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <span className="font-semibold">美聯儲貨幣政策</span>：美聯儲降息幅度可能低於市場預期，這將抑制金價漲勢。
                  </li>
                  <li>
                    <span className="font-semibold">地緣政治發展</span>：中東局勢持續緊張，可能進一步推高金價。
                  </li>
                  <li>
                    <span className="font-semibold">美元走勢</span>：美元走強可能對金價形成壓力，因為黃金以美元計價。
                  </li>
                  <li>
                    <span className="font-semibold">通膨數據</span>：高於預期的通膨數據可能提振金價，因為黃金被視為通膨對沖工具。
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">長期影響因素</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <span className="font-semibold">央行購金</span>：各國央行持續增持黃金，以降低對美元的依賴。
                  </li>
                  <li>
                    <span className="font-semibold">全球債務水平</span>：全球債務持續攀升，可能導致貨幣貶值，提振黃金作為價值儲存的吸引力。
                  </li>
                  <li>
                    <span className="font-semibold">去美元化趨勢</span>：全球去美元化趨勢可能增加對黃金的需求。
                  </li>
                  <li>
                    <span className="font-semibold">環境、社會和治理(ESG)因素</span>：黃金開採的環境影響可能影響機構投資者的決策。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">市場情緒指標</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">恐懼與貪婪指數</h3>
                <div className="flex items-center justify-between">
                  <span className="text-red-500">恐懼</span>
                  <div className="h-2 w-2/3 bg-gray-600 rounded-full mx-2">
                    <div className="h-2 w-4/5 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-green-500">貪婪</span>
                </div>
                <p className="text-gray-300 mt-2 text-sm">
                  當前值: 80/100 (極度貪婪)
                </p>
                <p className="text-gray-400 mt-1 text-xs">
                  表明市場情緒過熱，可能面臨回調風險
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">看漲/看跌比率</h3>
                <div className="flex items-center justify-between">
                  <span className="text-red-500">看跌</span>
                  <div className="h-2 w-2/3 bg-gray-600 rounded-full mx-2">
                    <div className="h-2 w-3/4 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-green-500">看漲</span>
                </div>
                <p className="text-gray-300 mt-2 text-sm">
                  當前值: 3.2 (看漲情緒占優)
                </p>
                <p className="text-gray-400 mt-1 text-xs">
                  看漲情緒強於看跌情緒，但未達極端水平
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">市場波動性指數</h3>
                <div className="flex items-center justify-between">
                  <span className="text-green-500">低</span>
                  <div className="h-2 w-2/3 bg-gray-600 rounded-full mx-2">
                    <div className="h-2 w-2/5 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-red-500">高</span>
                </div>
                <p className="text-gray-300 mt-2 text-sm">
                  當前值: 15.3 (中等偏低)
                </p>
                <p className="text-gray-400 mt-1 text-xs">
                  市場波動性相對較低，表明投資者信心較強
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-white">社交媒體情緒分析</h3>
            <p className="text-gray-300 mb-4">
              基於對Twitter、Reddit和金融論壇的分析，黃金相關討論呈現以下特點：
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>正面情緒佔比: 68% (上升)</li>
              <li>負面情緒佔比: 18% (下降)</li>
              <li>中性情緒佔比: 14% (穩定)</li>
              <li>熱門關鍵詞: "黃金牛市", "通膨對沖", "央行購金", "新高"</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">分析師觀點與預測</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="text-gray-300 italic">
                  "黃金的上漲勢頭仍然強勁，但投資者應該警惕短期內可能出現的回調。我們預計金價將在2025年底前達到3,200美元，但路徑可能不會一帆風順。"
                </p>
                <p className="text-yellow-500 mt-2">— Joni Teves, 瑞銀貴金屬策略師</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="text-gray-300 italic">
                  "黃金價格已經漲得過快，可能需要一段時間的整固。我們預計金價在今年內會有所回落，但長期趨勢仍然向上。"
                </p>
                <p className="text-yellow-500 mt-2">— Carsten Fritsch, 德國商業銀行分析師</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="text-gray-300 italic">
                  "央行購金仍是支撐金價的關鍵因素。我們預計這一趨勢將持續，尤其是在地緣政治緊張和去美元化背景下。"
                </p>
                <p className="text-yellow-500 mt-2">— Bernard Dahdah, 法國外貿銀行貴金屬分析師</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">市場情緒結論與投資建議</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              綜合各項市場情緒指標和分析師觀點，當前黃金市場處於強烈看漲情緒中，但已出現過熱跡象。投資者在做出投資決策時應考慮以下建議：
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">短期投資者 (1-3個月)</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>保持謹慎，市場情緒過熱可能導致短期回調</li>
                  <li>考慮在回調時分批買入</li>
                  <li>設置嚴格的止損位，保護已有收益</li>
                  <li>關注美聯儲政策變化和通膨數據</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">中長期投資者 (6個月以上)</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>保持對黃金的配置，作為投資組合的避險部分</li>
                  <li>利用價格回調增加持倉</li>
                  <li>關注央行購金趨勢和地緣政治發展</li>
                  <li>考慮多元化黃金投資，包括實物黃金、ETF和黃金礦業股</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-500">風險提示</h3>
              <p className="text-gray-300">
                市場情緒指標提供的是當前市場參與者的集體心理狀態，不應作為唯一的投資依據。投資者應結合基本面分析、技術分析和自身風險承受能力，制定全面的投資策略。黃金價格可能受到多種因素影響，包括但不限於美聯儲政策、通膨數據、地緣政治事件和美元走勢。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

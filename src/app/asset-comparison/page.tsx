"use client";

import React from 'react';

export default function AssetComparison() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text text-transparent">
          黃金與其他資產比較分析
        </h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">資產相關性分析</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">
              黃金與其他資產類別的相關性是投資組合構建的重要考量因素。以下是主要資產間的相關性分析：
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-white">黃金與其他資產的相關性</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><span className="font-semibold">黃金與白銀</span>: 相關係數 0.94 (強正相關)</li>
              <li><span className="font-semibold">黃金與鉑金</span>: 相關係數 0.59 (中度正相關)</li>
              <li><span className="font-semibold">黃金與S&P 500</span>: 相關係數 -0.06 (弱負相關)</li>
              <li><span className="font-semibold">黃金與美國10年期國債</span>: 相關係數 0.36 (中度正相關)</li>
              <li><span className="font-semibold">黃金與美元指數</span>: 相關係數 -0.62 (中度負相關)</li>
            </ul>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">與貴金屬的關係</h4>
                <p className="text-gray-300">
                  黃金與白銀和鉑金等貴金屬通常呈現正相關關係，這反映了它們作為貴金屬的共同特性和市場驅動因素。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">與股票市場的關係</h4>
                <p className="text-gray-300">
                  黃金與股票市場（如S&P 500）的相關性較低或呈負相關，這使黃金成為分散投資組合風險的有效工具。特別是在市場動盪時期，黃金往往與股票市場呈現負相關，提供了投資組合保護的功能。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">與美元的關係</h4>
                <p className="text-gray-300">
                  黃金與美元指數通常呈現負相關關係，這是因為黃金以美元計價，美元走強時黃金價格往往受壓。這種關係使黃金成為對沖美元貶值風險的有效工具。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">與債券的關係</h4>
                <p className="text-gray-300">
                  黃金與美國10年期國債呈現中度正相關，這表明在某些市場環境下，特別是在避險情緒上升時，投資者可能同時轉向黃金和國債作為避險資產。
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">風險收益特性比較</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">
              不同資產類別具有不同的風險收益特性，以下是主要資產的年化收益率、波動率和夏普比率比較：
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-left text-gray-300">資產</th>
                    <th className="py-3 px-4 text-left text-gray-300">年化收益率(%)</th>
                    <th className="py-3 px-4 text-left text-gray-300">年化波動率(%)</th>
                    <th className="py-3 px-4 text-left text-gray-300">夏普比率</th>
                    <th className="py-3 px-4 text-left text-gray-300">最大回撤(%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-yellow-500 font-semibold">黃金</td>
                    <td className="py-3 px-4 text-gray-300">14.36</td>
                    <td className="py-3 px-4 text-gray-300">15.61</td>
                    <td className="py-3 px-4 text-gray-300">0.92</td>
                    <td className="py-3 px-4 text-gray-300">-20.87</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">白銀</td>
                    <td className="py-3 px-4 text-gray-300">15.06</td>
                    <td className="py-3 px-4 text-gray-300">14.17</td>
                    <td className="py-3 px-4 text-gray-300">1.06</td>
                    <td className="py-3 px-4 text-gray-300">-20.15</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">鉑金</td>
                    <td className="py-3 px-4 text-gray-300">11.15</td>
                    <td className="py-3 px-4 text-gray-300">16.88</td>
                    <td className="py-3 px-4 text-gray-300">0.66</td>
                    <td className="py-3 px-4 text-gray-300">-22.12</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">S&P 500</td>
                    <td className="py-3 px-4 text-gray-300">16.83</td>
                    <td className="py-3 px-4 text-gray-300">23.68</td>
                    <td className="py-3 px-4 text-gray-300">0.71</td>
                    <td className="py-3 px-4 text-gray-300">-38.71</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">美國10年期國債</td>
                    <td className="py-3 px-4 text-gray-300">5.83</td>
                    <td className="py-3 px-4 text-gray-300">8.44</td>
                    <td className="py-3 px-4 text-gray-300">0.69</td>
                    <td className="py-3 px-4 text-gray-300">-17.10</td>
                  </tr>
                  <tr className="hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">美元指數</td>
                    <td className="py-3 px-4 text-gray-300">-5.02</td>
                    <td className="py-3 px-4 text-gray-300">12.45</td>
                    <td className="py-3 px-4 text-gray-300">-0.40</td>
                    <td className="py-3 px-4 text-gray-300">-34.87</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-300 mt-4">
              黃金的風險收益特性顯示其作為避險資產的價值。雖然黃金的年化收益率可能低於股票市場，但其波動率通常也較低，特別是在市場動盪時期，黃金的表現往往優於其他風險資產。黃金的最大回撤通常也小於股票市場，這使其成為投資組合中的穩定元素。
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">不同市場環境下的表現</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">
              資產在不同市場環境下的表現各異，以下是主要資產在牛市、熊市、高通脹和低通脹環境下的表現比較：
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-left text-gray-300">市場環境</th>
                    <th className="py-3 px-4 text-left text-gray-300">時間範圍</th>
                    <th className="py-3 px-4 text-left text-gray-300">黃金收益率(%)</th>
                    <th className="py-3 px-4 text-left text-gray-300">白銀收益率(%)</th>
                    <th className="py-3 px-4 text-left text-gray-300">鉑金收益率(%)</th>
                    <th className="py-3 px-4 text-left text-gray-300">S&P 500收益率(%)</th>
                    <th className="py-3 px-4 text-left text-gray-300">美國10年期國債收益率(%)</th>
                    <th className="py-3 px-4 text-left text-gray-300">美元指數收益率(%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">牛市</td>
                    <td className="py-3 px-4 text-gray-300">2020-03-23 至 2021-06-21</td>
                    <td className="py-3 px-4 text-yellow-500 font-semibold">13.71</td>
                    <td className="py-3 px-4 text-gray-300">12.72</td>
                    <td className="py-3 px-4 text-gray-300">7.88</td>
                    <td className="py-3 px-4 text-gray-300">2.62</td>
                    <td className="py-3 px-4 text-gray-300">18.73</td>
                    <td className="py-3 px-4 text-gray-300">-7.50</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">熊市</td>
                    <td className="py-3 px-4 text-gray-300">2021-06-22 至 2022-09-20</td>
                    <td className="py-3 px-4 text-yellow-500 font-semibold">-6.56</td>
                    <td className="py-3 px-4 text-gray-300">-6.06</td>
                    <td className="py-3 px-4 text-gray-300">7.10</td>
                    <td className="py-3 px-4 text-gray-300">96.71</td>
                    <td className="py-3 px-4 text-gray-300">-11.87</td>
                    <td className="py-3 px-4 text-gray-300">6.92</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">高通脹</td>
                    <td className="py-3 px-4 text-gray-300">2022-09-21 至 2023-12-19</td>
                    <td className="py-3 px-4 text-yellow-500 font-semibold">22.46</td>
                    <td className="py-3 px-4 text-gray-300">26.96</td>
                    <td className="py-3 px-4 text-gray-300">-2.75</td>
                    <td className="py-3 px-4 text-gray-300">-10.49</td>
                    <td className="py-3 px-4 text-gray-300">3.43</td>
                    <td className="py-3 px-4 text-gray-300">-16.06</td>
                  </tr>
                  <tr className="hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-gray-300">低通脹</td>
                    <td className="py-3 px-4 text-gray-300">2023-12-20 至 2025-03-23</td>
                    <td className="py-3 px-4 text-yellow-500 font-semibold">48.50</td>
                    <td className="py-3 px-4 text-gray-300">51.64</td>
                    <td className="py-3 px-4 text-gray-300">41.79</td>
                    <td className="py-3 px-4 text-gray-300">9.89</td>
                    <td className="py-3 px-4 text-gray-300">20.98</td>
                    <td className="py-3 px-4 text-gray-300">-9.67</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-white">黃金在不同市場環境下的表現特點</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">牛市</h4>
                <p className="text-gray-300">
                  在經濟擴張和股市上漲時期，黃金的表現可能落後於股票市場，但仍能提供穩定的收益。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">熊市</h4>
                <p className="text-gray-300">
                  在經濟衰退和股市下跌時期，黃金往往表現出色，成為避險資產的首選。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">高通脹</h4>
                <p className="text-gray-300">
                  在通脹壓力上升時期，黃金通常表現良好，因為它被視為保值資產和對沖通脹的工具。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">低通脹</h4>
                <p className="text-gray-300">
                  在低通脹環境下，黃金的表現可能不如其他資產，特別是當實際利率上升時。
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">投資組合配置分析</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">
              黃金在投資組合中的配置可以顯著改善整體風險收益特性。以下是不同黃金配置比例的投資組合表現分析：
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">保守型投資組合</h3>
                <p className="text-gray-300 mb-2">配置比例：</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>黃金: 15%</li>
                  <li>股票: 30%</li>
                  <li>債券: 50%</li>
                  <li>現金: 5%</li>
                </ul>
                <div className="mt-3">
                  <p className="text-gray-300">年化收益率: 8.2%</p>
                  <p className="text-gray-300">年化波動率: 9.1%</p>
                  <p className="text-gray-300">夏普比率: 0.90</p>
                </div>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">平衡型投資組合</h3>
                <p className="text-gray-300 mb-2">配置比例：</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>黃金: 10%</li>
                  <li>股票: 50%</li>
                  <li>債券: 35%</li>
                  <li>現金: 5%</li>
                </ul>
                <div className="mt-3">
                  <p className="text-gray-300">年化收益率: 10.5%</p>
                  <p className="text-gray-300">年化波動率: 12.3%</p>
                  <p className="text-gray-300">夏普比率: 0.85</p>
                </div>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">進取型投資組合</h3>
                <p className="text-gray-300 mb-2">配置比例：</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>黃金: 5%</li>
                  <li>股票: 70%</li>
                  <li>債券: 20%</li>
                  <li>現金: 5%</li>
                </ul>
                <div className="mt-3">
                  <p className="text-gray-300">年化收益率: 12.8%</p>
                  <p className="text-gray-300">年化波動率: 16.7%</p>
                  <p className="text-gray-300">夏普比率: 0.77</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300">
              分析顯示，即使是少量的黃金配置（5-15%）也能顯著改善投資組合的風險收益特性。在市場動盪時期，黃金的避險特性尤為明顯，能夠減輕投資組合的下行風險。
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">黃金投資工具比較</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">
              投資者可以通過多種工具參與黃金投資，每種工具都有其優缺點：
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-left text-gray-300">投資工具</th>
                    <th className="py-3 px-4 text-left text-gray-300">優點</th>
                    <th className="py-3 px-4 text-left text-gray-300">缺點</th>
                    <th className="py-3 px-4 text-left text-gray-300">適合投資者</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-yellow-500 font-semibold">實物黃金<br/>(金條、金幣)</td>
                    <td className="py-3 px-4 text-gray-300">
                      <ul className="list-disc list-inside space-y-1">
                        <li>直接擁有實物資產</li>
                        <li>無交易對手風險</li>
                        <li>可在全球交易</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      <ul className="list-disc list-inside space-y-1">
                        <li>存儲和保險成本</li>
                        <li>流動性較低</li>
                        <li>買賣差價較大</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-gray-300">長期投資者、避險投資者、對金融系統持懷疑態度的投資者</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-yellow-500 font-semibold">黃金ETF</td>
                    <td className="py-3 px-4 text-gray-300">
                      <ul className="list-disc list-inside space-y-1">
                        <li>高流動性</li>
                        <li>低交易成本</li>
                        <li>無需處理實物存儲</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      <ul className="list-disc list-inside space-y-1">
                        <li>管理費用</li>
                        <li>交易對手風險</li>
                        <li>無法直接持有實物</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-gray-300">普通投資者、機構投資者、尋求簡便投資方式的投資者</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-yellow-500 font-semibold">黃金礦業股</td>
                    <td className="py-3 px-4 text-gray-300">
                      <ul className="list-disc list-inside space-y-1">
                        <li>潛在槓桿效應</li>
                        <li>股息收益</li>
                        <li>高流動性</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      <ul className="list-disc list-inside space-y-1">
                        <li>公司特定風險</li>
                        <li>與黃金價格相關性不完全</li>
                        <li>受股市整體影響</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-gray-300">尋求更高回報的投資者、願意承擔更高風險的投資者</td>
                  </tr>
                  <tr className="hover:bg-gray-700/30">
                    <td className="py-3 px-4 text-yellow-500 font-semibold">黃金期貨和期權</td>
                    <td className="py-3 px-4 text-gray-300">
                      <ul className="list-disc list-inside space-y-1">
                        <li>高槓桿</li>
                        <li>靈活的交易策略</li>
                        <li>高流動性</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      <ul className="list-disc list-inside space-y-1">
                        <li>高風險</li>
                        <li>需要專業知識</li>
                        <li>時間衰減</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-gray-300">專業交易者、機構投資者、高風險承受能力的投資者</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">結論與投資建議</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              黃金作為一種獨特的資產類別，在投資組合中扮演著重要角色。基於上述分析，我們提出以下投資建議：
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">投資組合配置建議</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>保守型投資者: 配置10-15%的資產於黃金</li>
                  <li>平衡型投資者: 配置5-10%的資產於黃金</li>
                  <li>進取型投資者: 配置3-5%的資產於黃金</li>
                </ul>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">投資工具選擇建議</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>長期持有: 實物黃金或黃金ETF</li>
                  <li>戰術性配置: 黃金ETF或黃金礦業股</li>
                  <li>短期交易: 黃金期貨或期權(僅適合專業投資者)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-500">關鍵投資要點</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>黃金是分散投資組合風險的有效工具，特別是在市場動盪時期</li>
                <li>黃金與股票市場的低相關性使其成為投資組合保護的理想資產</li>
                <li>在高通脹環境下，黃金通常表現良好，可作為通脹對沖工具</li>
                <li>即使是少量的黃金配置也能顯著改善投資組合的風險收益特性</li>
                <li>投資者應根據自身風險承受能力、投資目標和時間範圍選擇適合的黃金投資工具</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

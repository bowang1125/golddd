"use client";

import React from 'react';

export default function TechnicalAnalysis() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text text-transparent">
          黃金技術分析
        </h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">技術分析摘要</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-3 text-white">黃金期貨 (GC=F) 1年期技術分析</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>當前價格: $3021.30</li>
              <li>趨勢分析: 溫和上升趨勢 (斜率: 4.01, R²: 0.45)</li>
              <li>移動平均線: 價格位於20日和50日均線上方，看漲信號</li>
              <li>RSI: 77.05 (超買)</li>
              <li>MACD: MACD線位於信號線上方，看漲信號</li>
              <li>主要支撐位: $2351.90, $2602.50, $2834.10</li>
              <li>主要阻力位: $2789.00, $2710.50, $2957.90</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-white">黃金期貨 (GC=F) 短期（1個月）技術分析</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>當前價格: $3021.30</li>
              <li>趨勢分析: 橫盤整理 (斜率: -0.10, R²: 0.14)</li>
              <li>移動平均線: 價格位於20日均線下方，短期看跌</li>
              <li>RSI: 20.18 (超賣)</li>
              <li>隨機指標: %K=21.65, %D=23.37 (中性)</li>
              <li>短期支撐位: $2879.00, $2941.40, $3004.00</li>
              <li>短期阻力位: $2896.10, $2956.50, $3024.10</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">詳細技術分析</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-3 text-white">趨勢分析</h3>
            <p className="text-gray-300 mb-4">
              黃金期貨目前處於溫和上升趨勢，斜率為4.01，R²值為0.45。這表明價格整體呈現上升趨勢，但波動性較大。
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-white">移動平均線分析</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>20日SMA: $2947.50 (看漲)</li>
              <li>50日SMA: $2873.77 (看漲)</li>
              <li>200日SMA: $2627.76 (看漲)</li>
              <li>黃金交叉: 20日均線位於50日均線上方，中期看漲</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-white">技術指標分析</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">RSI 分析</h4>
                <p className="text-gray-300">
                  RSI (14) 值為 77.05，處於超買區域。這表明短期內可能出現回調，投資者應謹慎。
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">MACD 分析</h4>
                <p className="text-gray-300">
                  MACD線位於信號線上方，形成看漲信號。然而，由於RSI處於超買區域，這一信號的可靠性可能受到影響。
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">布林帶分析</h4>
                <p className="text-gray-300">
                  價格接近上軌，表明短期內可能面臨壓力。布林帶寬度擴大，表明波動性增加。
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">隨機指標分析</h4>
                <p className="text-gray-300">
                  短期隨機指標 %K=21.65, %D=23.37，處於中性區域。%K線位於%D線下方，可能出現下跌。
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">支撐與阻力位分析</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">主要支撐位</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>強支撐位: $2834.10</li>
                  <li>中等支撐位: $2602.50</li>
                  <li>弱支撐位: $2351.90</li>
                </ul>
                <p className="text-gray-300 mt-2">
                  如果價格回落，$2834.10 是第一個關鍵支撐位，這一水平對應於前期高點和50日移動平均線附近。
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">主要阻力位</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>強阻力位: $2957.90</li>
                  <li>中等阻力位: $2710.50</li>
                  <li>弱阻力位: $2789.00</li>
                </ul>
                <p className="text-gray-300 mt-2">
                  目前價格已經突破 $2957.90 的阻力位，下一個潛在阻力位可能在 $3100 附近，這是基於斐波那契擴展水平。
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">價格形態分析</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">
              在過去一年的交易中，黃金期貨形成了多個技術形態，包括頭肩頂和雙頂形態。這些形態通常預示著潛在的反轉，但在強勁的上升趨勢中，這些信號可能不如預期那麼可靠。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">已確認形態</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>上升三角形 (看漲)</li>
                  <li>突破上升通道 (看漲)</li>
                  <li>黃金交叉 (看漲)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">潛在形態</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>頭肩頂 (待確認)</li>
                  <li>雙頂 (待確認)</li>
                  <li>楔形上升 (待確認)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">交易量分析</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">
              近期交易量呈現下降趨勢，這可能表明當前上升趨勢的動能減弱。在價格創新高的同時，交易量未能同步增加，形成了交易量與價格的背離，這是潛在頂部形成的警示信號。
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-white">交易量指標</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>OBV (On-Balance Volume): 上升趨勢，但增速放緩</li>
              <li>CMF (Chaikin Money Flow): 0.15，表明資金仍在流入</li>
              <li>交易量加權移動平均線: 低於20日均線，表明交易活動減少</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">波動性分析</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">
              黃金期貨的波動性在過去三個月中有所增加，這可能是由於地緣政治緊張局勢和全球經濟不確定性加劇所致。
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-white">波動性指標</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>ATR (14): $32.45，高於6個月平均水平</li>
              <li>布林帶寬度: 擴大，表明波動性增加</li>
              <li>歷史波動率 (30日): 18.5%，高於長期平均水平</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">技術分析結論</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">
              綜合各項技術指標和形態分析，黃金期貨目前處於中長期上升趨勢中，但短期可能面臨回調風險。RSI處於超買區域，交易量減少，這些都是潛在的警示信號。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">短期展望 (1-2週)</h3>
                <p className="text-gray-300">
                  中性偏空。可能回調至 $2950-$3000 區間。RSI超買和交易量減少是主要擔憂。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">中期展望 (1-3個月)</h3>
                <p className="text-gray-300">
                  中性偏多。在支撐位附近可能出現買入機會，目標價位 $3100-$3200。
                </p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">長期展望 (3-6個月)</h3>
                <p className="text-gray-300">
                  看漲。基本面因素和技術趨勢支持繼續上漲，目標價位 $3300-$3500。
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-white">交易建議</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>短期交易者可考慮在 $3000-$3050 區間獲利了結，等待回調後再入場</li>
              <li>中期投資者可在 $2900-$2950 支撐區域附近分批買入</li>
              <li>設置止損位於 $2830 (50日移動平均線下方)</li>
              <li>目標價位: $3100 (短期), $3300 (中期), $3500 (長期)</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">風險提示</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              技術分析提供的是基於歷史價格和交易數據的預測，不能保證未來表現。投資者在做出投資決策時，應結合基本面分析和風險管理策略，並考慮以下風險因素：
            </p>
            
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>美聯儲貨幣政策變化可能對黃金價格產生重大影響</li>
              <li>地緣政治事件可能導致市場波動加劇</li>
              <li>美元匯率波動與黃金價格呈負相關關係</li>
              <li>全球經濟數據可能改變市場對黃金的需求預期</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

import React from 'react';

interface GoldPriceChartProps {
  data: {
    name: string;
    price: number | null;
    prediction?: number;
  }[];
  title: string;
}

export default function GoldPriceChart({ data, title }: GoldPriceChartProps) {
  return (
    <div className="h-80 mb-8 bg-gray-800 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-4 text-center text-yellow-500">{title}</h3>
      <div className="flex justify-between items-end h-48 relative">
        {data.map((item, index) => {
          const height = item.price ? `${(item.price / 4000) * 100}%` : '0%';
          const predHeight = item.prediction ? `${(item.prediction / 4000) * 100}%` : '0%';
          
          return (
            <div key={index} className="flex flex-col items-center w-full">
              {item.prediction && (
                <div 
                  className="w-2 bg-blue-500 rounded-t-sm mx-1" 
                  style={{ height: predHeight }}
                ></div>
              )}
              <div 
                className="w-4 bg-yellow-500 rounded-t-sm" 
                style={{ height }}
              ></div>
              <div className="text-xs mt-2 text-gray-400 transform -rotate-45 origin-top-left">
                {item.name}
              </div>
            </div>
          );
        })}
        
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
          <span>$4,000</span>
          <span>$3,000</span>
          <span>$2,000</span>
          <span>$1,000</span>
          <span>$0</span>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 bg-yellow-500 mr-1"></div>
          <span className="text-sm text-gray-300">實際價格</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 mr-1"></div>
          <span className="text-sm text-gray-300">預測價格</span>
        </div>
      </div>
    </div>
  );
}

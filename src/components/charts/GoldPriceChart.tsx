import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 導出接口以便其他文件使用
export interface ChartDataItem {
  name: string;
  price?: number | null;
  prediction?: number | null;
  [key: string]: string | number | null | undefined;
}

interface GoldPriceChartProps {
  data: ChartDataItem[];
  title: string;
}

export default function GoldPriceChart({ data, title }: GoldPriceChartProps) {
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);
  
  useEffect(() => {
    // 確保數據格式正確
    if (data && data.length > 0) {
      // 檢查數據格式並轉換
      if ('name' in data[0] && ('price' in data[0] || 'prediction' in data[0])) {
        // 已經是正確格式
        setChartData(data);
      } else if ('date' in data[0] && 'price' in data[0]) {
        // API返回的格式，需要轉換
        const formattedData = data.map(item => ({
          name: item.date as string,
          price: item.price as number,
          prediction: (item.prediction as number) || null
        }));
        setChartData(formattedData);
      } else {
        // 嘗試其他可能的格式
        const formattedData = data.map((item, index) => {
          const entry: ChartDataItem = { name: '' };
          
          // 處理不同的可能鍵名
          Object.keys(item).forEach(key => {
            if (key.toLowerCase().includes('date') || key.toLowerCase().includes('time') || key.toLowerCase().includes('name')) {
              entry.name = String(item[key]);
            } else if (key.toLowerCase().includes('price') || key.toLowerCase().includes('value') || key.toLowerCase().includes('close')) {
              entry.price = item[key] ? parseFloat(String(item[key])) : null;
            } else if (key.toLowerCase().includes('pred') || key.toLowerCase().includes('forecast')) {
              entry.prediction = item[key] ? parseFloat(String(item[key])) : null;
            }
          });
          
          // 如果沒有找到名稱，使用索引
          if (!entry.name) {
            entry.name = `Point ${index + 1}`;
          }
          
          return entry;
        });
        
        setChartData(formattedData);
      }
    } else {
      // 如果沒有數據，設置一些示例數據
      setChartData([
        { name: '2/25', price: 2950, prediction: null },
        { name: '2/28', price: 2980, prediction: null },
        { name: '3/5', price: 3010, prediction: null },
        { name: '3/10', price: 3040, prediction: null },
        { name: '3/15', price: 3020, prediction: null },
        { name: '3/20', price: 3050, prediction: null },
        { name: '3/23', price: 3070, prediction: null },
        { name: '3/25', price: null, prediction: 3090 },
        { name: '3/30', price: null, prediction: 3110 }
      ]);
    }
  }, [data]);

  // 使用Recharts庫來創建更專業的圖表
  return (
    <div className="h-96 mb-8 bg-gray-800/80 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-4 text-center text-yellow-500">{title}</h3>
      
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#9ca3af' }} 
            axisLine={{ stroke: '#555' }}
          />
          <YAxis 
            tick={{ fill: '#9ca3af' }} 
            axisLine={{ stroke: '#555' }}
            domain={['auto', 'auto']}
            label={{ value: '價格 (美元)', angle: -90, position: 'insideLeft', fill: '#9ca3af' }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#e5e7eb' }}
            labelStyle={{ color: '#e5e7eb' }}
          />
          <Legend wrapperStyle={{ color: '#e5e7eb' }} />
          <Line 
            type="monotone" 
            dataKey="price" 
            name="實際價格" 
            stroke="#eab308" 
            activeDot={{ r: 8 }} 
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="prediction" 
            name="預測價格" 
            stroke="#3b82f6" 
            strokeDasharray="5 5" 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="flex justify-center mt-2">
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

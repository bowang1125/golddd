export const dynamic = 'force-static';
// 或者如果您需要定期重新驗證數據
// export const revalidate = 3600; // 每小時重新驗證一次

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// API路由處理函數
export async function GET() {
  try {
    // 定義JSON文件路徑
    const dataPath = path.join(process.cwd(), '..', 'gold_data', 'gold_data.json');
    
    // 檢查文件是否存在
    if (!fs.existsSync(dataPath)) {
      return NextResponse.json(
        { error: '黃金價格數據尚未生成' },
        { status: 404 }
      );
    }
    
    // 讀取JSON文件
    const fileData = fs.readFileSync(dataPath, 'utf8');
    const goldData = JSON.parse(fileData);
    
    // 返回數據
    return NextResponse.json(goldData);
  } catch (error) {
    console.error('獲取黃金價格數據時出錯:', error);
    return NextResponse.json(
      { error: '獲取黃金價格數據時出錯' },
      { status: 500 }
    );
  }
}

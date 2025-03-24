// 簡化版的toast hook，移除未使用的變量
export function useToast() {
  const toast = (message: string) => {
    console.log(message);
    // 實際實現會在這裡顯示toast通知
  };

  return { toast };
}

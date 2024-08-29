// app/ui/debug/debug.tsx

import { lusitana } from '@/app/ui/fonts'; // フォントのインポート

export default function Debugways() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h2 className="text-xl font-bold text-gray-800">デバッグの方法</h2>
      <p className={`${lusitana.className} text-lg text-gray-600`}>
        電圧測るやつで一つずつ確認していく
      </p>
    </div>
  );
}

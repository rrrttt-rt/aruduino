"use client";  // クライアントサイドでの実行を指定
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link'; // Next.js の Link コンポーネントをインポート


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);  // 開閉状態を管理するための state

  return (
    <aside 
      className={`fixed top-0 ${isOpen ? 'left-0 w-64 h-full' : 'left-0 w-16 h-16'} bg-gray-700 p-4 transition-all duration-300 z-50`}
    >
      {/* ハンバーガーメニューのボタン */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-white mb-4 flex items-center"
      >
        <Bars3Icon className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} />
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {/* サイドバーのコンテンツ */}
      <nav className={`mt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4">
          <li><Link href="/what_is_arduino" className="text-white">Arduinoとは</Link></li>
          <li><Link href="/setup" className="text-white">セットアップ</Link></li>
          <li><Link href="/prior_knowledge" className="text-white">予備知識</Link></li>
          <li><Link href="/LED" className="text-white">LEDを実装</Link></li>
          <li><Link href="/botton" className="text-white">ボタンを実装</Link></li>
          <li><Link href="motor" className="text-white">モーター</Link></li>
          <li><Link href="/ultrasonic" className="text-white">超音波センサを実装</Link></li>
          <li><Link href="/board" className="text-white">基盤に固定</Link></li>
          <li><Link href="/debug" className="text-white">デバッグ</Link></li>
          <li><Link href="/comments" className="text-white">コメント</Link></li>
          <li><Link href="/others" className="text-white">参考資料</Link></li>
        </ul>
      </nav>
    </aside>
  );
}





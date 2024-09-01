import { lusitana } from '../ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function WhatIsArduino() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-20 items-center rounded-lg bg-gray-800 p-4 mb-4">
        <h1 className="text-2xl font-bold text-white">Arduinoとは</h1>
      </div>
      <div className="flex grow flex-col gap-4">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            <strong>Arduinoとは電子デバイスである</strong>
          </p>
        </div>
        <div className="flex items-center justify-center p-6">
          <Image
            src="/arduino-image.png"
            width={800}
            height={600}
            className="max-w-full h-auto"
            alt="Arduino image"
          />
        </div>
        <Link
          href="/others"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>More Info</span>
        </Link>
      </div>
    </div>
  );
}
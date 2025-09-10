//import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">ランディングページ開発中</h1>
      <Link href="/user/sign-up" className="bg-[#518c3c] text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors">新規会員登録</Link>
    </div>
  );
}

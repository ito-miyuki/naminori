'use client'

import api from "../../../../lib/api"
import { useState } from "react"
import Link from "next/link"

export default function SignIn() {

    

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(!email || !password) {
            return ;
        }

        try {
            alert("ログインに成功しました");
        } catch (err) {
            alert("ログインに失敗しました");
            console.error("ログインに失敗しました: ", err);
        }
    
    }

    return (
    <div className="min-h-screen flex flex-col items-center py-4">
        <h1 className="text-2xl font-bold text-center">ログイン</h1>
        <form className="flex flex-col w-xl" onSubmit={handleSubmit}>
            <label htmlFor="loginEmail" className="sr-only">メールアドレス（ログインID）</label>
            <input
                type="text"
                id="loginEmail"
                placeholder="メールアドレス（ログインID）"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                onChange={(e) => setEmail(e.target.value)}
                required
             />
            <label htmlFor="loginPassword" className="sr-only">パスワード</label>
            <input
                type="password"
                id="loginPassword"
                placeholder="パスワード"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </form>
    <p>パスワードを忘れた方はこちら（開発中）</p>
    <button
        type="submit"
        className="bg-[#518c3c] mt-4 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors"
        >
        ログイン
    </button>
    <p>次回から自動ログイン（開発中）</p>
    <hr />
    <p>また会員登録がお済みでない方</p>
    <Link
        href="/user/sign-up"
        className="text-[#518c3c] bg-white outline-solid py-3 px-6 rounded-md font-semibold hover:bg-gray-50 transition-colors"
        >
        会員登録する（無料）
    </Link>
    </div>
)
}
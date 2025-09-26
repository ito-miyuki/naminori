'use client';
import { useState } from "react";
import api from "../../../../lib/api";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Setting() {
    const [password, setPassword] = useState<string>("")
    const [passwordConfirm, setPasswordConfirm] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}")
    const currentUserEmail = currentUser.email

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault()
    
        if (!password || !passwordConfirm) {
            alert("すべてのフィールドを入力してください");
            return ;
        }

        if (password !== passwordConfirm) {
            alert("パスワードが一致しません");
            return ;
        }

        try {
            const res = await api.patch(`/users/${currentUser.id}`, {
                user: {
                    password,
                    password_confirmation: passwordConfirm
                }
            }, { 
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            console.log("パスワードの変更に成功しました:", res.data);
            alert("パスワードの変更に成功しました");
        } catch (err) {
            alert("パスワードの変更に失敗しました");
            console.error("パスワードの変更に失敗しました: ", err);
        }
    }

    const handleEmailChange = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) {
            alert("新しいメールアドレスを入力してください");
            return ;
        }

        try {
            const res = await api.patch("/users", {
                user: {
                    email
                }
            }, { withCredentials: true });
            console.log("メールアドレスの変更に成功しました:", res.data);
            alert("メールアドレスの変更に成功しました");
        } catch (err: any) {
            alert("メールアドレスの変更に失敗しました");
            console.error("メールアドレスの変更に失敗しました: ", err);
            console.error("メールアドレス変更エラー:", err.response?.data);
        }
    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <form onSubmit={handlePasswordChange}>
            <div className="flex flex-col space-y-4">
                <h2>パスワード変更</h2>
                <label className="sr-only">パスワード変更</label>
                <input
                    type="password"
                    name="password"
                    placeholder="新しいパスワード（半角英数8文字以上）"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <input
                    type="password"
                    name="passwordConfirm"
                    placeholder="新しいパスワード（確認用）"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e)=> setPasswordConfirm(e.target.value)}
    />
                <button
                    type="submit"
                    className="bg-[#518c3c] w-full text-white py-2 rounded-md font-semibold hover:bg-green-700 transition-colors"
                    >
                        パスワードを変更する
                    </button>
            </div>
        </form>

        <form onSubmit={handleEmailChange}>
            <div className="flex flex-col space-y-4">
                <h2>メールアドレス変更</h2>
                <p>現在の登録メールアドレス：{currentUserEmail}</p>
                <label className="sr-only">メールアドレス変更</label>
                <input
                    type="email"
                    name="email"
                    placeholder="新しいメールアドレス"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <button
                    type="submit"
                    className="bg-[#518c3c] w-full text-white py-2 rounded-md font-semibold hover:bg-green-700 transition-colors"
                >
                    メールアドレスを変更する
                </button>
            </div>
        </form>
    </div>
  )
}
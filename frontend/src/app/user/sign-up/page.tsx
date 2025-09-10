"use client";

import { useState } from "react";
import api from "../../../../lib/api";

const prefectures = [
  "北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県",
  "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
  "新潟県","富山県","石川県","福井県","山梨県","長野県",
  "岐阜県","静岡県","愛知県","三重県",
  "滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県",
  "鳥取県","島根県","岡山県","広島県","山口県",
  "徳島県","香川県","愛媛県","高知県",
  "福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"
];

export default function SignUp() {
    const [form, setForm] = useState({
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        birthdate: "",
        gender: "",
        prefecture: "",
        password: "",
        passwordConfirm: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (form.password != form.passwordConfirm) {
            alert("パスワードが一致しません");
            return ;
        }

        try {
            const res = await api.post("users/", {
                name: form.firstName + " " + form.lastName,
                email: form.email,
                phone: form.phone,
                birthdate: form.birthdate,
                gender: form.gender,
                password: form.password
            });
            console.log("登録完了", res.data);
            alert("登録が完了しました");
        } catch (err) {
            console.log("登録失敗", err);
            alert("登録に失敗しました: ");
        }
    }

    return (
        <>
            <h1>新規会員登録</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="lastName">姓</label>
                    <input id="lastName" type="text" value={form.lastName} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="firstName">名</label>
                    <input id="firstName" type="text" value={form.firstName} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">メールアドレス（ログインID）</label>
                    <input id="email" type="text" value={form.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phone">電話番号（ハイフンなしの半角英数）</label>
                    <input id="phone" type="text" value={form.phone} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="birthdate">生年月日</label>
                    <input id="birthdate" type="date" value={form.birthdate} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="gender">性別を選択</label>
                    <select id="gender" value={form.gender} onChange={handleChange} >
                        <option value="">選択してください</option>
                        <option value="male">男性</option>
                        <option value="female">女性</option>
                        <option value="other">その他</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="prefecture">居住地を選択</label>
                    <select id="prefecture" value={form.prefecture} onChange={handleChange}>
                        <option value="">選択してください</option>
                        {prefectures.map((prefecture) => (
                            <option key={prefecture} value={prefecture}>
                                {prefecture}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="password">パスワード</label>
                    <input id="password" type="password" value={form.password} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="passwordConfirm">パスワード（確認用）</label>
                    <input id="passwordConfirm" type="password" value={form.passwordConfirm} onChange={handleChange}/>
                </div>
                <button type="submit">会員登録する（無料）</button>
            </form>
        </>
    )
}
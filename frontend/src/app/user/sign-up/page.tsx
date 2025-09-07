export default function SignUp() {
    return (
        <>
            <h1>新規会員登録</h1>
            <form >
                <div>
                    <label htmlFor="lastName">姓</label>
                    <input id="lastName" type="text" />
                </div>
                <div>
                    <label htmlFor="firstName">名</label>
                    <input id="firstName" type="text" />
                </div>
                <div>
                    <label htmlFor="email">メールアドレス（ログインID）</label>
                    <input id="email" type="text" />
                </div>
                <div>
                    <label htmlFor="phone">電話番号（ハイフンなしの半角英数）</label>
                    <input id="phone" type="text" />
                </div>
                <div>
                    <label htmlFor="birthdate">生年月日</label>
                    <input id="birthdate" type="date" />
                </div>
                <div>
                    <label htmlFor="gender">性別を選択</label>
                    {/* <input id="gender" type="text" /> */}
                    <select id="gender">
                        <option value="male">男性</option>
                        <option value="female">女性</option>
                        <option value="other">その他</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="address">居住地を選択</label>
                    <input id="address" type="text" />
                </div>
                <div>
                    <label htmlFor="password">パスワード</label>
                    <input id="password" type="password" />
                </div>
                <div>
                    <label htmlFor="passwordConfirm">パスワード（確認用）</label>
                    <input id="passwordConfirm" type="password" />
                </div>
                <button type="submit">会員登録する（無料）</button>
            </form>
        </>
    )
}
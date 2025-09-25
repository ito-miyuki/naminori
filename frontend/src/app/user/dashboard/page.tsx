'use client'
import { useEffect, useState } from "react"

export default function Dashboard() {
    const [user, setUser] = useState<{ id: number; name: string; email: string } | null>(null)
    
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("currentUser") || "{}"))
    }, [])

    console.log("Current user:", user)
    console.log("Current user name:", user?.name)

    return (
        <div>
            <h1>ユーザーダッシュボード</h1>
            <p>
                こんにちは、{user?.name ?? "ゲスト"}さん
            </p>
        </div>
    )
}
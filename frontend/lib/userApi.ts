import api from "./api"
import { User } from "../types/user";

export default async function createUser(userData: Omit<User, "id">) {
    const res = await api.post("/user", userData);
    return res.data as User;
}

// ユーザー一覧取得（テスト用）
export async function getUsers() {
  const response = await api.get<User[]>("/users");
  return response.data;
}
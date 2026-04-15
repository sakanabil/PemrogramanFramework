import { signUp } from "@/utils/db/servicefirebase";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  alamat: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
    const { email, fullname, password } = req.body;

    // Validasi server-side
    if (!email || email.trim() === "") {
      return res.status(400).json({ name: "Email wajib diisi", alamat: "" });
    }
    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ name: "Password minimal 6 karakter", alamat: "" });
    }
    if (!fullname || fullname.trim() === "") {
      return res
        .status(400)
        .json({ name: "Nama lengkap wajib diisi", alamat: "" });
    }

    // Tambahkan role default "member"
    const userData = { ...req.body, role: "member" };

    await signUp(userData, (result: { status: string; message: string }) => {
      if (result.status === "success") {
        res.status(200).json({ name: result.message, alamat: "" });
      } else {
        res.status(400).json({ name: result.message, alamat: "" });
      }
    });
  } else {
    res.status(405).json({ name: "Method Not Allowed", alamat: "" });
  }
}

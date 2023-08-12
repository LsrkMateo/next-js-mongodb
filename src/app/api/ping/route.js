import { NextResponse } from "next/server";
import { conectDB } from "@/utils/mongoose";
export function GET() {
  conectDB();
  return NextResponse.json({ message: "hola mundo" });
}

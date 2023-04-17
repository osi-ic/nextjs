import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    hello: "hehe",
    id: 1,
  };

  return NextResponse.json({ data });
}

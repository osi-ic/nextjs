import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const user = params.user;
  const res = await fetch(" https://api.github.com/search/users?q=" + user);
  const data = await res.json();

  return NextResponse.json({ data });
}

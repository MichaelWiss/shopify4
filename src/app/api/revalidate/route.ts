import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const incoming = await request.json();
  const secret = headers().get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
  }

  const path = typeof incoming?.path === "string" ? incoming.path : "/";
  try {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, now: Date.now(), path });
  } catch (error) {
    return NextResponse.json(
      { revalidated: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}

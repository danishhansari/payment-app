import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";
import db from "@repo/db/client";

export const GET = async () => {
  const data = await db.user.findMany({});
  return NextResponse.json(data);
  // const session = await getServerSession(authOptions);
  // if (session.user) {
  //   return NextResponse.json({
  //     user: session.user,
  //   });
  // }
  // return NextResponse.json(
  //   {
  //     message: "You are not logged in",
  //   },
  //   {
  //     status: 403,
  //   }
  // );
};

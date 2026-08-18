import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const ip = request.headers.get("x-forwarded-for") || "";

  // Block known bad bots
  const badBots = [
    "AhrefsBot",
    "SemrushBot", 
    "MJ12bot",
    "DotBot",
    "BLEXBot",
    "DataForSeoBot",
    "PetalBot",
    "serpstatbot",
    "centurybot",
    "GrapeshotCrawler",
    "Bytespider",
    "GPTBot",
    "CCBot",
    "omgili",
    "Scrapy",
    "python-requests",
    "Go-http-client",
  ];

  const isBadBot = badBots.some((bot) =>
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  if (isBadBot) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|badges|sitemap.xml|robots.txt).*)",
  ],
};

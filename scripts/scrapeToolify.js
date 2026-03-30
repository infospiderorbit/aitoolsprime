import fs from "fs";
import puppeteer from "puppeteer";

const URL = "https://www.toolify.ai/category/ai-girlfriend";

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: "networkidle2" });

  let prevHeight;
  while (true) {
    prevHeight = await page.evaluate("document.body.scrollHeight");
    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
    await new Promise(r => setTimeout(r, 2000));

    const newHeight = await page.evaluate("document.body.scrollHeight");
    if (newHeight === prevHeight) break;
  }

  const tools = await page.evaluate(() => {
    const links = document.querySelectorAll('a[href^="/tool/"]');
    const data = [];

    links.forEach(el => {
      const name = el.innerText.trim();
      const url = "https://www.toolify.ai" + el.getAttribute("href");

      if (name) {
        data.push({ name, url });
      }
    });

    return data;
  });

  const unique = Array.from(new Map(tools.map(t => [t.url, t])).values());

  fs.writeFileSync("toolify-ai-girlfriend.json", JSON.stringify(unique, null, 2));

  console.log("Scraped tools:", unique.length);

  await browser.close();
})();

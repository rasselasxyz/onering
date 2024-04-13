import members from "./src/members.js"
import { firefox } from "playwright"
const browser = await firefox.launch()
const context = await browser.newContext()
const page = await context.newPage()

async function screenshot() {
  for await (let { url, name } of members) {
    await page.goto(url)
    await page.screenshot({ path: `./assets/screenshots/${name}.jpg`, type: "jpeg" })
  }
}

screenshot().then(() => {
  browser.close()
})

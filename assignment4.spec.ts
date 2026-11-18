import test, { expect } from "@playwright/test";
test("Automation training account created for Playwright assessment", async({page})=>{

await page.goto("https://leaftaps.com/opentaps/control/main");

await page.getByRole("textbox", {name: "Username" }).fill("Demosalesmanager");

await page.getByRole("textbox", {name: "Password" }).fill("crmsfa");

let loginButton=page.getByRole("button",{name:"Login"});
await expect(loginButton).toBeVisible();

})
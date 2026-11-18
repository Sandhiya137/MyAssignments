import test from "@playwright/test";

test("Test to learn nested frame", async({page})=>{

//load the url

page.goto("https://www.leafground.com/frame.xhtml");

//frame locator

const outerFrame = page.frameLocator("[src='page.xhtml']");
const innerFrame = outerFrame.frameLocator("[src='framebutton.xhtml']");

await innerFrame.getByRole("button", {name:"Click Me"}).click();

await page.waitForTimeout(10000);

})
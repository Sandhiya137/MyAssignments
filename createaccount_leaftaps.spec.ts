import test, { expect } from "@playwright/test";
test("Automation training account created for Playwright assessment", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.getByRole("textbox", {name: "Username" }).fill("Demosalesmanager");

    await page.getByRole("textbox", {name: "Password" }).fill("crmsfa");

    await page.getByRole("button", {name: "Login"}).click();

    await page.getByText("CRM/SFA").click();

    //click the Account module

    await page.getByRole("link", {name:"Accounts"}).click();

    //slect the option to  create account 
    await page.getByRole("link", {name:"Create Account"}).click();

    //Enter Account Name as Testleaf Digital Solutions
    await page.locator("#accountName").fill("Testleaf Digital Solutions");

    //Enter site name as chennai office.
    await page.locator("#officeSiteName").fill("Chennai");

    // Select Industry as Computer Software.
    await page.locator('[name="industryEnumId"]').selectOption({value:"IND_SOFTWARE"});

    //select ownership as private
    await page.locator('[name="ownershipEnumId"]').selectOption({value:"OWN_PROPRIETOR"});

    //enter phone number
    await page.locator("#primaryPhoneNumber").fill("04440012345");

    //enter web url as https://www.testleaf.com
    await page.locator("#primaryWebUrl").fill("https://www.testleaf.com");

    //Enter Billing City, State and Country. 
    await page.locator("#generalCountryGeoId").selectOption({value:"IND"}); 
    await page.locator("#generalStateProvinceGeoId").selectOption({value:"IN-TN"});
    await page.locator("#generalCity").fill("chennai");
    
    //enter decription 
    await page.locator('[name="description"]').fill("Automation training account created for Playwright assessment");

    //click create account
    await page.locator('input[type="submit"]').click();


    //login is visible or not.
    // let loginButton=page.getByRole("button",{name:"Login"});
    // await expect(loginButton).toBeVisible();

    // Pause the test execution for 5000 milliseconds (5 seconds).
    await page.waitForTimeout(5000);


























})
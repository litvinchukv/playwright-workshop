import { test, expect } from "@playwright/test";

test("user can sign up", async ({ page }) => {
  const email = `vova${Date.now()}@gmail.com`;
  await page.goto("https://shopdemo-alex-hot.koyeb.app/register");
  await page
    .getByRole("main")
    .getByRole("textbox", { name: "Please Enter Your Email" })
    .fill(email);
  await page
    .getByRole("textbox", { name: "Please Enter Your First Name" })
    .fill("Vova");
  await page
    .getByRole("textbox", { name: "Please Enter Your Last Name" })
    .fill("Test");
  await page
    .getByRole("textbox", { name: "Please Enter Your Password" })
    .fill(email);
  await page.getByRole("button", { name: "Sign Up" }).click();
  await expect(page.getByRole("main")).toContainText("Account Details");
});

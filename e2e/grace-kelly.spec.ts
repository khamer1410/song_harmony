import {test, expect } from "@playwright/test";

const GRACE_URL = '/grace-kelly'
test('when I enter the song page then I see the artist and song name', async ({page }) => {
  const ARTIST_NAME = 'Mika'

  await page.goto(GRACE_URL);
  await expect(page.getByRole('heading', {name: ARTIST_NAME})).toBeVisible()
})
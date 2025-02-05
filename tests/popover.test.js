const puppeteer = require('puppeteer');

describe('Popover widget', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000');
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Popover appears when button is clicked', async () => {
        await page.click('#popover-button');
        const popover = await page.$('.popover');
        expect(popover).not.toBeNull();
    });

    test('Popover disappears when button is clicked again', async () => {
        await page.click('#popover-button');
        await page.waitForFunction(() => !document.querySelector('.popover'));
        const popover = await page.$('.popover');
        expect(popover).toBeNull();
    });
});

import type {TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page } from "@playwright/test";

export class LoginPage {
    protected _page: Page
    protected _test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>

    constructor(
        page: Page,
        test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        this._page = page
        this._test = test
    }

    //metody (public/private/protected)

    public async openHomePage(
        url: string
    ) {
        await this._page.goto(url)
    }

}

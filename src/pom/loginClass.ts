import type { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page } from "@playwright/test";
import { testConfig, testSecrets } from "../types/globalTypes";
import { FeUtils } from "../lib/frontend";

export class LoginPage extends FeUtils {
    protected _testConfig: testConfig
    protected _testSecrets: testSecrets

    constructor(
        page: Page,
        test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testConfig: testConfig,
        testSecrets: testSecrets
    ) {
        super(page, test)
        this._testConfig = testConfig
        this._testSecrets = testSecrets
    }

    // Metody
    public async openHomepage() {
        await this._goTo(this._testConfig.endpointUrl)
    }
}
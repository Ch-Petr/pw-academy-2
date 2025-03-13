import { test } from '@playwright/test'
import { LoginPage } from '../src/pom/loginClass'
import dotenv from 'dotenv'
import { testConfig, testSecrets } from '../src/types/globalTypes'

dotenv.config({ override: true })

const env = process.env.ENV || 'dev'
const testConfig: testConfig = require(`../data/envs/config_${env}.json`)

const testSecrets: testSecrets = {
    username: process.env.UNAME,
    password: process.env.PWORD
}

test("Sample Frontend", async({ page }) => {
    const loginPage = new LoginPage(page, test, testConfig, testSecrets)

    await loginPage.openHomepage()
})
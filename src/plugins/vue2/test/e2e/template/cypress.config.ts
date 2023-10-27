import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    chromeWebSecurity: true,
    specPattern: 'test/e2e/**/*.spec.[jt]s',
    supportFile: false,
  },
});

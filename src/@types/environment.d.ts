declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BACKEND_GRAPHQL_ENDPOINT: string;
      FIREBASE_WEB_API_KEY: string;

      TEST_EMAIL: string;
      TEST_PASSWORD: string;
      TEST_ORGANIZATION_ID: string;
    }
  }
}

export {};

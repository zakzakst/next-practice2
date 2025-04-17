import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jest-fixed-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(svg)$": "<rootDir>/src/tests/__mocks__/svgrMock.tsx",
  },
  collectCoverage: true,
};

export default createJestConfig(config);

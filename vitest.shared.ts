import { defineProject } from "vitest/config";

export default defineProject({
  test: {
    include: ["**/*_test.ts"],
  },
});

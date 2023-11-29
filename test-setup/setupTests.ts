import { afterEach, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { toHaveNoViolations } from "jest-axe";

expect.extend(matchers);
expect.extend(toHaveNoViolations); // to check a11y issues

afterEach(() => {
  cleanup();
});

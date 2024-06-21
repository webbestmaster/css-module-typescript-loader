/* global HTMLElement */
import {describe, expect, it} from "@jest/globals";
import fileSystem from "node:fs/promises";

import {runCommand} from "./test-util";

describe("empty describe", () => {
    it("empty test", async () => {
        expect.assertions(1);

        // 1/2 run webpack build
        await runCommand("npm run front:build");

        // 2/2 check root.scss.d.ts
        const fileContent = await fileSystem.readFile("./www/css/root.scss.d.ts", {encoding: "utf-8"});

        const expectedFileContent = [
            "// Do not change. This file is automatically generated.",
            "export const some_class_name: string;",
            "export const another_class_name: string;",
            "",
        ].join("\n");

        expect(fileContent).toBe(expectedFileContent);
    }, 20_000);
});

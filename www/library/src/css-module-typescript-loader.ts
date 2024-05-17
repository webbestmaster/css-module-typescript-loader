/* global NodeJS */

import fileSystem from "node:fs";

type CallbackType = (error: Readonly<Error> | null, source?: string) => undefined;

interface LoaderContextType {
    readonly async: () => CallbackType;
    readonly resourcePath: string;
}

function getIsNonEmptyString(line: string): line is string {
    return line.trim() !== "";
}

function makeTypingLine(line: string): string {
    if (!/export var\s+\S+?\s*=\s*\S+?;/u.test(line)) {
        return "";
    }

    const exportKey: string = line.replace("export var ", "").split("=").at(0)?.trim() ?? "";

    if (exportKey === "") {
        return "";
    }

    return `export const ${exportKey}: string;`;
}

function writeFileCallback(error: Readonly<NodeJS.ErrnoException> | null): undefined {
    if (error) {
        console.error(error);
    }
}

function getTypingContent(source: string): string {
    const exportList: ReadonlyArray<string> = source
        .split("\n")
        .map<string>(makeTypingLine)
        .filter<string>(getIsNonEmptyString);

    return `// Do not change. This file is automatically generated.\n${exportList.join("\n")}\n`;
}

export function cssModuleTypescriptLoader(this: LoaderContextType, source: string): string {
    const pathToNewFile = `${this.resourcePath}.d.ts`;

    fileSystem.writeFile(pathToNewFile, getTypingContent(source), writeFileCallback);

    return source;
}

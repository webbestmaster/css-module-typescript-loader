import {exec, type ExecException} from "node:child_process";

export async function runCommand(command: string): Promise<string> {
    return new Promise((resolve: (result: string) => void, reject: (error: ExecException) => void) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        exec(command, (error: ExecException | null, stdout: string, stderr: string) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout);
        });
    });
}

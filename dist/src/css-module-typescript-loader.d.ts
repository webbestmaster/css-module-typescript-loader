type CallbackType = (error: Readonly<Error> | null, source?: string) => undefined;
interface LoaderContextType {
    readonly async: () => CallbackType;
    readonly resourcePath: string;
}
export declare function cssModuleTypescriptLoader(this: LoaderContextType, source: string): string;
export {};

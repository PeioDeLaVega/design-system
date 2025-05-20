import { type AfterAll, type BeforeEach, type Errback, type EvalScripts } from "@tanem/svg-injector";
type Options = {
    afterAll?: AfterAll;
    afterEach?: Errback;
    beforeEach?: BeforeEach;
    cacheRequests?: boolean;
    evalScripts?: EvalScripts;
    httpRequestWithCredentials?: boolean;
    renumerateIRIElements?: boolean;
};
export declare const svgInjector: (element: HTMLElement | SVGSVGElement | null, { beforeEach, ...options }?: Options) => void;
export {};

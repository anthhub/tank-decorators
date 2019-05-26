declare const _default: {
    _get<T>(target: T, fn: (target: T) => any, defaultValue?: any): any;
    _wait(time?: number): Promise<{}>;
    _throttle<T extends () => any>(fn: T, delay: number): T;
    _debounce<T extends () => any>(fn: T, delay: number): T;
    _getPropsFromURL(name: string): string | null;
    _timeToLocalStr(time: number): string;
};
export default _default;

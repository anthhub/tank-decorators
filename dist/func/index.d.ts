/**
 * @description 链式调用,出错保护
 * @author anthhub
 * @date 2019-05-25
 * @export
 * @template T
 * @param {T} target
 * @param {(target: T) => any} fn
 * @param {*} [defaultValue=null]
 * @returns {*}
 */
export declare function _get<T>(target: T, fn: (target: T) => any, defaultValue?: any): any;
/** 延时函数, 返回一个promise, 配合async/await使用更佳
 * @description
 * @author anthhub
 * @date 2019-05-26
 * @param {number} [time=0]
 * @returns
 */
export declare function _wait(time?: number): Promise<{}>;
/**
 * @description 函数节流
 * @author anthhub
 * @date 2019-05-26
 * @template T
 * @param {T} fn
 * @param {number} delay
 * @returns {T}
 */
export declare function _throttle<T extends () => any>(fn: T, delay: number): T;
/**
 * @description 函数防抖
 * @author anthhub
 * @date 2019-05-26
 * @template T
 * @param {T} fn
 * @param {number} delay
 * @returns {T}
 */
export declare function _debounce<T extends () => any>(fn: T, delay: number): T;

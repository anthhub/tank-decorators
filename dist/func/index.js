(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    function _get(target, fn, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var caller = target;
        if (typeof fn !== 'function') {
            throw TypeError('The first property must be a function！');
        }
        try {
            return fn(caller);
        }
        catch (error) {
            console.warn('====================================');
            console.warn("In the function from properties :", fn.toString());
            console.warn(error.message);
            console.warn('====================================');
            return defaultValue;
        }
    }
    exports._get = _get;
    /** 延时函数, 返回一个promise, 配合async/await使用更佳
     * @description
     * @author anthhub
     * @date 2019-05-26
     * @param {number} [time=0]
     * @returns
     */
    function _wait(time) {
        if (time === void 0) { time = 0; }
        if (typeof time !== 'number') {
            throw TypeError('The first property must be a number!');
        }
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(time);
            }, time);
        });
    }
    exports._wait = _wait;
    /**
     * @description 函数节流
     * @author anthhub
     * @date 2019-05-26
     * @template T
     * @param {T} fn
     * @param {number} delay
     * @returns {T}
     */
    function _throttle(fn, delay) {
        var _this = this;
        if (typeof fn !== 'function') {
            throw TypeError('The first property must be a function！');
        }
        if (typeof delay !== 'number') {
            throw TypeError('The second property must be a number');
        }
        var lastTime = 0;
        var newFn = function () {
            var nowTime = Date.now();
            if (nowTime - lastTime > delay) {
                fn.call(_this);
                lastTime = nowTime;
            }
        };
        return newFn;
    }
    exports._throttle = _throttle;
    /**
     * @description 函数防抖
     * @author anthhub
     * @date 2019-05-26
     * @template T
     * @param {T} fn
     * @param {number} delay
     * @returns {T}
     */
    function _debounce(fn, delay) {
        var _this = this;
        if (typeof fn !== 'function') {
            throw TypeError('The first property must be a function！');
        }
        if (typeof delay !== 'number') {
            throw TypeError('The second property must be a number');
        }
        var timer = null;
        var newFn = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.call(_this);
            }, delay);
        };
        return newFn;
    }
    exports._debounce = _debounce;
});
//# sourceMappingURL=index.js.map
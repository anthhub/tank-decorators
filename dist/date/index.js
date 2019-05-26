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
     * @description 毫秒数转字符串
     * @author anthhub
     * @date 2019-05-26
     * @export
     * @param {number} inputTime
     * @returns {string}
     */
    function _timeToLocalStr(time) {
        if (typeof time !== 'number') {
            throw TypeError('The first property must be a number');
        }
        var localTime = '';
        time = new Date(time).getTime();
        var offset = new Date().getTimezoneOffset();
        localTime = new Date(time - offset * 60000).toISOString();
        localTime = localTime.substr(0, localTime.lastIndexOf('.'));
        localTime = localTime.replace('T', ' ');
        return localTime;
    }
    exports._timeToLocalStr = _timeToLocalStr;
});
//# sourceMappingURL=index.js.map
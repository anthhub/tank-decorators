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
     * @description 从url获取参数
     * @author anthhub
     * @date 2019-05-26
     * @export
     * @param {string} name
     * @returns {string}
     */
    function _getPropsFromURL(name) {
        if (typeof name !== 'number') {
            throw TypeError('The first property must be a string');
        }
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i');
        var result = window.location.search.substr(1).match(reg);
        if (result !== null) {
            return decodeURI(result[2]);
        }
        return null;
    }
    exports._getPropsFromURL = _getPropsFromURL;
});
//# sourceMappingURL=index.js.map
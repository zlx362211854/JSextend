//String

// 检测字符串中是否包含指定子串
String.prototype.find = function (str) {
    var originStr = this.valueOf();
    if (str !== '') {
        var exp = new RegExp(""+str+"", "g");
        return exp.test(originStr);
    }
    return false;
};
console.log("abcd".find('a'));

// Array

// 移除数组中重复的元素
Array.prototype.unique = function () {
    var arr = [], i, len = this.length;
    if (len < 2) return this;
    for (i = 0; i < len; i++) {
        if (arr.indexOf(this[i]) === -1) {
            arr.push(this[i]);
        }
    }
    return arr;
};
console.log([1,2,2,3].unique());
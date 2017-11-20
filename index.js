String.prototype.find = function (str) {
    //  检测字符串中是否包含指定子串
    var originStr = this.valueOf();
    if (str !== '') {
        var exp = new RegExp(""+str+"", "g");
        return exp.test(originStr);
    }
    return false;
};
console.log("abcd".find('a'));
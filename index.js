//String

// 检测字符串中是否包含指定子串
String.prototype.find = function (str) {
    var originStr = this.valueOf();
    if (str !== '') {
        var exp = new RegExp("" + str + "+", "g");
        return exp.test(originStr);
    }
    return false;
};
console.log("abcd".find('a')); // true

// 获取url对应参数的值
String.prototype.getQuery = function (name) {
    var params = this.valueOf(), paramsArr, paramsObj = {};
    if (params) {
        if (params.split('?')[1]) {
            paramsArr = params.split('?')[1].split('&');
            paramsArr.forEach(function (i) {
                var obj = i.split('=');
                paramsObj[obj[0]] = obj[1];
            });
            return paramsObj[name];
        } else {
            return 'url格式不正确'
        }
    }
};
console.log('home/page?name=zlx&age=24'.getQuery('name'));


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
console.log([1, 2, 2, 3].unique()); // [1,2,3]

// 经典闭包

var a = [];// function
for (var i = 0; i< 10; i++) {
    a[i] = (function(i) {
        return function() {
            console.log(i);
        }
    })(i);
}
a[6](); // 6

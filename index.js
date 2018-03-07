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

// 判断数字是否在指定区间

function compare(str, num) {
    var left, right, numL, numR;
    str = str.replace(/\s/g, '');
    const interval = str.split(',');
    const leftStr = interval[0];
    const rightStr = interval[1];

    numL = leftStr.substr(1);
    numR = rightStr.substr(0, rightStr.length - 1);

    if (leftStr.charAt(0) === '[') {
        left = true
    } else if (leftStr.charAt(0) === '(') {
        left = false
    }

    if (rightStr.charAt(rightStr.length - 1) === ']') {
        right = true
    } else if (rightStr.charAt(rightStr.length - 1) === ')') {
        right = false
    }

    if (left && right) {
        return num <= Number(numR) && num >= Number(numL);
    } else if (left && !right) {
        return num < Number(numR) && num >= Number(numL);
    } else if (!left && right) {
        return num <= Number(numR) && num > Number(numL);
    } else if (!left && !right) {
        return num < Number(numR) && num > Number(numL);
    }
}

console.log(compare('[1.5, 24.56]', 2));
console.log(compare('[-2, 0]', 0));
console.log(compare('[1, 2)', 2));
console.log(compare('[1.5, -8)', 3));
console.log(compare('[0,0)', 0));
console.log(compare('(0,5)', 5));

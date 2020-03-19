let counter = function(arr){
    return `一共有${arr.length}个元素在数组中`;
}
let adder = function(a,b){
    return `您想要计算的两个值的和为: ${a+b}`;
}

let name = 'Bryant'

let exportStuffData = {
    counter,
    adder,
    name
}

module.exports = exportStuffData;
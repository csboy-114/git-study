function add(a,b){
    return a+b;
}
console.log(add(1,3));

function protoLink(obj){
    function f(){}
    f.prototype=obj;
    return new f();
}
class Parent {
    x = "xx";
    y = "yy";
    z = "zz";

    a(){
        return "this is a";
    }

    b(){
        return "this is b";
    }

    c(){
        return "this is c";
    }
}

const p = new Parent;
console.log(p);


class Child extends Parent{
    e = "ee";
}

const c = new Child;
console.log(c);



















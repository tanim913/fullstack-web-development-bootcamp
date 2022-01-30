

function fib (n)
{
    var a = 0;
    var b = 1;
    var f = [a,b];
    
    if(n === 1)
    {
        var f1 = [];
        f1[0] = f[0];
        return f1;
    }
    else
    {
        while (n!=2)
        {
            var c = a+b;
            f.push(c);
            a = b;
            b = c;
            n--;
        }
    return f;
    }
}
//driver code
console.log(fib(245));

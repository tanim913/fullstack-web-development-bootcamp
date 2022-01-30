var a = 0;
var b = 1;
var f = [a,b];

function fib (n)
{
    
    if(n === 1)
    {
        console.log("["+f[0]+"]");
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
    console.log(f);
    }
}
//driver code
fib(3);

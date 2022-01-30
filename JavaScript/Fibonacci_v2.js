
function fib (n)
{
    var f = [];

    if(n === 1)
    {
        f = [0];
    }
    else if (n === 2)
    {
        f = [0,1];
    }
    else
    {
        f = [0,1];
        for (var i = 2; i<n; i++)
        {
            f.push(f[f.length-2]+f[f.length-1]);
        }
    }

    return f;
}

//driver code
console.log(fib(245));

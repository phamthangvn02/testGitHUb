var fun={
tongN: function tongN(n)
{
    let s=0;
    for(i=1;i<=n;i++)
    {
        s+=i;

    }
    return s;
},
giaiThua: function giaithua(s)
{
    let n=1;
    for (i=1;i<=s;i++)
    {
        n=n*i;
    }
    return n;
},

tongphanSo: function tongphanso(n)
{
    let a=1;
    for(i=2;i<=n;i++)
    {
        a=a+(1/i);
    }
    return a;
}
}
module.exports=fun;
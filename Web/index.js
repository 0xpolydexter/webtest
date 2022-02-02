//0,1,1,2,3,5,8,13,21,34,55
// fibonacci using array

var f = [];
f[0] = 0;
f[1] = 1;
function fiboArray(a) {
    for (i = 2; i <= a; i++) {
        f[i] = f[i - 1] + f[i - 2];
      //  console.log(f[i]);
        fx = f[i];
    }
    return fx;
}
console.log(fiboArray(10));

//fibonacci using recursive
function fiboRecursive(n) {
    return n < 1 ? 0
            : n <= 2 ? 1 
            : fiboRecursive(n-1)+fiboRecursive(n-2);
}
console.log(fiboRecursive(10));

//anagram strings
//var str1 = 'fried';
//var str2 = 'fired';
var i,j;
var x = false;
var y = false;
function checkAnagram(str1,str2)
{

for (i=0;i<str1.length;i++)
{
    for(j=0;j<str2.length;j++)
    {
        if(str1[i]==str2[j])
        x = true;
    }
}
}
console.log(checkAnagram('X','XY'));

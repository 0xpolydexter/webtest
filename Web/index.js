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
            : fiboRecursive(n - 1) + fiboRecursive(n - 2);
}
console.log(fiboRecursive(10));

//anagram strings
var i, j;
var z = 0;
function checkAnagram(str1, str2) {
    if (str1.length != str2.length) { return 'not anagram, lengths do not match!'; }
    else {
        for (i = 0; i < str1.length; i++) {
            for (j = 0; j < str2.length; j++) {
                if (str1[i] == str2[j]) {
                    // console.log('matches',str1[i],str2[j]);
                    z++;
                }
            }
        }
        //  console.log(z);
        if (z >= str1.length)
            return `${str1} and ${str2} are anagram!`;
        else return `${str1} and ${str2} are not anagram!`;
    }
}
console.log(checkAnagram('fired', 'fried'));
console.log(checkAnagram('logo', 'ogol'));
console.log(checkAnagram('abcd', 'abc'));

//string reversal
function reverseit(a) {
    var b = [];
    for (i = 0; i < a.length; i++) {
        b[i] = a[a.length - i - 1];

    }
    return b.join("")
}
console.log(reverseit('opportunity'));

//find missing number
var b = [];
var j=0;
function findDuplicates(a) 
{
    for(var i=0;i<a.length;i++)
    {
       for(varj=0;j<a.length;j++)
       {
           if(i=j)
           j++;
           break;
           if(a[i]==a[j])
           {
               return a[i];
           } 
       }
    }
 
}

console.log(findDuplicates([1,2,3,2,4,5,6,5,7,7]))


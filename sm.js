/*1.Problem:
You are given a string (STR) of length N, consisting of only the lower case English alphabet.
Your task is to remove all the duplicate occurrences of characters in the string.

Input:
abcadeecfb

Output:
abcdef" */

let str="abcadeecfb", newStr=""
    let s = new Set(str);
    for(let i of s){
      newStr+=i
    }
    console.log(newStr)

/*"Problem 2:
 You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

Input: abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1" */

let str1="abcadeecfb"
let mp = new Map();
let count=0;
let key=0
for (let i=0;i< str1.length;i++)
{
  for(let j=0;j< str1.length;j++)
  {
    if(str1[i]==str1[j])
      count++;
  }
  mp.set(str1[i], count)
  count=0;
}
  let k = mp.keys();
for (let i of k){
  console.log(i,"=",mp.get(i[0]));
}
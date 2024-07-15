function isPalindrome(str) {
    const replace = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let l = 0;
    let r = replace.length - 1;

    while (l< r) {
        if (replace[l] !==replace[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
const exampleString = "kamal";
console.log(isPalindrome(exampleString)); 
const example2 = "madam";
console.log(isPalindrome(example2)); 

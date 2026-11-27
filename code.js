function validateCode(code){
  let str=code.toString();
  if(str[0]==="1"||str[0]==="2"||str[0]==="3"){
    return true
  } else {
    return false
  }
};
// Reverses the order of elements in a listc
function reverseList(list) {

    return list.reverse();
}
// Returns the sum of all the multiples of 3 or 5 below the number passed in
function expressionMatter(a, b, c) {
  return Math.max((a+b+c),(a*b*c),(a*b+c),(a*(b+c)),(a+b*c),((a+b)*c));
}
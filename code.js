function validateCode(code){
  let str=code.toString();
  if(str[0]==="1"||str[0]==="2"||str[0]==="3"){
    return true
  } else {
    return false
  }
};

module.exports = function check(str, bracketsConfig) {
  var temp = str; 

  if (str.length % 2 != 0) { 
    return false;
  } 

  for (let i = 0; i < bracketsConfig.length; i++) { 
      for (let j = 0; j < str.length; j++) { 
          if (str[j] == bracketsConfig[i][0] && str[j+1] == bracketsConfig[i][1]) { 
              temp = str.replace(bracketsConfig[i][0]+bracketsConfig[i][1], '') 
          }
      }
  }
  if (temp === str) {
    return temp == '';
  } else {
    return check(temp, bracketsConfig);
  }
}

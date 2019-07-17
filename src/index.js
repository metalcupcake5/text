

const toProperCase = function toProperCase(string) {
    if (typeof string !== "string"){
      throw new TypeError(`Expected a string but got a ${typeof string}`);
    }
    return string.replace(/([^\W_]+[^\s-]*) */g, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

const repeat = function repeat(string) {
  if (typeof string !== "string"){
      throw new TypeError(`Expected a string but got a ${typeof string}`);
    }
    return `You put "${string}"`;
  };

const getWord = function getWord(number, string){
  if(typeof string !== "string"){
    throw new TypeError(`Expected a string but got a ${typeof string}`);
  }
  if(typeof number !== "number"){
    throw new TypeError(`Expected a number but got a ${typeof number}`);
  }
  
  let array = string.split(" ");
  
  if(number > array.length){
    throw new Error("Your number is higher than the word length of your string");
  }
  return array[number-1];
};

module.exports = {
  toProperCase: toProperCase,
  repeat: repeat,
  getWord: getWord
};
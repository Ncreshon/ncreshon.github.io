function objectValues(object){
var cache = [];
  for(var key in object) {
   cache.push(object[key]);
  }
   return cache;
}


function keysToString(object){
   {
   
 var obj = Object.keys(object);
 return obj.join(' ');
 
  }  
}
  
  
 function valuesToString(object) {
 var obj = Object.values(object);
 return obj.join(' ');
  
 
 }

 
 function arrayOrObject(value) {
     if(Array.isArray(value) === true) return 'array';
     if(typeof(value) === 'object') return "object";
 }
  
  
  function capitalizeWord(string){
 string = string.charAt(0).toUpperCase() + string.slice(1)
   return string; 
  }
  
  
  function capitalizeAllWords(string) {
     var words = string.toLowerCase().split(' ');

     for(var i = 0; i < words.length; i++) {
          var letters = words[i].split('');
          letters[0] = letters[0].toUpperCase();
          words[i] = letters.join('');
     }
     return words.join(' ');
  }
  
  
 function welcomeMessage(object){
  var name = object.name; 
  
   return "Welcome" + ' ' + name.charAt(0).toUpperCase() + name.slice(1) + "!";   
  }
  
  
  function profileInfo(object) {
 var name = object.name
 
 var species = object.species
 
  return name.charAt(0).toUpperCase() + name.slice(1) + " is a " + species.charAt(0).toUpperCase() + species.slice(1)
  }
  
  function hasWord(string,word){
      if(string.indexOf(word) !== -1) return true;
      else return false;
  }
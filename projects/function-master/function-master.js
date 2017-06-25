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
  
  
function dedup(array){
    var a = [];
    for (var i = 0; i < array.length; i++ ) {
        var current = array[i];
        if (a.indexOf(current) < 0) a.push(current);
    }
    return a;
}

function addFriend(name,object){
 object.friends.push(name);
 return object;
}


function isFriend(name, object){
 var result = false;

  if(object.hasOwnProperty("friends" )&& object.friends.indexOf(name) > -1 ){
      result = true;
    }
    return result;
  }
  

function nonFriends(name, List){
    var allNonFriends = []
    List.forEach(friendCheck)
    return allNonFriends
     function friendCheck(element, index){
        if(element.name === name) {
        } else if(element.friends[0] === undefined ){
            allNonFriends.push(element.name)
        } else {
            for(var i = 0; i < element.friends.length; i++){
                if(element.friends[i] === name){
                    break;
                } else if(element.friends[i] !== name && 
                   element.friends[i] === element.friends[element.friends.length -1]){
                    allNonFriends.push(element.name)
                }
            }
        }
    } 
} 



function maybeNoises(object){
 var result = "there are no noises";
  
   var newObj = Object.values(object).length;
 
  
  if(newObj < 1){
    return result;
  }
  var obj = Object.values(object.noises);
  
  if(object.hasOwnProperty("noises" ) === true){
    if(obj.length > 0){
      
    
      result = object.noises.join(' ');
      
    }
     }
    return result;
}



























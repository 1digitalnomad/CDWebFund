function nameAge(array) {
    for (var x=0; x<array.length; x++){
        console.log(users[x].name+"-"+users[x].age);
    }
    
    }
    
    var users = [
      {name: "Michael", 
       age:37}, 
      {name: "John", 
       age:30}, 
      {name: "David", 
       age:27}];
    
    nameAge(users);
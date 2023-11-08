// alert("hello!")
// console.log(alert)

//  const arr = ["cat", 'dog', 'lizard' , "pig" , 'camel']

// arr.unshift('shayan')
// console.log(arr)

// arr.splice(1 , 3 , 'shayan','sani')
// console.log(arr)

// mixedArr = arr.slice(1,5)
// console.log(mixedArr)

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// // citiesToCheck = 'true'
// // var flag = 'true'


// var prom = prompt('Enter your City?')
// prom = prom.toUpperCase();
// var numElements = cleanestCities.length
// for(var i = 0 ; i <= cleanestCities.length  ; i++){
//     if (prom === numElements[i]){
        
//         alert('matched');
//     }
//     }
    



// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = []
// for(let i = 0 ; i < firstNames.length ; i++){
//     for(let j = 0 ; j < lastNames.length ; j++){
//         fullNames.push(firstNames[i] + lastNames[j])
//     }
// }
// console.log(fullNames)


//  var cityToCheck = prompt("Enter your city");
//  firstChar = cityToCheck.slice(0,1)
//  firstChar = firstChar.toUpperCase();
//  remainChar = cityToCheck.slice(1)
//  remainChar = remainChar.toLowerCase();
//  var whole = firstChar + remainChar;
//  var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu stan"];
//  for (var i = 0; i <= 4; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities");
//  }
// }
// console.log(whole)
 

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal*6)+ 1;
// var diceNum = Math.floor(improvedNum)
// console.log(diceNum)

const array = [1,2,3,4,5]

array.map(item=>{
    const old_data = JSON.parse(localStorage.getItem("data")) ?? []
    old_data.push(item)
    localStorage.setItem("data",JSON.stringify(old_data))

})


/* To store your JSON file online you can usee http://myjson.com/
 You would get a URL and you can make calls to that URL*/

// You could also use https://jsonlint.com/ to valid the formating of your JSON file.

// The reason why we preffer to use JSON is because is human readable

// JSON - Stans for Java Script Object Noation

/*

	1. Understanding how to build an object and call information inside the object.

*/

// let person = {
//   firstname: "Nour",
//   lastname: "Zein",
//   age: "25"
// };
// console.log(person);

// //document.getElementsByClassName("json-container").innerHTML = person.firstname;
// $(".json-container").append(person.firstname);

/*

	2. creating a data set that contains an array of objects
*/
let myData = {
  people: [
    {
      firstname: "Nour",
      lastname: "Zein",
      age: "25"
    },
    { firstname: "Soonk", lastname: "Peik", age: "33" },
    { firstname: "Karla", lastname: "Garcia", age: "30" }
  ]
};
// console.log(myData.people[0].lastname);

// $(".json-container").append(
//   myData.people[0].firstname + " " + myData.people[1].lastname
// );

/*

	3. Stringify the JSON Data and converting it back to JSON format

*/

// $(".json-container").append("Object");

// let stringpeople = JSON.stringify(myData);
// $(".json-container").append(" " + stringpeople);

// let backToJson = JSON.parse(stringpeople);
// console.log(backToJson);

//you can also do the inverse, parson a string json into a json file
/*


	4. Understanding for loops and pulling data from a json file.

*/

$.getJSON("./data.json", data => {
  console.log(data.people);
  let myUsers = data.people;

  for (let i = 0; i < myUsers.length; i++) {
    $(".json-container").append(
      myUsers[i].firstname + " " + myUsers[i].lastname + "<br>"
    );
  }
});

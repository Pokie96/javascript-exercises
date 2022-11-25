const findTheOldest = function(array) {
    const oldest = array.sort(function(a, b){
        if(!b.yearOfDeath){
            b.yearOfDeath = new Date().getFullYear();
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    })
    return oldest[0];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

  console.log(findTheOldest(people));



// Do not edit below this line
module.exports = findTheOldest;

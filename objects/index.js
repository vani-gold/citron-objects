//===========Question one======================
function instagramPost(author, content, img, views, likes){
    this.author = author;
    this.content = content;
    this.img = img;
    this.views = views;
    this.likes = likes;
}

//===========Question two======================
//instagram object 1
const instagram1 = new instagramPost("vanigold", "I went swiwmming today with my kids", "https://esibe.in/images/category/food_category_728.jpeg", 167, 567);
//instagram object 2
const instagram2 = new instagramPost("vanessa", "I love food like mother lioness", "https://esibe.in/images/category/food_category_728.jpeg", 767, 467);



//===========Question (3A)=====================
// factory function for createPerson()
function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location,
    };
  }
// Musa object from factory function
const person= new createPerson("Musa Dawodu", 19, "Lekki");


//===========Question (3B)=====================
// factory function for createPerson()
function createJambScores(eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    };
  }
// Musa object REPRESENDING musa jamb score
const jambScore= new createJambScores(70, 19, 90, 80);

// Add the object as a property to Musa object you created above in (a) above
function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location,
      createJambScores: {
        eng: 90,
        govt: 85,
        lit: 95,
        crk: 90,
      },
    };
  }


//================Qestion 4===================
// What are the different ways you can clone an object? Give examples for each of them.

// "1) There are 3 ways to clone/copy objects:- they include" 
// "Assign", "spread syntax" & "JSON Parse"

//Example1: making a copy of person object (question2) using the assign keyword
const secondPerson = Object.assign({}, person)
secondPerson.name = "Vanessa";
secondPerson.age = "29";
secondPerson.location = "Cameroon";


//Example2: making a copy of person object (question2) using the spread syntax
const thirdPerson = {...person};

//Example3: making a copy of person object (question2) using the JSON.parse
const fourthPerson = JSON.parse(JSON.stringify(person));
console.log({fourthPerson})


// ===============Question5 ==============================

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
    }
    console.log(presidentialCandidates);
    for(const property in presidentialCandidates){
        console.log(`${presidentialCandidates[property]} is the presidential candidate of ${property}`);
}
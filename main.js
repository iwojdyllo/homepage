/*alert('hello world! Jak tam Twój nastrój dzisiaj dzisiaj?');*/

/*console.log ('tekst tekst tekst');

alert ('jednak hello world!');

console.log ('alert alert');*/

const name = "Izabela";
const name2 = "Klara";
const age = 39;

console.log(name);
console.log(age);

console.log(`Nazywam się ${name} Irena ${name2} i mam dzisiaj ${age} lat.`);

const heading = document.querySelector(".h2--js");

console.log(heading);

// heading.innerHTML=name;

// heading.innerHTML = `Nazywam się ${name} Irena ${name2} i mam dzisiaj ${age} lat.`;

heading.innerHTML = `Złote myśli na dziś wypisała dla Was ${name} Irena ${name2}`;

const notatkiDod = document.querySelector(".article__header--js");
notatkiDod.innerHTML = "Notatki dodatkowe 2";

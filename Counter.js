 /*nsole.log('I will 😍 throughout this Course');
console.log("1kg onions\n liter milk packet\n 1kg onion dosa\ndrop chelli at the school");*/
/*let name = "Akanksha";
let age = 20;
console.log("Akanksha's age is 20");*/

//
/*let title = "Java Script";
let price = 300;
let noOfpages = 200;
let author = "Akanksha";

let data = {
  company: "TechCorp",
  establishment_year: 2020,
  is_active: true,
  ceo: null,
  office_locations: ["Hyderabad", "San Francisco", "Berlin"],
  departments: {
    engineering: {
      head: "Sarah Jenkins",
      team_size: 42,
      remote_friendly: true,
    },
    marketing: {
      head: "David Chen",
      team_size: 15,
      remote_friendly: false,
    },
  },
};
console.log(data.office_locations[1]);*/
/*
console.dir(window);
console.log(window.document);
console.log(window.document.all);
console.log(window.document.all[7]);
console.log(window.document.all[7].src);

console.log(document.all[6].innerHTML)
document.all[6].innerHTML  = "Changed with JS"

window.Document.all[7].src="https://thf.bing.com/th/id/OIP.ci9dVwj5dxCaV7llVVAU1gHaEK?w=331&h=186&c=7&r=0&o=7&cb=thfc1falcon4&dpr=1.3&pid=1.7&rm=3" ;
*/
/*
let h1Elements = document.querySelector("#id");
console.dir(introElements);
introElements.innerHTML = "Changed";
<button onclick="change Image" src="https://thf.bing.com/th/id/OIP.ci9dVwj5dxCaV7llVVAU1gHaEK?w=331&h=186&c=7&r=0&o=7&cb=thfc1falcon4&dpr=1.3&pid=1.7&rm=3" ;>*/
let count = 0;

const countDisplay = document.getElementById("count");

document.getElementById("inc").addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

document.getElementById("dec").addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
});

document.getElementById("Reset").addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
});

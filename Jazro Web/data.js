const nama = "Siddiq Saidin";
let age = 19  ;

let biodata = document.getElementById('biodata')
console.log(biodata);

function generateBiodata() {
    let generation;
    if(age >= 18 && age <= 60) {
    // jika
    generation = "anda remaja ";
    
    }
     else if (age <= 17) {
     generation = "bocah ";
    } 
    else {
    // maka
    generation = "baby "
    }
    return biodata.innerHTML= generation;

}
console.log(nama);
console.log(age);

generateBiodata();

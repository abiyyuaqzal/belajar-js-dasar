console.log('Javascript Hoisting')
console.log('====================')

sapaSiManusia()

function sapaSiManusia() {
    let manusia = {
        nama: "Aqzal",
        pekerjaan: "Programmer"
    }
}

console.log('GLOBAL AND LOCAL SCOPE')
console.log('======================')

let carName = 'Kijang';

function displayCarName() {
    let carName = 'Honda';

    return 'Mobil ini bermerk ' + carName;
}

console.log(displayCarName)
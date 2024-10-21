let maximum = parseInt(prompt('Masukkan nilai maksimal!'));
while (!maximum) {
    maximum = parseInt(prompt('Masukkan nilai maksimal!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Masukkan tebakkan pertama!'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Terlalu tinggi! Tebak lagi:');
    } else {
        guess = prompt('Terlalu rendah! Tebak lagi:');
    }
}

alert(`Selamat, tebakan Anda benar! Anda berhasil dalam ${attempts} percobaan.`);

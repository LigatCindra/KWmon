//Halaman pemilihan karakter
const character = [
    "Assets/Drive/1a.gif", "Assets/Drive/2a.gif", "Assets/Drive/3a.gif"
];

let characterIndex = 0;

const characterImg = document.getElementById("choose-character");

function prevCharacter() {
    characterIndex--;
    if (characterIndex < 0) {
        characterIndex = character.length - 1;
    }
    characterImg.src = character[characterIndex]; 
}

function nextCharacter() {
    characterIndex++;
    if (characterIndex >= character.length) {
        characterIndex = 0;
    }
    characterImg.src = character[characterIndex];
}

//Halaman selanjutnya
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit default
    const namaKarakter = document.getElementById("nameInput").value;
    var pilihanKarakter = characterIndex;
    localStorage.setItem('namaKarakter', namaKarakter); // Menyimpan data nama karakter ke dalam localStorage
    localStorage.setItem('pilihanKarakter', pilihanKarakter); // Menyimpan data pilihan karakter ke dalam localStorage
    window.location.href = 'main1.html'; // Mengarahkan pengguna ke halaman "main1.html"
});



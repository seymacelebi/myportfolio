document.addEventListener('DOMContentLoaded', function() {
    function calculateAge() {
        const birthYear = document.getElementById('birthYear').value;
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        if(birthYear && age >= 0) {
            document.getElementById('result').innerHTML = `Yaşınız: ${age}`;
        } else {
            document.getElementById('result').innerHTML = 'Geçerli bir doğum yılı giriniz.';
        }
    }

    // calculateAge fonksiyonunu buton click eventine bağlayın
    document.querySelector('button').onclick = calculateAge;
});

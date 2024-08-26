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

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    section.forEach( sec=> {
        let top =window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        }
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}
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

let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

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

const skillsData = [
    { skill: 'HTML', level: 90 },
    { skill: 'CSS', level: 85 },
    { skill: 'JavaScript', level: 75 },
    { skill: 'React', level: 70 }
  ];
  
  const professionalSkillsData = [
    { skill: 'Communication', level: 80 },
    { skill: 'Teamwork', level: 85 },
    { skill: 'Problem Solving', level: 75 },
    { skill: 'Creativity', level: 80 }
  ];
  
  const codingSkillsContent = document.querySelectorAll('.skills-column:nth-child(1) .progress');
  const professionalSkillsContent = document.querySelectorAll('.skills-column:nth-child(2) .progress');

  skillsData.forEach((item, index) => {
    codingSkillsContent[index].querySelector('h3 span').textContent = `${item.level}%`;
    codingSkillsContent[index].querySelector('.bar span').style.width = `${item.level}%`;
  });


  professionalSkillsData.forEach((item, index) => {
    professionalSkillsContent[index].querySelector('h3 span').textContent = `${item.level}%`;
    professionalSkillsContent[index].querySelector('.bar span').style.width = `${item.level}%`;
  });
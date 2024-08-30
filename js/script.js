document.addEventListener('DOMContentLoaded', function() {
   
});

let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () =>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

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
// skills part ja kodu

document.addEventListener("DOMContentLoaded", () => {
    // Veriler
    const codingSkills = [
      { name: "HTML", level: "90%" },
      { name: "CSS", level: "85%" },
      { name: "JavaScript", level: "80%" },
      { name: "C#", level: "70%" },
    ];
  
    const professionalSkills = [
      { name: "Communication", level: "85%" },
      { name: "Teamwork", level: "80%" },
      { name: "Problem-solving", level: "75%" },
      { name: "Time Management", level: "80%" },
    ];
  
    // HTML şablonu oluşturma fonksiyonu
    function createSkillHTML(skill) {
      return `
        <div class="progress">
          <h3>${skill.name} <span>${skill.level}</span></h3>
          <div class="bar"><span style="width: ${skill.level};"></span></div>
        </div>
      `;
    }
  
    // Verileri HTML'e ekleme
    function populateSkills(skills, containerId) {
      const container = document.getElementById(containerId);
      container.innerHTML = skills.map(createSkillHTML).join("");
    }
  
    // Verileri doldurma
    populateSkills(codingSkills, "coding-skills-content");
    populateSkills(professionalSkills, "professional-skills-content");
  });
  
  // contact form js code
    document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get the values from the form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Save data to localStorage (optional)
        const formData = {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));

        // Log the form data (for debugging)
        console.log('Form Submitted:', formData);

        // Clear the form after submission
        form.reset();

        // You can also display a success message to the user
        alert("Thank you for your message! We'll get back to you soon.");
    });
});

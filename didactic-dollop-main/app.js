// MOBILE MENU




// CLOSE MOBILE MENU

document
    .querySelectorAll("#navLinks a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navLinks")
                .classList.remove("open");

        });

    });


// NEXT

function nextTestimonial() {

    current =
        (current + 1)
        %
        testimonials.length;

    renderTestimonial();

}


// PREVIOUS

function previousTestimonial() {

    current =
        (current - 1 +
        testimonials.length)
        %
        testimonials.length;

    renderTestimonial();

}


// CONTACT FORM

function submitForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;


    alert(
        "Thank you, " +
        name +
        ". Please contact Thinkficial directly by email or WhatsApp to complete your enquiry."
    );


    event.target.reset();

}


function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const button = document.querySelector('.menu-btn');
  if (!nav) return;
  const isOpen = nav.classList.toggle('open');
  if (button) button.setAttribute('aria-expanded', String(isOpen));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
  const currentFile = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    const page = link.getAttribute('data-page');
    const isCurrent =
      (page === 'home' && currentFile === 'index.html') ||
      (page === 'team' && currentFile === 'team.html') ||
      (page === 'contact' && currentFile === 'contact.html') ||
      (page === 'academy' && currentFile === 'academy.html') ||
      ((page === 'about' || page === 'services') && currentFile === 'about-services.html');
    if (isCurrent) link.setAttribute('aria-current', 'page');
  });
});

// Typing effect
const text = "Hi, I'm Himanshu Kumar";
const typingText = document.getElementById("typing-text");
let idx = 0;

function type() {
  if (idx < text.length) {
    typingText.textContent += text.charAt(idx++);
    setTimeout(type, 80);
  } else {
    setTimeout(() => {
      typingText.textContent = "";
      idx = 0;
      type();
    }, 1500);
  }
}

window.addEventListener('DOMContentLoaded', type);

// Contact form handler
function submitForm(e) {
  e.preventDefault();
  document.getElementById('formMsg').textContent = "✅ Your message was sent!";
}

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = "";
  const scrollY = window.scrollY;
  const bottomReached = window.innerHeight + scrollY >= document.body.scrollHeight - 5;

  sections.forEach((section) => {
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    if (scrollY >= offset && scrollY < offset + height) current = section.id;
    if (bottomReached) current = sections[sections.length - 1].id;
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

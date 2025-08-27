  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent actual form submission

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let hasError = false;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
      document.getElementById("nameError").textContent = "Your name is required to proceed.";
      hasError = true;
    }

    if (email === "") {
      document.getElementById("emailError").textContent = "Please enter your email address.";
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email.";
      hasError = true;
    }

    if (phone === "") {
      document.getElementById("phoneError").textContent = "Phone number is required for contact.";
      hasError = true;
    } else if (!/^\d{10,15}$/.test(phone)) {
      document.getElementById("phoneError").textContent = "Enter a valid phone number.";
      hasError = true;
    }

    if (message === "") {
      document.getElementById("messageError").textContent = "Message field cannot be empty.";
      hasError = true;
    }

    if (!hasError) {
    showCustomToast();
    document.getElementById("contactForm").reset();
    }
  });
  //-Scroll bottom to top hai ye dhaccan->
//   const scrollBtn = document.getElementById("scrollBtn");
// window.onscroll = () => {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     scrollBtn.style.display = "block";
//   } else {
//     scrollBtn.style.display = "none";
//   }
// };

// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }
// function showCustomToast() {
//   const toast = document.getElementById("customSuccessToast");
//   toast.classList.remove("toast-hide");
//   toast.classList.add("toast-show");

//   setTimeout(() => {
//     toast.classList.remove("toast-show");
//     toast.classList.add("toast-hide");
//   }, 5000);
// }
// JS me ye function dalein

function showCustomToast() {
  const toast = document.getElementById("customSuccessToast");
  // Show toast
  toast.classList.remove("toast-hide");
  toast.classList.add("toast-show");

  // 3 seconds ke baad hide kar do
  setTimeout(() => {
    toast.classList.remove("toast-show");
    toast.classList.add("toast-hide");
  }, 3000);
}

// Tere existing form submit handler me ye part hone chahiye:

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // validation code...

  if (!hasError) {
    showCustomToast();   // <-- toast yahan call karna zaruri hai
    this.reset();
  }
});

  const text = "GET IN TOUCH WITH US";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      document.querySelector(".type-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();

const chooseSection = document.getElementById('chooseSection');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      chooseSection.classList.add('show-choose');
    } else {
      chooseSection.classList.remove('show-choose');
    }
  });
}, { threshold: 0.3 });

observer.observe(chooseSection);


  function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () {
  let scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribeForm");
  const input = document.getElementById("emailInput");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = input.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !regex.test(email)) {
      // Shake animation (add a class in CSS)
      input.classList.add("shake");
      errorMsg.textContent = "Please enter a valid email";
      setTimeout(() => input.classList.remove("shake"), 500);
    } else {
      errorMsg.textContent = "";
      alert(`Subscribed successfully: ${email}`);
      input.value = "";
    }
  });
});

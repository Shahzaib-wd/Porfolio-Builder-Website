
    // form submission local-storage
    document.getElementById("portfolioForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const profileFile = document.getElementById("profileInput").files[0];
    const name = document.getElementById("nameInput").value;
    const role = document.getElementById("roleSelect").value;
    const experience = document.getElementById("experience").value;
    const email = document.getElementById("emailInput").value.trim();
    const phoneNumber = document.getElementById("phoneInput").value.trim();




    const reader = new FileReader();
    reader.onload = function () {
      localStorage.setItem("userName", name.toUpperCase());
      localStorage.setItem("role", role);
      localStorage.setItem("profileImage", reader.result);
      localStorage.setItem("experience", experience);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPhone", phoneNumber);






    


      // Redirect to preview page
      window.location.href = "preview.html";
    };

    if (profileFile) {
      reader.readAsDataURL(profileFile);
    } else {
      alert("Please upload a profile image.");
    }
  });

    console.log("Experience from localStorage:", localStorage.getItem("experience"));

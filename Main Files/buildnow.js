  document.getElementById("portfolioForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const profileFile = document.getElementById("profileInput").files[0];
    const name = document.getElementById("nameInput").value;
    const bio = document.getElementById("bioInput").value;
    const experience = document.getElementById("experience").value;

    
    const reader = new FileReader();
    reader.onload = function () {
      localStorage.setItem("userName", name);
      localStorage.setItem("userBio", bio);
      localStorage.setItem("profileImage", reader.result);
      localStorage.setItem("experience", experience);

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

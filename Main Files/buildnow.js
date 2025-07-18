  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    // Get form values
    const name = document.getElementById("name").value;
    const bio = document.getElementById("bio").value;
    const theme = document.querySelector('input[name="theme"]:checked').value;
    const profile = document.getElementById("profile").files[0];

    // Read profile image as Base64
    const reader = new FileReader();
    reader.onload = function () {
      localStorage.setItem("profileImage", reader.result);
      localStorage.setItem("userName", name);
      localStorage.setItem("userBio", bio);
      localStorage.setItem("userTheme", theme);

      // Redirect to preview page
      window.location.href = "preview.html";
    };

    if (profile) {
      reader.readAsDataURL(profile);
    } else {
      alert("Please select a profile picture.");
    }
  });


















  

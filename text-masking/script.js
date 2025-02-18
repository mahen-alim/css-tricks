document.querySelectorAll(".face").forEach((face) => {
  face.addEventListener("mouseover", function () {
    document.querySelector(".cube").style.animationPlayState = "paused";
    const labelImg = document.getElementById("image-label");

    // Map text to image filenames
    const imageMap = {
      apple: "apple.png",
      banana: "banana.jpg",
      grape: "grape.jpg",
      lemon: "lemon.jpg",
    };

    const faceText = this.innerText.toLowerCase();
    labelImg.src = `img/${imageMap[faceText]}`; // Adjust the path accordingly
    labelImg.style.display = "block";
    labelImg.style.top = `${this.offsetTop - 60}px`;
  });

  face.addEventListener("mouseout", function () {
    document.querySelector(".cube").style.animationPlayState = "running";
    const labelImg = document.getElementById("image-label");
    labelImg.style.display = "none";
  });
});

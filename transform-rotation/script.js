let rotationAngle = 0;
const centerCircle = document.getElementById("center-circle");
const orbitingCircles = document.querySelectorAll(".orbiting-circle");

// Fungsi untuk memperbarui posisi bulatan kecil dan teks di center circle
function updateCircles() {
  orbitingCircles.forEach((circle, index) => {
    const angle = 60 * index + rotationAngle;
    circle.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateX(120px)`;
  });

  // Normalisasi rotationAngle ke rentang 0-360 derajat
  rotationAngle = ((rotationAngle % 360) + 360) % 360;

  // Tentukan bulatan yang berada di posisi atas (0 derajat)
  const activeIndex = Math.floor((360 - rotationAngle) / 60) % 6;
  const activeCircle = orbitingCircles[activeIndex];
  const activeText = activeCircle.getAttribute("data-text");

  // Perbarui teks di center circle
  centerCircle.textContent = activeText;
}

// Event listener untuk tombol putar kiri
document.getElementById("rotate-left").addEventListener("click", () => {
  rotationAngle -= 60; // Putar 60 derajat ke kiri
  updateCircles();
});

// Event listener untuk tombol putar kanan
document.getElementById("rotate-right").addEventListener("click", () => {
  rotationAngle += 60; // Putar 60 derajat ke kanan
  updateCircles();
});

// Inisialisasi awal
updateCircles();

// Array cu imaginile din folderul ../MEDIA
const images: string[] = [
    "../MEDIA/fox1.jpg",
    "../MEDIA/fox2.jpg",
    "../MEDIA/fox3.jpg",
    "../MEDIA/fox4.jpg"
];

// Obtinem elementul principal din DOM
const mainImage = document.getElementById("carousel-image") as HTMLImageElement;

// Verificam daca elementul exista
if (!mainImage) throw new Error("No image");
let currentIndex = 0;
// Functie care schimba imaginea mare
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex]!;
}

// Slider automat la 3 secunde
setInterval(showNextImage, 3000);
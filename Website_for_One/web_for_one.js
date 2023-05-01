// Define an array of messages
const messages = ["I Love You", "Nothing to prove", "Nothing to hide", "Nothing to lose", "okay, pure", "try to dream",
  "Mom says hello", "How are you?", "I miss you", "Listen", "You'll be beautiful",  "It'll be beautiful",  "Keep the faith",
  "Four words against the world: I love you _____",  "Four words against the world: I love you _____",  "Four words against the world: I love you _____",
  "Four words against the world: I love you _____",   "Four words against the world: I love you _____",   "Four words against the world: I love you _____", ,,,,,,,,,
   "It's morning", "Find a way to appreciate this time", "HOPE 3x",
  "Father, forgive them", "Hide if you must", "We all fail", "We'll all fail", "Find another way", "/Imagine",
  "Make your own world", "Father, forgive them", "Live slowly", "TIME X3" ,"Patience, patience, patience", "There's enough time",
  "There will be enough trees", "Go on a walk", "Woe to that man who does not put his trust in life", "Everything starts as a home",
  "My dear, you need rest", "Be still", "You'll find your way","Don't change anything","Amplify", "Episteme Episteme Episteme"]; 

const fonts = ["gt_pressuraregular", "gt_cinetypeitalic", "sans-serif","barytonregular", "trabis_regularregular", "georgia_prolight", "gt_alpinaregular"];

const fontPaths = ['./fonts/gt-pressura-regular-webfont.woff','./fonts/trabis-regular-webfont.woff', './fonts/barytonregular.otf', './fonts/gt_cinetypeitalic.ttf',
 'sans-serif', './fonts/hershey-noailnoailleshelpmeLt.ttf', './fonts/jjannonbook_italic.ttf', './Fonts/georgiapro-light-webfont.woff2', './Fonts/gtalpina-regular-webfont.woff2'];

const messageContainer = document.getElementById("message-container");
const messageElement = document.getElementById("message");
let messageIndex = 0;

function displayNextMessage() {
  messageIndex = (messageIndex + 1) % messages.length;
  messageElement.textContent = messages[messageIndex];
  messageElement.style.opacity = 1;
  messageElement.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  messageElement.style.fontFamily = `url('${fontPaths[Math.floor(Math.random() * fontPaths.length)]}')`;
  setTimeout(hideMessage, 300);
}

function hideMessage() {
  messageElement.style.opacity = 0;
  setTimeout(displayNextMessage, 100);
}

displayNextMessage();




// Image Grid

// const imageSources = ["Website_for_One/Images/image1.jpg", "Website_for_One/Images/image2.jpg", "file:///Users/theohaggi/Documents/GitHub/Website_for_One/Images/image3.jpg", "Website_for_One/Images/image4.jpg", "file:///Users/theohaggi/Documents/GitHub/Website_for_One/Images/image5.jpg",]; // Define an array of image sources
// const imageGrid = document.getElementById("image-grid"); // Get the image grid element
// let images = []; // Initialize the array of images

// function createImage(x, y) {
//   const image = document.createElement("img"); // Create a new image element
//   image.src = imageSources[Math.floor(Math.random() * imageSources.length)]; // Set the image source to a random image from the imageSources array
//   image.style.top = y + "px"; // Set the top position of the image
//   image.style.left = x + "px"; // Set the left position of the image
//   image.addEventListener("mousedown", startDragging); // Add a mousedown event listener to the image
//   return image;
// }

// function startDragging(event) {
//   const image = event.target; // Get the image element
//   const offsetX = event.clientX - image.offsetLeft; // Calculate the offset between the mouse pointer and the left edge of the image
//   const offsetY = event.clientY - image.offsetTop; // Calculate the offset between the mouse pointer and the top edge of the image

//   function moveImage(event) {
//     image.style.left = event.clientX - offsetX + "px"; // Move the image horizontally based on the mouse position
//     image.style.top = event.clientY - offsetY + "px"; // Move the image vertically based on the mouse position
//   }

//   function stopDragging() {
//     document.removeEventListener("mousemove", moveImage); // Remove the mousemove event listener
//     document.removeEventListener("mouseup", stopDragging); // Remove the mouseup event listener
//   }

//   document.addEventListener("mousemove", moveImage); // Add a mousemove event listener to the document
//   document.addEventListener("mouseup", stopDragging); // Add a mouseup event listener to the document
// }

// function createImages() {
//   images.forEach(image => image.remove()); // Remove any existing images
//   images = []; // Clear the array of images
//   for (let x = 0; x <= window.innerWidth; x += 100) { // Loop through horizontal positions
//     for (let y = 0; y <= window.innerHeight; y += 100) { // Loop through vertical positions
//       const image = createImage(x, y); // Create a new image element
//       images.push(image); // Add the image to the array of images
//       imageGrid.appendChild(image); // Append the image to the image grid element
//     }
//   }
// }

// function changeImages() {
//   images.forEach(image => {
//     image.src = imageSources[Math.floor(Math.random() * imageSources.length)]; // Set the image source to a random image from the imageSources array
//     image.style.fontFamily = ['Arial', 'Verdana', 'Helvetica', 'Georgia', 'Times New Roman'][Math.floor(Math.random() * 5)]; // Set the font-family to a random font from the array
//   });
//   setTimeout(changeImages, Math.floor(Math.random() * 5000) + 2000); // Call the changeImages function after a random time between 2 and 7 seconds
// }

// createImages(); // Call the createImages function to create the initial grid of images
// changeImages(); // Call the changeImages function to start changing the images

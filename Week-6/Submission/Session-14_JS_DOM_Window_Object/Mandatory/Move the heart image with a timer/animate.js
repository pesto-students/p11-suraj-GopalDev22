let timerId = null;

window.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", startAnimation);
});

function startAnimation(e) {
  // Get mouse coordinates
  let clickX = e.clientX;
  let clickY = e.clientY;

  // TODO: Modify the code below
  if (timerId !== null) {
    clearInterval(timerId); // Stop the timer if it's already running
  }
  timerId = setInterval(function () {
    moveImage(clickX, clickY);
  }, 10);
}

function moveImage(x, y) {
  const img = document.querySelector("img");

  // Determine location of image
  let imgX = parseInt(img.style.left);
  let imgY = parseInt(img.style.top);

  // Determine (x,y) coordinates that center the image
  // around the clicked (x, y) coords
  const centerX = Math.round(x - img.width / 2);
  const centerY = Math.round(y - img.height / 2);
  console.log(x, y);
  console.log(imgX, imgY);
  // TODO: Add code here
  if (imgX === centerX && imgY === centerY) {
    clearInterval(timerId); // Stop the timer if the heart has reached the destination
    timerId = null; // Reset the timer ID
    return;
  }

  if (imgX < centerX) {
    // Move 1 pixel in both directions toward the click
    imgX++;
  } else if (imgX > centerX) {
    imgX--;
  }

  if (imgY < centerY) {
    imgY++;
  } else if (imgY > centerY) {
    imgY--;
  }

  img.style.left = imgX + "px";
  img.style.top = imgY + "px";
}

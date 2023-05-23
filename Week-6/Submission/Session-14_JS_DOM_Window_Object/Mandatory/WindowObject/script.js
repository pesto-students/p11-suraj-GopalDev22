const displayWindowProperties = function () {
  const userAgent = window.navigator.userAgent;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  //localstorage
  window.localStorage.setItem("userAgent", userAgent);
  const storedData = window.localStorage.getItem("userAgent");

  //sessionstorage
  window.sessionStorage.setItem("screenWidth", screenWidth);
  window.sessionStorage.setItem("screenHeight", screenHeight);
  const SessionData = window.sessionStorage.getItem(
    "screenWidth",
    "screenHeight"
  );
  //userAgent
  console.log(`UserAgent: ${storedData}`);

  //screen width and screen height
  console.log(`Screen width: ${SessionData} and Screen Height: ${SessionData}`);
  //current location and path location
  console.log(
    `current location: ${window.location.href} and path address: ${window.location.pathname}`
  );
};
//onpage load above function will be executed.

document.addEventListener("DOMContentLoaded", displayWindowProperties);

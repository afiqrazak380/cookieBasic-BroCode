// cookies = a small text file stored in the computer
//         = used to remember informatoin about the users
//         = saved in name-value pairs

// console.log(navigator.cookieEnabled) // to check if cookies is enable
// document.cookie = "firstName=Patrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"; // to add a cookie
// document.cookie = "lastName=TheStar; expires=Sun, 1 January 2000 12:00:00 UTC; path=/"; // can add more cookie
// console.log(document.cookie)

//== Create a Cookie using Function ==


// setCookie("email", "Sponge@gmail.com", 365)
// setCookie("firstName", "Patrick", 365)
// setCookie("lastName", "Star", 365)
// deleteCookie("email")
// deleteCookie("firstName")
// deleteCookie("FirstName")

// console.log(getCookie("lastName"));

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () =>{
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
})

cookieBtn.addEventListener("click", () => {
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
})

function setCookie(name, value, daysToLive){ // create cookie
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000); // set the date by adding current date and the daysToLive in miliseconds
  let expires = "expires=" + date.toUTCString() // the expires refer to date in UTC time format
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name){ // delete cookie
  setCookie(name, null, null)
}

function getCookie(name){ // get cookie value by the name
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  // console.log(cArray)
  let result = null;

  cArray.forEach(element => {
    if(element.indexOf(name) == 0){
      result = element.substring(name.length + 1)
    }
  });
  
  return result;
}
// deleteCookie("firstName")
console.log(document.cookie)


function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
 
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    
    img.setAttribute("src", "./assets/eu3.jpeg")
    img.setAttribute("alt", "image-profile-white")
  } else {
    
    img.setAttribute("src", "./assets/eu2.jpg")
    img.setAttribute("alt", "image-profile-black")
  }
}

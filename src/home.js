import RestaurantImage from "./Assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg"

export default function loadHomePage() {
    const contentContainer = document.querySelector('.content')

    const homeDiv = document.createElement('div')
    homeDiv.classList.add('home')


    const img = document.createElement('img')
    img.alt = "Restaurant Image"
    img.src = RestaurantImage

    const displayMessage = document.createElement('h1')
    displayMessage.textContent = "Welcome to Paul's Cafe"

    const description = document.createElement('p')
    description.textContent = "Placeholder for Restaurant Description"

    homeDiv.appendChild(displayMessage)
    homeDiv.appendChild(img)
    homeDiv.appendChild(description)
    
    contentContainer.appendChild(homeDiv)


}
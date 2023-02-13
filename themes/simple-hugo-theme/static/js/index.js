const hamburgerCheckbox = document.getElementById('hamburger-checkbox')
const mainContent = document.getElementById('main-content')

hamburgerCheckbox.addEventListener('change', () => {
    if (hamburgerCheckbox.checked) {
        document.body.style.overflowY = 'hidden'
        // mainContent.style.display = 'none'
        return
    }
    document.body.style.overflowY = 'auto'
    // mainContent.style.display = 'block'
})

const leftButton = document.getElementById('card-btn-left')
const rightButton = document.getElementById('card-btn-right')

const cardsList = document.getElementById('cards-list')
const cards = document.getElementsByClassName('home-card')

leftButton.addEventListener('click', () => {
    const tmp = cards[0]
    cardsList.removeChild(cards[0])
    cardsList.appendChild(tmp)
})

rightButton.addEventListener('click', () => {
    const tmp = cards[cards.length - 1]
    cardsList.removeChild(cards[cards.length - 1])
    cardsList.insertBefore(tmp, cardsList.firstChild)
})

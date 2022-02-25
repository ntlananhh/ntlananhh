var request = new XMLHttpRequest()
// function getData() {
//     const response = await fetch('https://ghibliapi.herokuapp.com/films')
//     const data = await response.json()
//   }
    request.open('GET', 'https://gorest.co.in/public/v2/users', true)
    request.onload = function () {
        // Json-> Javascript object
        var user = JSON.parse(this.response)
        try{
            if (200 == request.status) {
                const card = document.createElement('div')
                card.setAttribute('class', 'card')

                const h1 = document.createElement('h1')
                h1.textContent = user.title

                const p = document.createElement('p')
                user.name = user.name

                container.appendChild(card)
                card.appendChild(h1)
                card.appendChild(p)
            }
        }
        catch(error){
            console.log(error)
        }
    }

    request.send()
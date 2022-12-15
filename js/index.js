let url = 'http://localhost:3000/films'
let listHolder = document.getElementById('films')
document.addEventListener('DOMContentLoaded', ()=>{
   
    document.getElementsByClassName('film item')[0].remove()
    fetchMovies(url)
})


function fetchMovies(url){
    fetch(url)
    .then(response => response.json())
    .then(movies => {
        movies.forEach(movie => {
            displayMovie(movie)
        });
    })
}

function displayMovie(movie){
   
    let li = document.createElement('li')
    li.style.cursor="pointer"
    li.textContent= (movie.title).toUpperCase()
    listHolder.appendChild(li)
    addClickEvent()
}
function addClickEvent(){
    let children=listHolder.children


    for(let i=0; i<children.length; i++){
        let child=children[i]
       

        child.addEventListener('click',() => {
            fetch(`${url}/${i+1}`)

            .then(res => res.json())
            .then(movie => {
                document.getElementById('buy-ticket').textContent = 'Buy Ticket'
                setUpMovieDetails(movie)
            })

        })
    }
}
function setUpMovieDetails(childMovie){
    let preview = document.getElementById('poster')
    preview.src = childMovie.poster;

    let movieTitle = document.querySelector('#title');
    movieTitle.textContent = childMovie.title;
    let movieTime = document.querySelector('#runtime');
    movieTime.textContent = `${childMovie.runtime} minutes`;
    let movieDescription = document.querySelector('#film-info');
    movieDescription.textContent = childMovie.description;
    let showTime = document.querySelector('#showtime')
    showTime.textContent = childMovie.showtime;
    let tickets  = document.querySelector('#ticket-num')
    tickets.textContent = childMovie.capacity -childMovie.tickets_sold;
}
let btn = document.getElementById('buy-ticket')

        btn.addEventListener('click', function(e){
            let remTickets = document.querySelector('#ticket-num').textContent
            e.preventDefault()
            if(remTickets > 0){
                document.querySelector('#ticket-num').textContent  = remTickets-1
                
            }
            else if(parseInt(remTickets, 10)===0){
                btn.textContent = 'Sold Out'
            }
    })
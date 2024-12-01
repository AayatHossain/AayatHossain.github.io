const searchForm1 = document.querySelector('#searchForm')
const list1 = document.querySelector("#list")

searchForm1.addEventListener('submit', async function(e){
    e.preventDefault();
    if (list1.children.length !== 0) {
        list1.firstElementChild.remove();
    }

    const searchTerm = searchForm1.elements.query.value;
    const results = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.dir(results)
    showMovie(results.data)
})

const showMovie = (results) => {
    const newList = document.createElement("ul")
    for(let result of results){
       if(result.show.image){
        const listItem = document.createElement("li")
        const image = document.createElement('IMG')

        const title = document.createElement('p')
        title.innerText = `Title: ${result.show.name}`

        const lang = document.createElement('p')
        lang.innerText = `Language: ${result.show.language}`

        const rate = document.createElement('p')
        rate.innerText = `Rating: ${result.show.rating.average}`

        
        const b1 = document.createElement('button')
        b1.textContent = "Watch Now"
        b1.addEventListener("click", ()=>{
            window.open(result.show.url)
        })





        image.src = result.show.image.medium
        listItem.appendChild(image)
        listItem.appendChild(title)
        listItem.appendChild(lang)
        listItem.appendChild(rate)
        listItem.appendChild(b1)

        listItem.setAttribute("class", "card")
        title.setAttribute("class", "detailsTittle")
        lang.setAttribute("class", "details")
        rate.setAttribute("class", "details")
        b1.setAttribute("class", "btn")
        newList.appendChild(listItem)
       } 
    }
    newList.setAttribute("id","newList")
    list1.appendChild(newList)
}



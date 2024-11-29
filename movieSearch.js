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
        image.src = result.show.image.medium
        listItem.appendChild(image)
        newList.appendChild(listItem)
       } 
    }
    newList.setAttribute("id","newList")
    list1.appendChild(newList)
}



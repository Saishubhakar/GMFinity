let form = document.getElementById("Form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let movies = form.FavMovies.value
    let useremail = form.email.value
    

    try {
        addMovies(useremail, movies)
        alert("Movie has been added")
        
    } catch (error) {
        alert("Please enter valid credentials please")
    }

})

const addMovies = async(useremail, movies)=>{

    const movie = await fetch("http://localhost:5000/api/v1/addFavorites", {
        method:"PUT",

        headers:{
            "Content-Type":"application/json",
        },

        body:JSON.stringify({
            email: useremail,
            FavMovies: movies
        }),


    }) 
}
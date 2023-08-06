let button = document.getElementById("getMovies");

button.addEventListener("click", (e) => {
  let email = prompt("Enter your email");

  try {
    getMovies(email);
  } catch (error) {
    alert("Some error has occured");
  }
});

let getMovies = async (useremail) => {
  const movies = await fetch(
    "http://localhost:5000/api/v1/getMovies?" + useremail,
    {
      method: "GET",
    }
  );

  console.log(movies);
};

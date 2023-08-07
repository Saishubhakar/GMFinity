let Form = document.getElementById("Form")

Form.addEventListener("submit", (e)=>{

    e.preventDefault();


    const email = Form.email.value
    const password = Form.password.value

    try {
        loginUser(email, password)
        alert("Logged in")

    } catch (error) {
        alert("Please enter valid credentials please")
    }
})


let loginUser = async (useremail , userpassword)=>{
    let user = await fetch("http://localhost:5000/api/v1/login", {

        method:"POST",

        headers:{
            "Content-Type":"application/json",
        },

        body:JSON.stringify({
            email:useremail,
            password:userpassword,
        }),

        
    });
    
}

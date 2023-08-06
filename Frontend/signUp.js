let Form = document.getElementById("Form")

Form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const name = Form.name.value
    const email = Form.email.value
    const password = Form.password.value


    try {
        createUser(name, email, password)
        alert("User has been created")

        if(alert){
            window.location.href = "http://127.0.0.1:5500/Frontend/index.htm"
        }
        
    } catch (error) {
        alert("Please enter valid credentials please")
    }
    
})


let createUser = async (username, useremail , userpassword)=>{
    let user = await fetch("http://localhost:5000/api/v1/register", {

        method:"POST",

        headers:{
            "Content-Type":"application/json",
        },

        body:JSON.stringify({
            name:username,
            email:useremail,
            password:userpassword,
        }),

        
    });
    

}
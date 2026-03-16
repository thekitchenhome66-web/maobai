async function signup(){

const email = document.getElementById("email").value
const password = document.getElementById("password").value

const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password
})

if(error){
    alert(error.message)
}else{
    alert("Account created!")
    window.location = "pages/dashboard/dashboard.html"
}

}

async function login(){

const email = document.getElementById("email").value
const password = document.getElementById("password").value

const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password
})

if(error){
    alert(error.message)
}else{
    window.location = "pages/dashboard/dashboard.html"
}

  }

function submitForm(e) {

    //prevent the normal submission of the form
    e.preventDefault();

    let nameValue = document.getElementById('name');
    let emailValue = document.getElementById('email');
    let passwordValue = document.getElementById('password');
    let phoneNumberValue = document.getElementById('phone');
    let zipCodeValue = document.getElementById('zip-code');
    let aboutValue = document.getElementById('about');

    console.log("Name: " + nameValue.value);
    console.log("Email Address: " + emailValue.value);
    console.log("Password: " + passwordValue.value);
    console.log("Phone Number: " + phoneNumberValue.value);
    console.log("Zip Code: " + zipCodeValue.value);
    console.log("About: " + aboutValue.value);

    let inputs = document.querySelectorAll("input.form-input");
    inputs.forEach((item) => {
        item.value = "";
    })
    document.querySelector("textarea").value = "";
    alert("Details Submitted!");
}






// Dark mode toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
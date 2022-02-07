const form = document.querySelector("form");
statusText = form.querySelector(".button-area span");

form.onsubmit = (e)=> {
    e.preventDefault();

    statusText.style.display = 'block';

    let xhttpr = new XMLHttpRequest();
    xhttpr.open("POST", "message.php", true);
    xhttpr.onload = () => {
        if(xhttpr.readyState === 4 && xhttpr.status === 200) {
            let response = xhttpr.response;
            if(response.indexOf("Email and message fields cannot be empty") !== -1 || response.indexOf("Invalid email address") || response.indexOf("Could not send email. Please try again")) {
                statusText.style.color = "red";
            } else {
                form.reset();
                setTimeout(() => {
                    statusText.style.display = "none";
                }, 3000);
            }
            statusText.innerHTML = response;
        }
    }

    let formData = new FormData(form);
    xhttpr.send(formData);
}
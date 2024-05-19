var input = document.getElementById('passwordInput');

input.addEventListener('input', function() {
    this.value;
        
    const porcent = {
        0: 0,
        1: 25,
        2: 50,
        3: 75,
        4: 100
    }
    
    const feedback = {
        0: "Muito fraca",
        1: "Fraca",
        2: "Boa",
        3: "Forte",
        4: "Muito forte"
    }
    
    let points = 0;
    if(/[a-z]/.test(this.value)) points++;
    if(/[A-Z]/.test(this.value)) points++;
    if(/[0-9]/.test(this.value)) points++;
    if(/[^a-zA-Z0-9]/.test(this.value)) points++;
    
    switch(points) {
        case 1:
            document.getElementById("passwordStrengthLevel").style.width = porcent[points] + "%";
            document.getElementById("passwordStrengthLevel").style.backgroundColor = "red";
            document.getElementById("feedbackPassword").innerText = feedback[points];
            break;
        case 2:
            document.getElementById("passwordStrengthLevel").style.width = porcent[points] + "%";
            document.getElementById("passwordStrengthLevel").style.backgroundColor = "orange";
            document.getElementById("feedbackPassword").innerText = feedback[points];
            break;
        case 3:
            document.getElementById("passwordStrengthLevel").style.width = porcent[points] + "%";
            document.getElementById("passwordStrengthLevel").style.backgroundColor = "yellow";
            document.getElementById("feedbackPassword").innerText = feedback[points];
            break;
        case 4:
            document.getElementById("passwordStrengthLevel").style.width = porcent[points] + "%";
            document.getElementById("passwordStrengthLevel").style.backgroundColor = "green";
            document.getElementById("feedbackPassword").innerText = feedback[points];
            break;
        default:
            document.getElementById("passwordStrengthLevel").style.width = porcent[points] + "%";
            document.getElementById("passwordStrengthLevel").style.backgroundColor = "gray";
            document.getElementById("feedbackPassword").innerText = feedback[0];
    }
})


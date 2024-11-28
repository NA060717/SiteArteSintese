
document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let subject = document.getElementById('subject').value.trim();
        let message = document.getElementById('message').value.trim();

        let isValid = true;

       
        if (name === '') {
            alert('Por favor, insira seu nome.');
            isValid = false;
        }


        if (email === '') {
            alert('Por favor, insira seu email.');
            isValid = false;
        } else if (!validateEmail(email)) {
            alert('Por favor, insira um email válido.');
            isValid = false;
        }


        if (subject === '') {
            alert('Por favor, insira o assunto.');
            isValid = false;
        }

   
        if (message === '') {
            alert('Por favor, insira sua mensagem.');
            isValid = false;
        }

       
        if (isValid) {
            alert('Sua mensagem foi enviada com sucesso!');
            form.reset(); 
        }
    });


    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});




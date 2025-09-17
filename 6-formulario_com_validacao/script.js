const form = document.querySelector('form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const assunto = document.querySelector('#assunto');
const mensagem = document.querySelector('#mensagem');
const errorMessages = document.querySelector('.error-messages');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
});

function setError(input,errorMessage){
    const errorMessageElement = input.nextElementSibling;
    errorMessageElement.textContent = errorMessage;
    input.parentElement.classList.add('error');
}

function validateInputs(){
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const assuntoValue = assunto.value.trim();
    const mensagemValue = mensagem.value.trim();

    if(nomeValue === ""){
        setError(nome,"Nome não pode estar em branco");
    }

    if(emailValue === ""){
        setError(nome,"Email não pode estar em branco");
    }

    if(assuntoValue === ""){
        setError(nome,"Nome não pode estar em branco");
    }

    if(mensagemValue === ""){
        setError(nome,"Nome não pode estar em branco");
    }
}
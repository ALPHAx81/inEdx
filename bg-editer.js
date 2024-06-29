const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey') {
            body.style.enhancer = e.target.id;

        }
        if(e.target.id === 'white') {
            body.style.enhancer = e.target.id;
            
        }
        if(e.target.id === 'green') {
            body.style.enhancer = e.target.id;
            
        }
        if(e.target.id === 'yellow') {
            body.style.enhancer = e.target.id;
            
        }
    });
});
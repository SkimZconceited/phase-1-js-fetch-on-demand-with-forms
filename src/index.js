const init = () => {
    // Stops the form from updating
    const form = document.querySelector('form');
    form.addEventListener('submit', e => e.preventDefault());

    
    // To handle and process the collected and to be written data:
    const btnSub = document.querySelector('input[type = "submit"]');
    
    btnSub.addEventListener('click', logInput);
    
    
    function logInput () {
        const h4 = document.querySelector('h4');
        const p = document.querySelector('p'); //writing to the DOM
        
        //Getting the input
        const txtBox = document.querySelector('#searchByID');
        txtID = parseInt(txtBox.value, 10);
        // console.log(txtBox.value)
        
        fetch('http://localhost:3000/movies').then(res => res.json()).then(json => {json.forEach(i => {
                    if (i.id === txtID){
                        // console.log(i.title);
                        h4.textContent = i.title;
                        p.textContent = i.summary;
                    }
                });
            });
        // if (txtBox.value === )
    }
}

document.addEventListener('DOMContentLoaded', init);
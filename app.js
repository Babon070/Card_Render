const wrapper = document.querySelector('.wrapper');
const url = 'https://fakestoreapi.com/products';
const delIcon = document.getElementById('icon')




function fetchCreate() {
    fetch(url)
        .then(response => response.json())
        .then(data =>
            data.forEach(el => {
                const divEl = document.createElement('div')
                divEl.className = 'div_el';
                divEl.innerHTML = `
                <img class='img' src=${el.image} alt="">
                <div class='card_desc'>
                   <p class="text_desc"><span>Price:</span> ${el.price}</p>
                   <p class="text_desc"><span>DisCount:<span/>${el.rating.rate}</p>
                   <p class="text_desc"><span>Desc:</span>${el.category}</p>
                    <p class="text_desc"><span>Name:</span>${el.title}</p>
                   <a> <i data-post-id="${el.id}" id="icon" class="bi bi-trash"></i></a>
                </div>
                `
                wrapper.appendChild(divEl)
            }))  
        .catch((err) => console.error(err))
}
fetchCreate()

wrapper.addEventListener('click', (event) => {
     if(event.target.classList.contains("bi-trash")){
        const postId = event.target.getAttribute("data-post-id");
        console.log('Card ochirildi');
        if(postId){
            fetch(`https://fakestoreapi.com/products/${postId}`,{
                method: 'DELETE'
            }).then(response => {
                console.log(response);
            })
        }
       
     }

})
























































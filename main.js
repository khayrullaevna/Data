function findElement(element,parent = document){
    return document.querySelector(element)
}


const elCards = findElement(".cards");

function renderProducts(array,parent){
    parent.innerHTML = ""
    
    array.forEach((element) => {
    
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.style.width = "18rem";
    
        newCard.innerHTML = `
            <img class="card-img-top" src="${element.image}" alt="${element.title}" />
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <p class="card-text">${element.category}</p>
            <p class="card-text">$${element.price}</p>
            <p class="card-text">Rating: ${element.rating.rate}</p>        
            <button data-id="${element.id}"  data-bs-toggle="modal" data-bs-target="#exampleModal"  class="btn btn-primary edit-btn">Edit</button>
            <button class="btn btn-danger" data-id="${element.id}">Delete </button>
        </div>
        `
        parent.appendChild(newCard)
    })
}

renderProducts(products,elCards);

elCards.addEventListener("click",(evt) => {
   

    if(evt.target.className.includes("edit-btn")){

        const id = Number(evt.target.dataset.id)
        
        const elInputTitle = findElement("#input-title");
        const elInputImage = findElement("#input-image");
        const elInputPrice = findElement("#input-price");
        const elUpdateImage = findElement("#update-img");
        const elUpdateBtn = findElement("#update-btn");
        
        products.forEach((product) =>{
          if(product.id === id){
          
            elInputTitle.value = product.title;
            elInputImage.value = product.image;
            elInputPrice.value = product.price;
            elUpdateImage.src = product.image
            
            elUpdateBtn.addEventListener("click", ()=> {
                
                product.title = elInputTitle.value;
                product.image = elInputImage.value;
                product.price = elInputPrice.value;
                renderProducts(products,elCards)

            

            })

            
          }
        })
    }
    

})
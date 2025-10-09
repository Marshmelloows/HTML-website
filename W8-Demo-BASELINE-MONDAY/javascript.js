//Normally data is stored in DB, when app sends a request to DB, it return an array of data as below:
//Link: https://www.imdb.com/chart/top/
let items = [
	{id: 1, title: "The Shawshank Redemption", year: 1994, price: 7.50, category: 1, image_url: "Images/ItemImage.jpg", description: "When an innocent male banker is sent to prison accused of murdering his wife, he does everything that he can over the years to break free and escape from prison. While on the inside, he develops a friendship with a fellow inmate that could last for years."}, 
    {id: 2, title: "The Godfather", year: 1972, price: 7.75, category: 2, image_url: "Images/ItemImage.jpg", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."}, 
    {id: 3, title: "The Dark Knight", year: 2008, price: 8.95, category: 3, image_url: "Images/ItemImage.jpg", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness."}, 
    {id: 4, title: "12 Angry Men", year: 1957, price: 5.95, category: 2, image_url: "Images/ItemImage.jpg", description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict."}, 
    {id: 5, title: "Schindler\'s List", year: 1993, price: 8.50, category: 1, image_url: "Images/ItemImage.jpg", description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."}, 
    {id: 6, title: "The Lord of the Rings: The Return of the King", year: 2003, price: 8.95, category: 4, image_url: "Images/ItemImage.jpg", description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."}, 
    {id: 7, title: "Pulp Fiction", year: 1994, price: 6.95, category: 4, image_url: "Images/ItemImage.jpg", description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."}, 
    {id: 8, title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, price: 10.95, category: 4, image_url: "Images/ItemImage.jpg", description: "Praesent vulputate, ligula ac vehicula consectetur, dui lectus feugiat tellus, rutrum hendrerit tellus mi nec lorem. Praesent vitae dapibus lectus."}, 
    {id: 9, title: "The Good, the Bad and the Ugly", year: 1966, price: 7.50, category: 3, image_url: "Images/ItemImage.jpg", description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."}, 
    {id: 10, title: "Forrest Gump", year: 1994, price: 11.95, category: 3, image_url: "Images/ItemImage.jpg", description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart."},
    {id: 11, title: "Fight Club", year: 1999, price: 12.95, category: 3, image_url: "Images/ItemImage.jpg", description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."},
    {id: 12, title: "Inception", year: 2010, price: 7.95, category: 4, image_url: "Images/ItemImage.jpg", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."},
    {id: 13, title: "The Matrix", year: 1999, price: 9.95, category: 4, image_url: "Images/ItemImage.jpg", description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."},
    {id: 14, title: "Goodfellas", year: 1990, price: 5.95, category: 2, image_url: "Images/ItemImage.jpg", description: "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito."},
    {id: 15, title: "One Flew Over the Cuckoo\'s Nest", year: 1975, price: 8.95, category: 1, image_url: "Images/ItemImage.jpg", description: "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse."},
    {id: 16, title: "Interstellar", year: 2014, price: 11.95, category: 4, image_url: "Images/ItemImage.jpg", description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."}
];

//Normally data is stored in DB, when app sends a request to DB, it return this array of data
let categories = [ 
	{id: 1, category: "Tragedy"},
	{id: 2, category: "Crime"},
	{id: 3, category: "Action"},
	{id: 4, category: "Fantasy"}
];
    

//Function to display list of items
function displayItems(itemList){
    let allItems = "";
    for(let i=0; i < itemList.length; i++){
        let item =  `
            <div class="item-card" >
                <h4> ${itemList[i].title} </h4>                
                <p> Year: ${itemList[i].year} </p>
                <p> Category: ${categories.find(item => item.id == itemList[i].category).category } </p>
                <h3> Price: $${itemList[i].price.toFixed(2)} </h3>
                <img src="${itemList[i].image_url}" alt="${itemList[i].title}" style="height:150px;"
                    onclick="openItemDetailPage(${itemList[i].id})">
                <buttion id="addToCartBtn" onclick="addItemToCart(${itemList[i].id})"> Add to Cart </buttion>
                <p> Description: ${itemList[i].description} </p>
            </div>
        `;        
        allItems += item;
    }
    return allItems;
}

//Call and excecute the function to display items and inject into the HTML element          
document.getElementById("itemList").innerHTML = displayItems(items);

//Function to respond to the click event on the item-card element
function openItemDetailPage(selectedItemID) {
    //Pass the selectedItemID to the ItemDetail page
    //Use local storage - a browser memory to store this selectedItemID
    localStorage.setItem("danielItemID", selectedItemID);
    //Open the ItemDetail page
    window.open("item-detail.html", "_self");
}



//SEARCH 
//Filter feature: https://www.w3schools.com/jsref/jsref_filter.asp
function displayFilteredItems() {
    //Get keyword entered by user
    let keyword = document.getElementById("searchInput").value.toLowerCase();
    //Get filtered items
    let filteredItems = items.filter(item => {
        return item.title.toLowerCase().includes(keyword);
    });
    //Display the filtered items
    document.getElementById("itemList").innerHTML = displayItems(filteredItems);
}

//---------------------------------------------
//SORTING
//By price
function sortByPrice() {
    //Sort all items by prices
    let sortedItems = items.sort((item1, item2) => (item1.price < item2.price) ? 1 : -1);
    //Display the sorted items
    document.getElementById("itemList").innerHTML = displayItems(sortedItems);
}

//By year
function sortByYear() {
    //Sort all items by years
    let sortedItems = items.sort((item1, item2) => (item1.year < item2.year) ? 1 : -1);
    //Display the sorted items
    document.getElementById("itemList").innerHTML = displayItems(sortedItems);
}

//By title
function sortByTitle() {
    //Sort all items by title
    let sortedItems = items.sort((item1, item2) => (item1.title > item2.title) ? 1 : -1);
    //Display the sorted items
    document.getElementById("itemList").innerHTML = displayItems(sortedItems);
}

//Sort By category
function sortedByCategory() {
    //Get the selected option by user
    let selectedCategoryID = document.getElementById("categoryDropDown").value;

    //Filter the items that the category is equal to the above selected option
    //Display this filtered items
    if (selectedCategoryID == 0) {
        //Display all items, no filtering
        document.getElementById("itemList").innerHTML = displayItems(items);
    } else {
        let filteredList = items.filter( item => {return item.category == selectedCategoryID} );
        document.getElementById("itemList").innerHTML = displayItems(filteredList);
    }

}





//Wright javascript code to add to cart function
function addItemToCart(selectedItemID) {
    //Check if there is a cart in the local storage
    let selectedItem = items.find(item => item.id == selectedItemID);
    //get the cart data from the local storage
    let cart = JSON.parse(localStorage.getItem("danielCart"));
    //if cart is null, create a new cart array
    if (cart == null) {
        cart = [];
    }
    //Check if the selected item is already in the cart
    let itemInCart = cart.find(item => item.id == selectedItemID); 
    if (itemInCart) {
        //If item is already in the cart, increase the quantity by 1
        itemInCart.quantity += 1;
    } else {
        //If item is not in the cart, add the item to the cart with quantity 1
        selectedItem.quantity = 1;
        cart.push(selectedItem);
    }
    //Save the cart back to the local storage
    localStorage.setItem("danielCart", JSON.stringify(cart));
    alert(`${selectedItem.title} has been added to the cart.`);
    //Update the cart item count in the header
    updateCartItemCount();
}


    alert("item added to cart.");
}
//----------------------------------------------
//Cart
//Function to update the cart item count in the header
function updateCartItemCount() {
    let cart = JSON.parse(localStorage.getItem("danielCart"));
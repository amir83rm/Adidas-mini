document.querySelectorAll(".product-card button").forEach(button =>{
button.addEventListener('click',()=>{
      alert("added to cart!!");
});
});

const productCarousel = document. querySelector(".product-carousel");

let carousel = 0;

Document.getElementById("next-btn").addEventListener("click",()=>  {
      currentIndex = (currentIndex +1) % productCarousel.children.length;
      updateCarousel();
});

Document.getElementById("prev-btn").addEventListener("click" ,() =>{
      currentIndex= (currentIndex -1 + productCarousel.children.length)%productCarousel.children.length;
      updateCarousel();
});




function updatupdateCarousel(){
   const scrollAmount = currentIndex * productCarousel.clientWidth;
   productCarousel.scrollTo({
      left:scrollAmount,
      behavior: "smooth"
   }
   
   )
}


document.addEventListener('DOMContentLoaded', () => {
const productContainer = document.getElementById('product-container');
   
fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
   .then(response => response.json())
.then(data => {
 data.forEach(photo => {
   const productCard = createProductCard(photo);
   productContainer.appendChild(productCard);
});
   })
   .catch(error => console.error('Error fetching data:', error));
   
function createProductCard(photo) {
   const card = document.createElement('div');
card.classList.add('product-card');
   const img = document.createElement('img');
   img.src = photo.url;
   img.alt = photo.title;
   
   const title = document.createElement('h3');
   title.textContent = photo.title;
   
   const description = document.createElement('p');
   description.textContent = 'Placeholder description. Customize as needed.';
   
const button = document.createElement('button');
button.textContent = 'Add to Cart';
   
   card.appendChild(img);
card.appendChild(title);
card.appendChild(description);
card.appendChild(button);
   
return card;   }
   });







   // main.js

document.addEventListener('DOMContentLoaded', function() {
   const menuItems = document.querySelectorAll('nav a');

   menuItems.forEach(item => {
         item.addEventListener('click', function() {
           // Remove 'active' class from all menu items
            menuItems.forEach(item => item.classList.remove('active'));

           // Add 'active' class to the clicked menu item
            this.classList.add('active');
         });

       // Check if the current page matches the menu item
         const currentPage = window.location.pathname.split('/').pop();
         const href = item.getAttribute('href').split('/').pop();

         if (currentPage === href) {
         item.classList.add('active');
         }
   });
});










document.addEventListener('DOMContentLoaded', function () {
   const pages = [
   { name: 'Home', link: 'index.html' },
   { name: 'Product', link: 'product.html' },
   { name: 'About Us', link: 'about.html' },
{ name: 'Contact Us', link: 'contact.html' },
   { name: 'Blog', link: 'blog.html' }
   
   ];
   
   const menu = document.getElementById('menu');
   
   pages.forEach(page => {
   const menuItem = document.createElement('a');
   menuItem.href = page.link;
   menuItem.textContent = page.name;
   
   menuItem.addEventListener('click', function () {
   
   menu.childNodes.forEach(item => item.classList.remove('active'));
   
   
   this.classList.add('active');
   });
   

   const currentPage = window.location.pathname.split('/').pop();
   if (currentPage === page.link.split('/').pop()) {
menuItem.classList.add('active');
   }
   
   menu.appendChild(menuItem);
   });
   });
const container = document.getElementById('container');
container.style.display = 'flex';
container.style.justifyContent = 'space-around';
container.style.alignItems = 'center';
container.style.height = '100vh';


const box1 = document.getElementById('box1');
box1.style.width = '200px';
box1.style.height = '200px';
box1.style.background = 'linear-gradient(to top, #0cebeb, #20e3b2, #29ffc6)';
box1.style.borderRadius = '50%';
box1.style.border = '2px solid black';

const box2 = document.getElementById('box2');
box2.innerHTML = `<ul>
                      <li> mikush 🙋‍♀️</li>
                      <li> web developer 💻 </li>
                      <li> Html, Css, Java script 😎</li>
                      <li> personal trainer 😄</li>
                      <li> dancer lover 😍 </li>
                  </ul>`;
box2.style.width = '18rem';              
box2.style.height = '250px';         
box2.style.display = 'flex';           
box2.style.alignItems = 'center';  
box2.style.justifyContent = 'center'; 
box2.style.borderRadius = '8px'; 

box2.style.backgroundColor = 'rgb(80, 80, 235';                  
const forSale = {

            title: 'Racing car',
            price: 200_000,
            hand: 2,
            km: 100_403,
            year: 2014,
            img: 'https://cdn.pixabay.com/photo/2013/07/12/13/21/sports-car-146873_960_720.png'
        
};                  

const box3 = document.getElementById('box3');
box3.innerHTML = `<div class="card" style="width: 20rem; border: 5px solid black;">
  <img src= ${forSale.img} class="card-img-top" alt="race car">
  <div class="card-body" style="background-color: rgb(80, 80, 235, 0.85);">
    <h3 class="card-title">${forSale.title}🚩</h3>
    <li class="card-text">price: ${forSale.price}₪</li>
    <li class="card-text">hand: ${forSale.hand}</li>
    <li class="card-text">km: ${forSale.km}</li>
    <li class="card-text">year: ` + forSale.year + `</li>
  </div>
</div>`


const box4 = document.getElementById('box4');
box4.className = 'bg-danger';
box4.style.height = '200px';
box4.style.width = '200px';
box4.style.borderRadius = '8px';
box4.style.background = 'bg-danger';
console.log(box4);

//const body = document.querySelector('body');
document.body.style.fontFamily = 'Comic Sans Ms';
document.body.style.fontSize = '21px';
document.body.style.background = 'linear-gradient(to right, #283c86, #45a247)';
const appliances = [
  {
    imageUrl: `img1.jpg`,
    name: `XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray`,
    price: '₦ 150,000'
  },

  {
    imageUrl: `img1.jpg`,
    name: `XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray`,
    price: '₦ 150,000'
  },

  {
    imageUrl: `img1.jpg`,
    name: `XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray`,
    price: '₦ 150,000'
  },

  {
    imageUrl: `img1.jpg`,
    name: `XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray`,
    price: '₦ 150,000'
  },

  {
    imageUrl: `img1.jpg`,
    name: `XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray`,
    price: '₦ 150,000'
  },







  // Add more products as needed...
];

const appliancess = document.getElementById('appliancediv');


appliances.forEach(appliance => {
  const appliancesdiv = document.createElement('div');
  appliancesdiv.className = 'product';


  const addButton = document.createElement('button');
  const Buttondiv = document.createElement('div');
  Buttondiv.className = 'butbutton'
  


  addButton.type = 'button';
  addButton.className = 'botton';
  addButton.name = 'action';
  addButton.value = 'in';
  addButton.textContent = 'Add To Cart';


  Buttondiv.appendChild(addButton);

const imgdiv = document.createElement('div');
imgdiv.className = 'productimg'


const productImg  = document.createElement('img');
productImg.src = appliance.imageUrl;
  productImg.alt = 'Product Image';
  productImg.loading = 'lazy';

  imgdiv.appendChild(productImg);

const productName = document.createElement('div');
productName.className = 'productname';



const productPrice = document.createElement('div');
productPrice.className = 'productprice';


productName.textContent = appliance.name;
  productPrice.textContent = appliance.price;

  appliancesdiv.appendChild(imgdiv);
  appliancesdiv.appendChild(productName);
  appliancesdiv.appendChild(productPrice);
  appliancesdiv.appendChild(Buttondiv);
  

  appliancess.appendChild(appliancesdiv);
});



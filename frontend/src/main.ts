import "./style.css";

const app = document.getElementById('app') as HTMLDivElement

if (app) {
    app.innerHTML = 
    `
    <nav class="w-screen h-14 relative top-0 z-50 bg-gray-500 flex items-center"><a class="text-lg font-extrabold pl-10" href="index.html">Pizzu</a></nav>
    <div class="flex justify-center items-center"><h1 class="text-white text-7xl mt-5">Pizzu Olasz pizzéria</h1></div>
    <div class="flex flex-row justify-center items-center gap-80 h-[50vh] m-20">
      <div class="flex items-center flex-col">
      <img src="/public/pizza1.png" alt="" class="w-96 animate-fade-left animate-duration-[2000ms]">
      <p class="text-white">Paradiso</p>
      </div>
      <div class="flex items-center flex-col">
      <img src="/public/pizza5.png" alt="" class="w-96 animate-fade animate-duration-1000">
      <p class="text-white">Négyévszak</p>
      </div>
      <div class="flex items-center flex-col">
      <img src="/public/pizza6.png" alt="" class="w-96 animate-fade-right animate-duration-[2000ms]">
      <p class="text-white hover:">Húsimádó</p>
      </div>
    </div>
    <div class="flex justify-center"><button id="order-button"  class="text-white font-bold border-solid border-2 border-gray-500 p-5 rounded-full transition duration-300 ease-in-out hover:scale-125">RENDELÉS</button></div>
    `

    const orderButton = document.getElementById('order-button') as HTMLButtonElement

    orderButton.addEventListener('click', () => {
      app.innerHTML = 
      `
      <nav class="w-screen h-14 relative top-0 z-50 bg-gray-500 flex items-center"><a class="text-lg font-extrabold pl-10" href="index.html">Pizzu</a></nav>
      <div class="flex justify-center items-center"><h1 class="text-white text-7xl mt-5">Rendelés</h1></div>
      <div class="flex justify-center flex-wrap">
        <div class="flex items-center flex-col">
          <img src="/public/pizza1.png" alt="" class="w-96">
          <p class="text-white font-bold">PARADISO</p>
          <div class="dropdown dropdown-hover mb-3">
            <label tabindex="0" class="btn m-1">Összetevők</label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
              <li><a>Paradicsomszósz</a></li>
              <li><a>Mozzarella</a></li>
              <li><a>Szalámi</a></li>
              <li><a>Paprika</a></li>
              <li><a>Fekete oliva</a></li>
              <li><a>Paradicsom</a></li>
              <li><a>Tört fokhagyma</a></li>
            </ul>
          </div>
          <input type="number" name="" id="paradiso" placeholder="Adja meg a darabszámot" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2" min="0">
          <button id="cart1"><img src="/public/kosar.png" alt="" class="w-10 rounded-lg m-5"></button>
        </div>
        <div class="flex items-center flex-col">
          <img src="/public/pizza2.png" alt="" class="w-96">
          <p class="text-white font-bold">SZALÁMIS</p>
          <div class="dropdown dropdown-hover mb-3">
            <label tabindex="0" class="btn m-1">Összetevők</label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
              <li><a>Paradicsomszósz</a></li>
              <li><a>Mozzarella</a></li>
              <li><a>Szalámi</a></li>
              <li><a>Paprika</a></li>
            </ul>
          </div>
          <input type="number" name="" id="szalamis" placeholder="Adja meg a darabszámot" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2" min="0">
          <button id="cart2"><img src="/public/kosar.png" alt="" class="w-10 rounded-lg m-5"></button>
        </div>
        <div class="flex items-center flex-col">
          <img src="/public/pizza3.png" alt="" class="w-96">
          <p class="text-white font-bold">PARADICSOMOS</p>
          <div class="dropdown dropdown-hover mb-3">
            <label tabindex="0" class="btn m-1">Összetevők</label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
              <li><a>Paradicsomszósz</a></li>
              <li><a>Mozzarella</a></li>
              <li><a>Paradicsom</a></li>
              <li><a>Tört fokhagyma</a></li>
            </ul>
          </div>
          <input type="number" name="" id="paradicsomos" placeholder="Adja meg a darabszámot" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2" min="0">
          <button id="cart3"><img src="/public/kosar.png" alt="" class="w-10 rounded-lg m-5"></button>
        </div>
        <div class="flex items-center flex-col">
          <img src="/public/pizza4.png" alt="" class="w-96">
          <p class="text-white font-bold">QUATTRO FORMAGGI</p>
          <div class="dropdown dropdown-hover mb-3">
            <label tabindex="0" class="btn m-1">Összetevők</label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
              <li><a>Paradicsomszósz</a></li>
              <li><a>Mozzarella</a></li>
              <li><a>Gorgonzola</a></li>
              <li><a>Parmezán</a></li>
              <li><a>Fontina</a></li>
            </ul>
          </div>
          <input type="number" name="" id="formaggi" placeholder="Adja meg a darabszámot" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2" min="0">
          <button id="cart4"><img src="/public/kosar.png" alt="" class="w-10 rounded-lg m-5"></button>
        </div>
        <div class="flex items-center flex-col">
          <img src="/public/pizza5.png" alt="" class="w-96">
          <p class="text-white font-bold">QUATTRO STAGIONI</p>
          <div class="dropdown dropdown-hover mb-3">
            <label tabindex="0" class="btn m-1">Összetevők</label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
              <li><a>Paradicsomszósz</a></li>
              <li><a>Mozzarella</a></li>
              <li><a>Szalámi</a></li>
              <li><a>Gomba</a></li>
              <li><a>Paradicsom</a></li>
              <li><a>Kapribogyó</a></li>
              <li><a>Tört fokhagyma</a></li>
            </ul>
          </div>
          <input type="number" name="" id="stagioni" placeholder="Adja meg a darabszámot" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2" min="0">
          <button id="cart5"><img src="/public/kosar.png" alt="" class="w-10 rounded-lg m-5"></button>
        </div>
        <div class="flex items-center flex-col">
          <img src="/public/pizza6.png" alt="" class="w-96">
          <p class="text-white font-bold">HÚSIMÁDÓ</p>
          <div class="dropdown dropdown-hover mb-3">
            <label tabindex="0" class="btn m-1">Összetevők</label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
              <li><a>Paradicsomszósz</a></li>
              <li><a>Mozzarella</a></li>
              <li><a>Szalámi</a></li>
              <li><a>Sonka</a></li>
              <li><a>Kolbász</a></li>
              <li><a>Tört fokhagyma</a></li>
            </ul>
          </div>
          <input type="number" name="" id="husimado" placeholder="Adja meg a darabszámot" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2" min="0">
          <button id="cart6"><img src="/public/kosar.png" alt="" class="w-10 rounded-lg m-5"></button>
        </div>
        <div class="flex items-center flex-col">
          <img src="/public/pizza7.png" alt="" class="w-96">
          <p class="text-white font-bold">MARGHERITA</p>
          <div class="dropdown dropdown-hover mb-3">
            <label tabindex="0" class="btn m-1">Összetevők</label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
              <li><a>Paradicsomszósz</a></li>
              <li><a>Mozzarella</a></li>
              <li><a>Friss bazsalikom</a></li>
            </ul>
          </div>
          <input type="number" name="" id="margherita" placeholder="Adja meg a darabszámot" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2" min="0">
          <button id="cart7"><img src="/public/kosar.png" alt="" class="w-10 rounded-lg m-5"></button>
        </div>
      </div>
      <div class="flex flex-wrap gap-10 mt-36 justify-center">
          <input type="text" name="" id="name" placeholder="Név" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2">
          <input type="text" name="" id="city" placeholder="Város" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2">
          <input type="text" name="" id="street" placeholder="Utca" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2">
          <input type="text" name="" id="house-number" placeholder="Házszám" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2">
          <input type="text" name="" id="zip-code" placeholder="Irányítószám" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2">
          <input type="number" name="" id="tel-number" placeholder="Telefonszám" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2">
          <input type="email" name="" id="email" placeholder="E-mail" class="text-white font-bold bg-gray-800 border-white border-2 rounded-md p-2">
      </div>
      <div id="result"></div>
      <div class="flex justify-center">
      <button class="text-white font-bold border-solid border-2 border-gray-500 p-5 rounded-full transition duration-300 ease-in-out hover:scale-125 mb-20 mt-5" id="summary">Rendelés véglegesítése</button>
      </div>
      `

      const paradiso = document.getElementById('paradiso') as HTMLInputElement;
      const cart1 = document.getElementById('cart1') as HTMLButtonElement;
      const szalamis = document.getElementById('szalamis') as HTMLInputElement;
      const cart2 = document.getElementById('cart2') as HTMLButtonElement;
      const paradicsomos = document.getElementById('paradicsomos') as HTMLInputElement;
      const cart3 = document.getElementById('cart3') as HTMLButtonElement;
      const formaggi = document.getElementById('formaggi') as HTMLInputElement;
      const cart4 = document.getElementById('cart4') as HTMLButtonElement;
      const stagioni = document.getElementById('stagioni') as HTMLInputElement;
      const cart5 = document.getElementById('cart5') as HTMLButtonElement;
      const husimado = document.getElementById('husimado') as HTMLInputElement;
      const cart6 = document.getElementById('cart6') as HTMLButtonElement;
      const margherita = document.getElementById('margherita') as HTMLInputElement;
      const cart7 = document.getElementById('cart7') as HTMLButtonElement;
      
      type CartItem = {
        input: HTMLInputElement;
        cartButton: HTMLButtonElement;
        quantity: number;
      };
      
      type Address = {
        name: string;
        city: string;
        street: string;
        houseNumber: string;
        zipCode: string;
        telNumber: string;
        email: string;
      };
      
      type OrderData = {
        cartItems: CartItem[];
        address: Address;
        orderTime: string;
      };
      
      const cartItems: CartItem[] = [
        { input: paradiso, cartButton: cart1, quantity: 0 },
        { input: szalamis, cartButton: cart2, quantity: 0 },
        { input: paradicsomos, cartButton: cart3, quantity: 0 },
        { input: formaggi, cartButton: cart4, quantity: 0 },
        { input: stagioni, cartButton: cart5, quantity: 0 },
        { input: husimado, cartButton: cart6, quantity: 0 },
        { input: margherita, cartButton: cart7, quantity: 0 },
      ];
      
      function addToCart(item: CartItem) {
        item.cartButton.addEventListener('click', () => {
          const quantity = parseInt(item.input.value, 10);
          item.quantity += quantity;
      
          const resultParagraph = document.getElementById('result') as HTMLParagraphElement;
          resultParagraph.innerHTML += `${quantity} darab ${item.input.id} hozzáadva a kosárhoz. Összesen: ${item.quantity} db`;
      
          const cartItemInOrderData = orderData.cartItems.find(cartItem => cartItem.input === item.input);
          if (cartItemInOrderData) {
            cartItemInOrderData.quantity = item.quantity;
          }
        });
      }
      cartItems.forEach(addToCart);
      
      const nameInput = document.getElementById('name') as HTMLInputElement;
      const cityInput = document.getElementById('city') as HTMLInputElement;
      const streetInput = document.getElementById('street') as HTMLInputElement;
      const houseNumberInput = document.getElementById('house-number') as HTMLInputElement;
      const zipCodeInput = document.getElementById('zip-code') as HTMLInputElement;
      const telNumberInput = document.getElementById('tel-number') as HTMLInputElement;
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const summaryButton = document.getElementById('summary') as HTMLButtonElement;
      
      const orderData: OrderData = {
        cartItems: cartItems.map(item => ({ input: item.input, cartButton: item.cartButton, quantity: item.quantity })),
        address: {
          name: "",
          city: "",
          street: "",
          houseNumber: "",
          zipCode: "",
          telNumber: "",
          email: "",
        },
        orderTime: "",
      };
      
      summaryButton.addEventListener('click', () => {
        const address: Address = {
          name: nameInput.value,
          city: cityInput.value,
          street: streetInput.value,
          houseNumber: houseNumberInput.value,
          zipCode: zipCodeInput.value,
          telNumber: telNumberInput.value,
          email: emailInput.value,
        };
      
        orderData.address = address;
        orderData.orderTime = new Date().toISOString();
        console.log(orderData);

/*         const response=await http.post("http://localhost:3333/api/order",JSON.stringify(orderDetails),{
    headers:{
      "Content-Type":"application/json"
    }
  } ) */
      });
    })
}
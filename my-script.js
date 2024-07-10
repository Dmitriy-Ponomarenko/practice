'use sctrict';

const button = document.getElementById('heroButton');

button.addEventListener('click', function() {

    alert("The result was written in your console");

    function priceCounter(x, y, z) {

        return x * y + z;
    }

    const orderCount = 2;
    const orderPrice = 800;
    const deliveryPrice = 50;
    const finalPrice = priceCounter (orderCount, orderPrice, deliveryPrice);
    
    const command = `12.745 You ${orderCount} orders will cost you ${finalPrice} credits`;
    console.log(command);
    
    // const float = Number.parseFloat(command)
    // console.log(command.length);
    // console.log(command[command.length - 1]);
    // console.log(float);
    // console.log(Math.round(float));
});
"use sctrict";

const button = document.getElementById("heroButton");

button.addEventListener("click", function () {
  // const a = true;
  // while (a == true) {
  //     alert("The result was written in your console");
  // }

  function priceCounter(x, y, z) {
    return x * y + z;
  }

  var balance = 3000;
  const orderCount = 2;
  const orderPrice = 800;
  const deliveryPrice = 50;
  const finalPrice = priceCounter(orderCount, orderPrice, deliveryPrice);

  const command = `12.745 You ${orderCount} orders will cost you ${finalPrice} credits`;
  console.log(command.trim());


  
  // const user = "Kate";
  // switch (user) {
  //   case "Kate":
  //     console.log("Hello " + user + " !");
  //     break;
  //   case "Alice":
  //     console.log("Hello " + user + " !");
  //     break;
  //   default:
  //     console.log("Hello " + "User" + " !");
  // }


  // const message =
  //   balance >= finalPrice
  //     ? `12.745 You ${orderCount} orders will cost you ${finalPrice} credits`
  //     : "You don't have enough money";

  //     console.log(message);

  // if(balance >= finalPrice) {
  //   const command = `12.745 You ${orderCount} orders will cost you ${finalPrice} credits`;
  //   console.log(command);
  // } else {
  //   console.log("You don't have enough money");
  // }

  // const float = Number.parseFloat(command)
  // console.log(command.length);
  // console.log(command[command.length - 1]);
  // console.log(float);
  // console.log(Math.round(float));
});

"use sctrict";

const button = document.getElementById("heroButton");

button.addEventListener("click", () => {
  // const a = true;
  // while (a == true) {
  //     alert("The result was written in your console");
  // }

  // function priceCounter(x, y, z) {
  //   return x * y + z;
  // }

  // const balance = 3000;
  // let orderCount = 2;
  // let orderPrice = 800;
  // const deliveryPrice = 50;

  // const order = {
  //   balance,
  //   orderCount,
  //   orderPrice,
  //   deliveryPrice,
  // };

  // const finalPrice = priceCounter(order.orderCount, order.orderPrice, order.deliveryPrice);

  // const command = `12.745 You ${order.orderCount} orders will cost you ${finalPrice} credits`;
  // console.log(command.trim());

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

  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    rooms: ["room-1", "room-2"],
    price: 2153,
  };

  apartment.rating = 5;
  apartment.prop = "tototo";

  const apartment2 = structuredClone(apartment);

  apartment2.rating = 3;
  apartment2.price = 1530;

  console.log(apartment);
  console.log(apartment2);

  // const keys = Object.keys(apartment);
  // const values = Object.values(apartment);
  // const prop = "rooms";

  // console.log(keys);
  // console.log(values);
  // console.log(apartment[prop]);
});
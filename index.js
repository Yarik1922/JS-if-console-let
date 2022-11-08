function orderPizza() {
  let order = "Your order is pizza with : ";
  let spicey = "";
  let onion = confirm("Do you want onions?");
  order += onion ? "onions," : "";
  let pepper = confirm("Do you want pepper?");
  if (pepper) {
    spicey = prompt("How spicey? small medium or high?");
  }
  order += pepper && spicey ? ` ${spicey} pepper,` : "";
  let mushrooms = confirm("Do you want mushrooms?");
  order += mushrooms ? "mushrooms," : "";
  let cheese = confirm("Do you want cheese?");
  order += cheese ? "cheese," : "";
  let olives = confirm("Do you want olives?");
  order += olives ? "olives" : "";
  alert(order);
}
function orderHamburger() {
  let order = "Your order is hamburger with : ";
  let patties = "";
  let onion = confirm("Do you want onions?");
  order += onion ? "onions," : "";
  let tomato = confirm("Do you want tomato?");
  order += tomato ? "tomato," : "";
  let piccles = confirm("Do you want piccles?");
  order += piccles ? "piccles," : "";
  let ketchup = confirm("Do you want ketchup?");
  order += ketchup ? "ketchup," : "";
  let mayonnaise = confirm("Do you want mayonnaise?");
  order += mayonnaise ? "mayonnaise," : "";
  let patty = confirm("Do you want an extra patty?");
  if (patty) {
    patties = prompt("how many extra paties do you want");
  }
  order += patty && patties ? `${patties} extra pattie` : "";
  alert(order);
}


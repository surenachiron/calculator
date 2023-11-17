const movie = document.getElementById("movie");
let price = document.getElementById("price");
let numberrr = document.getElementById("Number")
const seats = document.getElementsByClassName('seat')
let lengthll = 0;


function moh() {
    for (let o of seats){
        o.addEventListener("click", function () {
            if (o.style.background === "red"){
                o.style.background = "#444451";
                lengthll -= 1;
                numberrr.innerHTML = " " + lengthll;
                let movieval = movie.value;
                let pricefinish = lengthll * movieval;
                price.innerHTML = pricefinish;
            } else {
                o.style.background = "red";
                lengthll += 1;
                numberrr.innerHTML = " " + lengthll;
                let movieval = movie.value;
                let pricefinish = lengthll * movieval;
                price.innerHTML = pricefinish;
            }
        })
    }
}
moh();


movie.addEventListener("change",moviefun)
function moviefun() {
    let movievalue = movie.value;
    switch (movievalue) {
        case "10":
            if (lengthll === 0){
                price.innerHTML = 10;
            } else {
                price.innerHTML = movievalue * lengthll;
            }
            break;
        case "50":
            if (lengthll === 0){
                price.innerHTML = 50;
            } else {
                price.innerHTML = movievalue * lengthll;
            }
            break;
        case "33":
            if (lengthll === 0){
                price.innerHTML = 33;
            } else {
                price.innerHTML = movievalue * lengthll;
            }
            break;
        case "200":
            if (lengthll === 0){
                price.innerHTML = 200;
            } else {
                price.innerHTML = movievalue * lengthll;
            }
            break;
    }
}
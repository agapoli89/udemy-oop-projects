const prod1 = {
    name: "tofu", 
    price: 3.99, 
    weight: 250,
}

const prod2 = {
    name: "pasta", 
    price:2.85, 
    weight: 500,
}

const create = () => {console.log(`Produkt numer jeden to: ${prod1.name}. 
Produkt numer dwa to: ${prod2.name}. 
Produkty kosztują razem: ${prod1.price + prod2.price} pln.
Produkty ważą razem: ${prod1.weight + prod2.weight} gr.`);
};

create();

const currentUser = {
    name: "Aga", 
    surname: "Poli", 
    email: "agapoli@gmail.com", 
    www: "przewodniczka.wroclaw.pl", 
    userType: 'premium',
}

const show = () => {
    console.log('imię:' + currentUser.name);
    console.log('nazwisko:' + currentUser.surname);
    console.log('email:' + currentUser.email);
    console.log('www:' + currentUser.www);
    console.log('typ użytkownika:' + currentUser.userType);
}

show();

const book = {
    title: "Pan Tadeusz", 
    author: "Adam Mickiewicz", 
    pageCount: 300, 
    publisher: "Ossolineum",

    showDetails() {
        for (const [key, val] of Object.entries(this)) {
            if (key === "showDetails") {
                return;
            }
            console.log(key, val); 
        }
    }
}

book.showDetails();

const spaceShip = {
    name: "Enterprise",
    currentLocation: "Earth",
    flyDistance: 0,

    flyTo(place, distance) {
        this.currentLocation = place,
        this.flyDistance += distance;        
    },

    showInfo() {
        console.log(`
        Informacje o statku:
        ${this.name}
        Statek ....
        doleciał do miejsca .....
        Statek przeleciał już całkowity dystans ....`); 
    }
}

spaceShip.flyTo("Mars", 10);
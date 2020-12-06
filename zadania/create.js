// part 1

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

//part 2
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

//part 3
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

// part 4
const spaceShip = {
    name: "Enterprise",
    currentLocation: "Earth",
    flyDistance: 0,

    flyTo(place, distance) {
        this.currentLocation = place,
        this.flyDistance += distance;        
    },

    showInfo() {
        const {name, currentLocation, flyDistance} = this;
        console.log(`
        Informacje o statku: ${name}
        ---------------------------------
        Statek ${name}
        doleciał do miejsca ${currentLocation}
        Statek przeleciał już całkowity dystans ${flyDistance}`); 
    },

    meetClingon() {
        const {name, currentLocation} = this;
        let winNumbers = 0;
        for (let i=0; i<100; i++) {
            const random = Math.random();
            if (random > 0.5) {
                winNumbers++;
            }
        }
        if (winNumbers >= 50) {
            console.log(`Statek ${name} będący w okolicy ${currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`);
        } else {
            console.warn(`Statek ${name} będący w okolicy ${currentLocation} został pokonany przez Klingonów`)
        }
    },
}
spaceShip.flyTo("Mars", 10);
spaceShip.showInfo();
spaceShip.meetClingon();

// part 5
const book2 = {
    users: [],
    addUser(name, age, phone) {
        //this.users = [{name, age, phone}];
        this.users.push({
            name: name, 
            age: age, 
            phone: phone});
    },
    showUsers() {
        console.log(this.users[0].name);
        
        console.log("Wszyscy użytkownicy w książce:");
        this.users.forEach(user => console.log(user.name));
        
    },
    findByName(name) {
        const findedName = this.users.find(el => el.name === name);
        if (findedName === undefined) {
            console.log('false');
            return;
        }
        console.log(findedName);
    },
    findByPhone(phone) {
        const findedPhone = this.users.find(el => el.phone === phone);
        if (findedPhone === undefined) {
            console.log('false');
            return;
        }
        console.log(findedPhone); 
    },
    getCount() {
        console.log(this.users.length);
        
    }
}

book2.addUser('aga', 31, '508071833');
book2.addUser('łukaszek', 34, '508071834');
book2.showUsers();
book2.findByName('łukaszka');
book2.findByPhone('508071833');
book2.getCount();


//part 5

const tableGenerator = {
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateIncTable(lng) {
        const newTable = [];
        for(let i=0; i < lng; i++) {
            newTable.push(i);
        }
        return newTable;
    },
    generateRandomTable(lng,min,max) {
        const newTable = [];
        for(let i=0; i < lng; i++) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            newTable.push(randomNumber);
        }
        return newTable;
    },
    generateTableFromText(str) {
        if (typeof str === 'string') {
            return str.split(' ');
        } else {
            return [];
        }
    },
    getMaxFromTable(arr) {
        return Math.max(...arr);
    },
    getMinFromTable(arr) {
        return Math.min(...arr);
    },
    delete(arr,index) {
        arr.splice(index,1);
        console.log(arr);
        
    }

}

tableGenerator.randomNumber(1,5);
tableGenerator.generateIncTable(5);
tableGenerator.generateRandomTable(6,1,10);
tableGenerator.generateTableFromText('Brandy and Foks');
tableGenerator.getMaxFromTable([1,6,9,3,5]);
tableGenerator.getMinFromTable([1,6,9,3,5]);
tableGenerator.delete([1,5,9,8], 2)


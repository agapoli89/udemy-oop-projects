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

// part 2
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
        Informacje o statku:
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

// part 3
const book2 = {
    users: [],
    addUser(name, age, phone) {
        const user = {name, age, phone};
        this.users.push(user);
    },
    showUsers() {
        console.log("Wszyscy użytkownicy w książce:");
        this.users.forEach(user => console.log(user));       
    },
    findByName(name) {
        const findedName = this.users.find(el => el.name === name);
        if (findedName === undefined) return false;
        return findedName;
    },
    findByPhone(phone) {
        const findedPhone = this.users.find(el => el.phone === phone);
        if (findedPhone === undefined) return false;
        return findedPhone; 
    },
    getCount() {
        console.log(this.users.length);    
    }
}
book2.addUser('aga', 31, '508071833');
book2.addUser('łukaszek', 34, '508071834');
book2.showUsers();
console.log(book2.findByName('łukaszka'));
console.log(book2.findByPhone('508071833'));
book2.getCount();


//part 4

const tableGenerator = {
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateIncTable(lng) {
        /* const newTable = [];
        for(let i=0; i < lng; i++) {
            newTable.push(i);
        }
        return newTable; */
        return new Array(lng).fill(0).map((el,i) => i);
    },
    generateRandomTable(lng,min,max) {
        const newTable = [];
        for(let i=0; i < lng; i++) {
            newTable.push(this.randomNumber(min,max));
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
        //return Math.max(...arr);

        let max = -1;
        for (let i=0; i<arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    },
    getMinFromTable(arr) {
        return Math.min(...arr);

        /* let min = 99;
        for (let i=0; i<arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min; */
    },
    delete(arr,index) {
        arr.splice(index,1);
        //console.log(arr);
        return arr;
    }

}

tableGenerator.randomNumber(1,5);
console.log(tableGenerator.generateIncTable(5));
console.log(tableGenerator.generateRandomTable(6,1,10));
tableGenerator.generateTableFromText('Brandy and Foks');
console.log(tableGenerator.getMaxFromTable([15,6,9,3,5]));
console.log(tableGenerator.getMinFromTable([1,6,9,3,5]));
console.log(tableGenerator.delete([1,5,9,8], 2));

// part 5
const text = {
    check(txt,word) {
        return txt.includes(word);
    },
    getCount(txt) {
        return txt.length;
    },
    getWordsCount(txt) {
        return txt.split(' ').length;
    },
    setCapitalize(txt) {
        const wordsArray = txt.split(' ');
        return wordsArray.map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    },
    setMix(txt) {
        const mixed = [];
        for (let i=0; i < txt.length; i++) {
            i % 2 === 0
            ? mixed.push(txt[i].toUpperCase())
            : mixed.push(txt[i].toLowerCase())
        }
        return mixed.toString().replaceAll(',', '');   
    },
    generateRandom(lng) {
        /* const alphabetA = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        const newWordArray = [];
        
        for (let i=0; i<lng; i++) {
            const randomNumber = Math.floor(Math.random() * alphabetA.length);
            newWordArray.push(alphabetA[randomNumber]);
        };
        const newWord = newWordArray.toString().replaceAll(',','');
        return newWord; */

        // kartofelek007

        const array = new Array(lng).fill(0);
        const textArray = array.map(el => {
            min = 65;
            max = 90;
            random = Math.floor(Math.random() * (max - min +1) + min);
            return String.fromCharCode(random);
        });
        return textArray.join('');
    },
}

console.log(text.check('aga i lukaszek', 'foks'));
console.log(text.getCount('aga ma kota'));
console.log(text.getWordsCount('aga ma kota'));
console.log(text.setCapitalize('aga ma kotka'));
console.log(text.setMix('aga ma kota'));
console.log(text.generateRandom(3));

import { App } from "./src/app"
import { Bike } from "./src/bike"
import { Rent } from "./src/rent"
import { User } from "./src/user"

const bike = new Bike('mountain bike', 'mountain', 
    123, 500, 100.5, 'desc', 5, [])
const user = new User('Maria', 'maria@mail.com', '1234')
const today = new Date()
const twoDaysFromToday = new Date()
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2)
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const sevenDaysFromToday = new Date()
sevenDaysFromToday.setDate(sevenDaysFromToday.getDate() + 7)
const rent1 = Rent.create([], bike, user, today, twoDaysFromToday)
const user2 = new User('Maria Clara', 'maria@gmail.com', '3123')

const app = new App()
app.registerUser(user)
app.registerUser(user2)
app.registerBike(bike)
let dt1 = new Date();
let dt2 = new Date();
dt2.setDate(new Date().getDate() + 2)
app.rentBike(bike, user2, dt1, dt2)

console.log(JSON.stringify(app, undefined, 2) + '\n\n');

app.removeUser(user.email);
app.returnBike(bike);

console.log(JSON.stringify(app, undefined, 2) + '\n\n');
import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";

export class App {
    users: User[] = []
    uIdCounter: number = 0
    bikes: Bike[] = []
    bIdCounter: number = 0
    rents: Rent[] = []
    rIdCounter: number = 0

    findUser(email: string): User | undefined {
        return this.users.find(user => { return user.email === email})
    }

    registerUser(
        user: User
    ): void {
        if (this.users.some(u => u.email === user.email)) throw new Error('Email occupied.');

        user.id = this.uIdCounter;
        this.uIdCounter++;

        this.users.push(user);
    }

    // REMOVE USER
    removeUser(
        email: string
    ): void {
        let U: User | undefined = this.findUser(email);
        if (U === undefined) throw new Error('User not found');
        let iU = this.users.indexOf(U);

        this.users.splice(iU, 1);
    }

    // REGISTERBIKE
    registerBike(
        bike: Bike
    ): void {
        bike.id = this.bIdCounter;
        this.bIdCounter++;

        this.bikes.push(bike);
    }

    // RENT BIKE 
    rentBike(
        bike: Bike, 
        user: User, 
        startDate: Date, 
        endDate: Date
    ): Rent {
        let rent = Rent.create(this.rents.filter(r => r.bike === bike && r.dateReturned === undefined), bike, user, startDate, endDate);
        this.rents.push(rent);
        return rent;
    }
    
    // RETURN BIKE
    returnBike(
        bike: Bike
    ) {
        let now = new Date();
        let rent = this.rents.find(r => r.bike === bike && r.dateReturned === undefined && now >= r.dateFrom);
        if (rent === undefined) throw new Error('Bike not in active contract.');
        rent.end();
    }
}
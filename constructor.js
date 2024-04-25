class Car{
    constructor(make,model,year,isAvailable){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable
    }

    toggleAvailability(){
        this.isAvailable=!isAvailable
        
    }
}
    const car1= new Car('mazda','Demio',2020,true);
    console.log(car1.isAvailable);

class Rental{
    constructor(car,startDate,endDate){
        this.car=car;
        this.startDate=startDate;
        this.endDate =endDate;
    }
    calculateRentalDuration(){
        const start = new Date(this.startDate);
        const end = new Date(this.endDate)
        const duration = calculate.absent(end-start)
        return calculate.absent(duration/())
    }

}    

    


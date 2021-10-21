function FoodOrder(name, type, price, deliveryTime) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.deliveryTime = deliveryTime;
    this.totalFoodRate = [];
    this.totalRate = 0;
    this.comments = [];
    this.isReady = false;
    this.order = (premium) => {
        if (premium) console.log(0.8 * this.price, this.totalFoodRate)
        else console.log(this.price, this.totalFoodRate)
    }

    this.rateFood = (rateNum) => {
        let total = 0;
        this.totalFoodRate.push(rateNum)
        for (let item of this.totalFoodRate) {
            total += item
        }
        this.totalRate = total / this.totalFoodRate.length
    }
}

// console.log(IsEqual(obj1, obj2))

let burger = new FoodOrder('burger', 'fastFood', 230, 70)
// console.log(burger)
// let rate1 = burger.rateFood(5)
// let rate2 = burger.rateFood(2)
// let rate3 = burger.rateFood(3)
// let rate4 = burger.rateFood(4.5)
// console.log(burger.totalRate)
// console.log(burger)
// console.log(pizza.order(true))
// console.log(pizza.order(false))

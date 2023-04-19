const Seok = {
    name : '이석형',
    address : '서울',
    strength : 0,
    isHealthy: 0,
    breathe : function(){
        console.log('이석형이 숨쉰다.')
    },
    sleep : function(){
        this.strength++;
        if(this.strength === 5){
            this.isHealthy = 1;
        }
    }
}

function FoodPicker(foodNames){
    this.name = foodNames;
    this.sayMenu = function(){
        console.log(`오늘의 메뉴는 ${this.name[parseInt(Math.random()* this.name.length)]}입니다.`)
    }
}
let foodNames = ['짜장면','청국장','김치찌게']

// const robot1 = new FoodPicker(foodNames)

class Robot {
    constructor(name,address, isHealthy,strength){
        this. name = name;
        this.address = address;
        this.isHealthy=isHealthy;
        this.strength = strength;
    }

    breathe(){
        console.log(`${this.name}이 숨쉰다.`)
    }

    sleep(){
        this.strength++;
        if(this.strength === 5){
            this.isHealthy = 1;
            console.log(this.isHealthy)
        }
    }
}
const robot1 = new Robot('이석형','서울')



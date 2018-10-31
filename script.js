/*  Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks     2. Streets
town = 3 parks + 4 streets

// park(name, buildYear, trees, area)
// street(name, buildYear, length, size)
// both(name, buildYear)

At an end-of-year meeting, your boss wants a final report with the following:

1. [Tree density of each park] in the town (forumla: number of trees/park area)  @@@
2. Average age of each town's park (forumla: sum of all ages/number of parks)   @이건 바깥 함수에 해야될듯
3. The name of the park that has more than 1000 trees       @이것도 바깥에 해야될듯
4. Total and average length of the town's streets           @이것도 바깥, 그리고 마지막 호출하는 report func에서.
5. [Size classification of all streets]: tiny/small/normal/big/huge. If size = unknown, default = normal    @@@

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/


////// models
class parks extends both{
    constructor(name, buildYear, numTrees, area) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    densityOfPark() {
        const density = (this.numTrees)/(this.area);
        console.log(`${this.name}'s density is ${density}`);
    }

    ages() {
        const age = new Date().getFullYear() - this.buildYear;
    }

};

class streets extends both{
    constructor(name, buildYear, length, size=3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    sizeClassification() {
        const level = new Map();
        level.set(1, "tiny");
        level.set(2, "small");
        level.set(3, "normal");
        level.set(4, "big");
        level.set(5, "huge");

        // level.get() 괄호 안에 this.size가 오는데, 사실 this.size와 level.set을 해준 값들이 어떻게 인과관계가 설정된건지 헷갈림
        console.log(`The size of street named "${this.name}" is ${level.get(this.size)}`);

    }

};

class both {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

////// data from script.js in the final
const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];


////// functions

// Sum of all Ages
function totalAge(abc) {
    const sum = abc.forEach(elem => {
        let a = elem.age() + a;
        
    });
    return sum;
}

// Average age of Parks, b는 totalAge 함수의 sum값
function parkAvgAge(b) {
    const avgAge = b / allParks.length();
    console.log(`Average age of Parks is ${avgAge}.`);
}


// park, street 리포트 따로 해야되나? param이 달라서 따로 하는게 좋아보임.
function finalReportOfPark(foo) {
    console.log("This is final report of town including the following options.")
    
    // 1. Density of Each Park
    foo.forEach(elem => elem.densityOfPark());

    // 2. Average age of each town's park
    parkAvgAge(foo);

    // 3. Park that has more than 1000 trees
    // const filtered = 

};

function finalReportOfStreet(foo) {
    // 4. Total, Average length of the town's streets
    // total은 global func으로 구하고, total을 num of allStreets(which is 4)으로 나눠주면 avgLen.
    // const [total, avgLen] = 

    // 5. Size classification of all streets
    foo.forEach(elem => elem.sizeClassification());

};


///// 중간정리
// 일단 average age와 average length를 구하기 위해서는 둘 다 total을 구하기 위한 func이 필요함.
// 따라서, func total()을 만들고, 이걸 park와 street에서 공유해서 쓰는게 효율적으로 보임.



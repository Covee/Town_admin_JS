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
class both {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
};

class parks extends both{
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    densityOfPark() {
        const density = ((this.numTrees)/(this.area)).toFixed(2);
        console.log(`${this.name}'s density is ${density}`);
    }

    
    // calcAge() {
    //     let age = new Array();
    //     age.push(new Date().getFullYear() - this.buildYear)
    // }

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


////// data from script.js in the final
const allParks = [new parks('Green Park', 1987, 0.2, 215),
                 new parks('National Park', 1894, 2.9, 3541),
                 new parks('Oak Park', 1953, 0.4, 949)];

const allStreets = [new streets('Ocean Avenue', 1999, 1.1, 4),
                   new streets('Evergreen Street', 2008, 2.7, 2),
                   new streets('4th Street', 2015, 0.8),
                   new streets('Sunset Boulevard', 1982, 2.5, 5)];


////// functions
function total(aa) {
    let tot = 0;
    aa.forEach(elem => {
        tot = elem + tot;
    });
    return tot;
}

// Average age of Parks, b는 totalAge 함수의 sum값
function parkAvgAge(b) {
    const avgAge = (b / allParks.length).toFixed(1);
    console.log(`Average age of Parks is ${avgAge}-year-old.`);
}


// park, street 리포트 따로 해야되나? param이 달라서 따로 하는게 좋아보임.
function finalReportOfPark(foo) {
    console.log("This is final report of town including the following options.")
    console.log("----------------------------PARK-----------------------------")
    
    // 1. Density of Each Park
    foo.forEach(elem => elem.densityOfPark());

    // 2. Average age of each town's park
    const age = foo.map(elem => new Date().getFullYear() - elem.buildYear);
    const tot = total(age);
    parkAvgAge(tot);

    // 3. Park that has more than 1000 trees
    const filtered = foo.map(elem => elem.numTrees).findIndex(elem => elem >= 1000);
    console.log(`${foo[filtered].name} has more than 1000 trees.`)

};

function finalReportOfStreet(foo) {
    console.log("---------------------------STREETS---------------------------")

    // 4. Total, Average length of the town's streets
    const len = foo.map(elem => elem.length);
    const tot = total(len).toFixed(2);
    const avgLen = (tot / foo.length).toFixed(2);
    console.log(`Total length of Streets is ${tot}, and Average length of Streets is ${avgLen}.`);

    // 5. Size classification of all streets
    foo.forEach(elem => elem.sizeClassification());

};


///// 중간정리
// 일단 average age와 average length를 구하기 위해서는 둘 다 total을 구하기 위한 func이 필요함.
// 따라서, func total()을 만들고, 이걸 park와 street에서 공유해서 쓰는게 효율적으로 보임.

// forEach와 map 함수의 차이가 뭘까?
// 둘 다, array를 돌면서 전달한 param로 로직을 구현하는 방식인데...음
// 차이점은 return의 유무!
// forEach의 return은 undefined, map의 return은 이 콜백함수의 결과값으로 구성된 새 array
// 그래서 결과값으로 뭔가 또 다른 값을 구하려 하면 forEach를 주로 쓰고, 새롭게 도출된 array 자체를 받으려면 map을 주로 씀

// execute
finalReportOfPark(allParks);
finalReportOfStreet(allStreets);


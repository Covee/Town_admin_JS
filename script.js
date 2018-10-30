/*  Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks     2. Streets

town = 3 parks + 4 streets
All parks and streets have [name, build year]

At an end-of-year meeting, your boss wants a final report with the following:
1. [Tree density of each park] in the town (forumla: number of trees/park area)  @@@

2. Average age of each town's park (forumla: sum of all ages/number of parks)   @이건 바깥 함수에 해야될듯
3. The name of the park that has more than 1000 trees       @이것도 바깥에 해야될듯
4. Total and average length of the town's streets           @이것도 바깥, 그리고 마지막 호출하는 report func에서.

5. [Size classification of all streets]: tiny/small/normal/big/huge. If size = unknown, default = normal    @@@

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/



// park(name, buildYear, trees, area)
// street(name, buildYear, length, size)
// both(name, buildYear)


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

////// parks + streets의 데이터 값을 function 전에 불러줘야 할것 같은데...

// const allPark = 
// const allStreet = 



////// functions

// const age = new Date().getFullYear() - parks.buildYear;
// const sum = allPark.forEach(element => {
//     age
// });
// const parkAvgAge =      sum of all ages/number of parks



function finalReport() {
    console.log("This is final report of town including the following options.")

}

/*  Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/



// park(name, buildYear, trees, area)
// street(name, buildYear, length, size)
// both(name, buildYear)


// models
class parks {
    constructor(name, buildYear, numTrees, area) {
        this.area = area;
        this.numTrees = numTrees;
    }

};

class streets {
    constructor(name, buildYear, length, size=3) {
        this.length = length;
        this.size = size;
    }
};

class both {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


// functions
function finalReport() {
    console.log("This is final report of town including the following options.")
    
}

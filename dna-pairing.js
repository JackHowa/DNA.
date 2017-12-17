function pairElement(str) {
    const singlesArray = [...str]; // use es2015 spread [ 'G', 'C', 'G' ]
    const singles2dArray = singlesArray.map(start => [
        ...start,
        findMatch(start)
    ]); // es2015 spread with map [ [ 'G' ], [ 'C' ], [ 'G' ] ]
    return singles2dArray;
}

function findMatch(letter) {
    switch (letter) {
        case "A":
            return "T";
        case "T":
            return "A";
        case "G":
            return "C";
        case "C":
            return "G";
        default:
            console.error("Please input proper genes");
            break;
    }
}

console.log(pairElement("GCG"));

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

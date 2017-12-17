function pairElement(str) {
    const singlesArray = [...str]; // use es2015 spread [ 'G', 'C', 'G' ]
    return singlesArray.map(start => [...start]); // es2015 spread with map [ [ 'G' ], [ 'C' ], [ 'G' ] ]
}

console.log(pairElement("GCG"));

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

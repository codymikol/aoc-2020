
const utils = {
    findPairAddsTo,
    findTripleAddsTo,
}

/**
 *
 * @param collection {Array.<Number>} - A collection of integers to search within
 * @param addsTo {Number}  - The sum you would like to find two numbers that match to.
 * @return result {Array?} either an array of numbers from collection that sum to addsTo or null.
 */
function findPairAddsTo(collection, addsTo) {
    return collection.reduce((col, item) => {

        if(!!col.answer) return col;

        let potentialMatch = addsTo - item;

        if(col.knownMatches.has(item)) {
            col.answer = [item, potentialMatch]
        } else {
            col.knownMatches.add(potentialMatch)
        }

        return col;

    }, {
        answer: null,
        knownMatches: new Set()
    }).answer
}

function findTripleAddsTo(collection, addsTo) {
    return collection.reduce((col, current) => {

        //Short circuit when found, otherwise it will find two other permutations of itself.
        if(col.length > 0) return col;

        let test = findPairAddsTo(collection, addsTo - current)

        //return the three matching numbers if a match is found, otherwise null
        return test ? test.concat(current) : [];

    }, []);
}

export default utils;

import { data } from './data.mjs';

function getRootNoesContainsSearchCount(map, search) {
    return Object.keys(map).reduce((col, key) => {
        return key !== search && bagContains(map[key], search) ? (col + 1) : col;
    }, 0)
}

// DFS bag search implementation
function bagContains(bag, bagName) {

    let stack = [];
    stack.push(bag);

    while(stack.length !== 0) {
        let innerBag = stack.pop();
        if(innerBag.name === bagName) return true;
        innerBag.bags.forEach((b) => stack.push(b))
    }

    return false;

}

function makeBagMapOfRootNodes(bags) {
    return bags.reduce((col, bag) => {
        col[bag.name] = bag;
        return col;
    }, {})
}

function solve() {

    let bagMap = makeBagMapOfRootNodes(data)

    // map all child bags to actual bags using the bagMap looking in conjunction with the child definitions
    data.forEach(bag => {
        bag.contentNames.forEach((bagName) => {
            let actualBagName = bagName.slice(bagName.indexOf(' ') + 1, bagName.length)
            bag.add(bagMap[actualBagName])
        })
    })

    return getRootNoesContainsSearchCount(bagMap, 'shiny gold bag')

}

console.log(solve())

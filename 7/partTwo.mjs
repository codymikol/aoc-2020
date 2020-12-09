import {data} from './data.mjs';

// Full node traversal to get count
function countBagContents(bag) {

    let bagCount = 0;
    let stack = [];
    stack.push(bag);

    while(stack.length !== 0) {
        let innerBag = stack.pop();
        bagCount++;
        innerBag.bags.forEach((b) => stack.push(b))
    }

    // Ignore the outermost bag.
    return bagCount - 1;

}

function solve() {

    let bagMap = {}

    data.forEach(bag => bagMap[bag.name] = bag)

    // Slightly different, partOne only holds one bag per type for optimization sake as multiple are not needed.
    data.forEach(bag => {
        bag.contentNames.forEach((bagName) => {
            let amountOfBags = parseInt(bagName.slice(0, bagName.indexOf(' ')))
            let actualBagName = bagName.slice(bagName.indexOf(' ') + 1, bagName.length)
            for(let i = 0; i < amountOfBags; i++) {
                bag.add(bagMap[actualBagName])
            }
        })
    })

    return countBagContents(bagMap['shiny gold bag'])


}

console.log(solve())

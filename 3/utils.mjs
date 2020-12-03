import {GRID, GRID_HEIGHT, GRID_WIDTH, TREE} from "./data.mjs";

const utils = {
    findTreesInGridByVelocity: findTreesInGridBySlope,
}

function findTreesInGridBySlope(xVelocity, yVelocity) {

    let x = 0;
    let y = 0;
    let treeCount = 0;

    while(y < GRID_HEIGHT) {
        if(GRID[y][x % GRID_WIDTH] === TREE) treeCount ++;
        x += xVelocity;
        y += yVelocity;
    }
    return treeCount;

}

export default utils;

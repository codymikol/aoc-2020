const utils = {
    getGroupsFromManifest,
    getGroupUniqueLetterCount,
    getGroupAgreedLetterCount
};

// Its ugly, but the tests don't lie
function getGroupAgreedLetterCount(group) {
    let groupCount = group.split('\n').length;
    let letterCounts = group.replaceAll('\n', '').split('').reduce((col, char) => {
        if(col[char] === undefined) {
            col[char] = 1;
        } else {
            col[char]++;
        }
        return col;
    },{})
    return Object.keys(letterCounts).filter(key => letterCounts[key] === groupCount).length
}

function getGroupsFromManifest(manifest) {
    return manifest.split('\n\n')
}

function getGroupUniqueLetterCount(group) {
    return new Set(group.replaceAll('\n', '').split('')).size;
}

export default utils;

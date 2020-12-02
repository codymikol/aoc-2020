const utils = {
    passwordMeetsMinimumRequirements,
    passwordMeetsMaximumRequirements,
    getUniqueLetterCount,
    wordContainsLetterAtPosition
}

function passwordMeetsMinimumRequirements(password, letter, minimumRequirement) {
    return getUniqueLetterCount(password, letter) >= minimumRequirement;
}

function passwordMeetsMaximumRequirements(password, letter, maximumRequirement) {
    return getUniqueLetterCount(password, letter) <= maximumRequirement;
}

function getUniqueLetterCount(word, letter) {
    return word.split('').filter(char => char === letter).length;
}

function wordContainsLetterAtPosition(word, letter, position) {
    return word[position - 1] === letter;
}

export default utils;

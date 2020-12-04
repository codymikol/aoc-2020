const utils = {
    parsePassportBatchFile,
    valueIsBetween,
    isValidHeight
}

function valueIsBetween(value, min, max) {
    let number = parseInt(value);
    return number >= min && number <= max;
}

function isValidHeight(value) {
    let measurement = value.slice(-2);
    let number = value.slice(0, value.length - 2);

    if(!['in', 'cm'].some((item) => item === measurement) || isNaN(number)) {
        return false;
    }

    if(measurement === 'cm') {
        return valueIsBetween(value, 150, 193)
    }

    if(measurement === 'in') {
        return valueIsBetween(value, 59, 76)
    }

}

function batchRowToObject(row) {
    return row.split(' ').reduce((col, entry) => {
        let [key, value] = entry.split(':')
        col[key] = value;
        return col;
    }, {})
}

function reduceBatchToSingleRows(col, row) {
    if(row === '') {
        col.push('');
    } else {
        col[col.length - 1] += ' ' + row;
    }
    return col;
}

function parsePassportBatchFile(file) {
    return file
        .split('\n')
        .reduce(reduceBatchToSingleRows, [''])
        .map(batchRowToObject)
}

export default utils;

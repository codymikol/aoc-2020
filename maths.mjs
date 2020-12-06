const maths = {
    product,
    sum,
    getMinMax
}

function product(arr) {
    return arr.slice(1, arr.length).reduce((c, i) => c * i, arr[0])
}

function sum(arr) {
    return arr.slice(1, arr.length).reduce((c, i) => c + i, arr[0])
}

function getMinMax(arr) {
    return arr.reduce((c, i) => {
        if(i < c[0]) c[0] = i;
        if(i > c[1]) c[1] = i;
        return c;
    }, [Infinity, -Infinity])
}

export default maths

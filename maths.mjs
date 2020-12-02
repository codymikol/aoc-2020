const maths = {
    product
}

function product(arr) {
    return arr.slice(1, arr.length).reduce((c, i) => c * i, arr[0])
}

export default maths

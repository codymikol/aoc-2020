const parser = {
    parse,
    structuredRow,
}

function structuredRow(data, regexChain) {

    let result = []

    let chars = regexChain.split('$')

    for(let i = 0; i < chars.length; i++) {

        let initial = (chars[i - 1] || '') + chars[i];
        let final = chars[i+1];
        let initialIndex = data.indexOf(initial);
        let finalIndex = data.indexOf(final);
        let match = data.substring(initialIndex, finalIndex)

        result.push(match)

        console.log('current string:', data, 'look between: ',`(${initial})`, `(${final})`, ' finds: ', `(${match})`)

        data = data.slice(finalIndex + final.length, data.length);


    }

    return result



}

function parse(data, query) {

}

export default parser;

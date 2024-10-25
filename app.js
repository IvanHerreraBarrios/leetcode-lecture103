function wrapping(gifts){
    const wrapped = []
    for (let i=0; i< gifts.length; i++){
        wrapped.push(wrap(gifts[i]))
    }
    return wrapped
}

function wrap(gift){
    const numChars = gift.length
    const fold = "*".repeat(numChars + 2)
    return `${fold}\n*${gift}*\n${fold}`
}

function countHours(year, holidays){
    let hours = 0
    for(let i=0; i<holidays.length; i++){
        const date = new Date(year + "/" + holidays[i])
        const day = date.getDay()
        if (day !== 0 && day !== 6){
            hours += 2
        }
    }
    return hours
}
export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    debounce,
    saveToStorage,
    loadFromStorage,
    fullFormatDate,
    chartColors,
}

function makeId(length = 6) {
    var txt = ""
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = [
        "The sky",
        "above",
        "the port",
        "was",
        "the color of television",
        "tuned",
        "to",
        "a dead channel",
        ".",
        "All",
        "this happened",
        "more or less",
        ".",
        "I",
        "had",
        "the story",
        "bit by bit",
        "from various people",
        "and",
        "as generally",
        "happens",
        "in such cases",
        "each time",
        "it",
        "was",
        "a different story",
        ".",
        "It",
        "was",
        "a pleasure",
        "to",
        "burn",
    ]
    var txt = ""
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + " "
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}

function fullFormatDate(timestamp) {
    const date = new Date(timestamp)
    const hour = date.getHours().toString().padStart(2, "0")
    const minute = date.getMinutes().toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear().toString()
    return `${day}.${month}.${year} - ${hour}:${minute}`
}
function chartColors() {
    return [
        "#336699",
        "#99CCFF",
        "#999933",
        "#666699",
        "#CC9933",
        "#006666",
        "#3399FF",
        "#993300",
        "#CCCC99",
        "#666666",
        "#FFCC66",
        "#6699CC",
        "#663366",
        "#9999CC",
        "#CCCCCC",
        "#669999",
        "#CCCC66",
        "#CC6600",
        "#9999FF",
        "#0066CC",
        "#99CCCC",
        "#999999",
        "#FFCC00",
        "#009999",
        "#99CC33",
        "#FF9900",
        "#999966",
        "#66CCCC",
        "#339966",
        "#CCCC33",
        "#003f5c",
        "#665191",
        "#a05195",
        "#d45087",
        "#2f4b7c",
        "#f95d6a",
        "#ff7c43",
        "#ffa600",
        "#EF6F6C",
        "#465775",
        "#56E39F",
        "#59C9A5",
        "#5B6C5D",
        "#0A2342",
        "#2CA58D",
        "#84BC9C",
        "#CBA328",
        "#F46197",
        "#DBCFB0",
        "#545775",
    ]
}

// local storage functions
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}

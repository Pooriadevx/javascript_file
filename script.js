
const obj1 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}
const obj2 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 3],
    key4: {name: 'mohammad'},
}

const isItemChecker = (obj1, obj2) => {
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}

const isEqual = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    for (let item in obj1) {
        if (typeof obj1[item] === 'object') {
            if (isItemChecker(obj1[item], obj2[item]) === false ) return false
        } else {
            if (obj1[item] !== obj2[item]) {
                return false
            }
        }
    }

    return true
}

console.log(isEqual(obj1, obj2))

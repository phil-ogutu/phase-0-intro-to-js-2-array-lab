// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(){
    let newCats = [...cats, "Broom"]
    return newCats
}

function prependCat(){
    let newCats = ["Arnold", ...cats]
    return newCats
}

function removeLastCat(){
    let newCats = cats.slice(0, -1)
    return newCats
}

function removeFirstCat(){
    let newCats = cats.slice(1)
    return newCats
}
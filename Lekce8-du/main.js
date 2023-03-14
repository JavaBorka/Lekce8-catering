
/*******   CVIČENÍ 1 - CATERING   *******/

// Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

// Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

// Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

// Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

// Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu

// Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu:

// Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč


const justFood = (quantity) => {
    const pricePerPerson = 150
    const priceSum = pricePerPerson * quantity
    return 'cateringem od Just Food pro ' + quantity + ' lidí byl dodán za celkovou sumu ' + priceSum + ' Kč.'
}

// console.log(justFood(20))

const yourMama = (quantity) => {
    const pricePerPerson = 200
    const priceSum = pricePerPerson * quantity
    return 'cateringem od Your Mama pro ' + quantity + ' lidí byl dodán za celkovou sumu ' + priceSum + ' Kč.'
}

// console.log(yourMama(20))

const flavourHeaven = (quantity) => {
    const pricePerPerson = 250
    const priceSum = pricePerPerson * quantity
    return 'cateringem od Flavour Heaven pro ' + quantity + ' lidí byl dodán za celkovou sumu ' + priceSum + ' Kč.'
}

console.log(flavourHeaven(20))

const createEvent = (event, quantity, catering) => {
    return event + ' s ' + catering(quantity)
}

console.log(createEvent('Oslava narozenin', 30, flavourHeaven))

document.body.innerHTML = `
    <p>${createEvent('Oslava narozenin', 30, flavourHeaven)}</p>
`

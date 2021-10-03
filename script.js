const coffees = [
    {name: 'Brygg Kaffe',price: 20},
    {name: 'Cappucino',price: 30},
    {name: 'Latte',price: 40}
]
let numberOfCups = 0
let totalNumberOfCups = 0
let prices = 0
let totalPrice = 0
let finalPrice = 0
let membersStatus = ""
let remaining = 0
let coffeeIndex = null
let discountAmount = 0
let myArchive = []

function master() {
    getInput()
}
// input validation
function getInput() {
    numberOfCups = Number(document.getElementById("takeOrders").value)
    if (numberOfCups >= 1 && numberOfCups <= 10) {
        getCost()
        discount()
        getStatus()
        transactionHistory()
        archiving()
    } else if (numberOfCups > 10) {
        alert("you can only order up to ten")
    } else {
        alert("invalid value")
    }
}
// giving discount
function discount() {
    if (totalPrice > 1000) {
        remaining = totalPrice - 1000
        discountAmount = (500 * 0.1) + (remaining * 0.15)
    } else if (totalPrice > 500) {
        remaining = totalPrice - 500
        discountAmount = remaining * 0.1
    }
    finalPrice = totalPrice - discountAmount
}
// cost calculation
function getCost() {
    totalNumberOfCups = totalNumberOfCups + numberOfCups
    coffeeIndex = document.getElementById("coffeeTypes").selectedIndex
    prices = numberOfCups * coffees[coffeeIndex].price
    totalPrice = totalPrice + prices
}
// getting members status
function getStatus() {
    if (totalNumberOfCups < 10) {
        membersStatus = "Brons"
    } else if (totalNumberOfCups >= 10 && totalNumberOfCups < 30) {
        membersStatus = "Silver"
    } else if (totalNumberOfCups >= 30) {
        membersStatus = "Guld"
    }
    const parent = document.getElementById("parent").innerHTML = `Du har handlat för ${finalPrice}kr <br> MedlemsStatus: ${membersStatus}`
}
// transation & History
function transactionHistory() {
    const changeTitle = document.getElementById("title")
    changeTitle.innerHTML = "Dina Transaktioner"
    const theOtherParent = document.getElementById("second")
    const p = document.createElement("p")
    p.innerHTML = `Du har köpt ${numberOfCups}st ${coffees[coffeeIndex].name} för ${coffees[coffeeIndex].price}kr styck. Summa: ${numberOfCups*coffees[coffeeIndex].price}`
    theOtherParent.appendChild(p)
    const putInFirstLn = document.getElementById("letItBeFirst")
    putInFirstLn.insertBefore(p, putInFirstLn.childNodes[0])
}
// archiving everything
function archiving() {
    class Archiveclass {
        constructor(FinalCost, CoffeType, NumberOfCups) {
            this.FinalCost = FinalCost
            this.CoffeType = CoffeType
            this.NumberOfCups = NumberOfCups
        }
    }
    let archiveObj = new Archiveclass(finalPrice, coffees[coffeeIndex].name, numberOfCups)
    myArchive.push(archiveObj)
    console.log(myArchive);
}
// emptying the text field
function emptyTextField() {
    document.getElementById("takeOrders").value = ""
}
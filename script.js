const coffees = [
    {name: 'Brygg Kaffe',price: 20},
    {name: 'Cappucino',price: 30},
    {name: 'Latte',price: 40}
]
let totalNumberOfCups = 0
let costs = 0
let totalCost = 0
let membersStatus = ""
let remaining = 0
let With10PercentOff = 0
let With15PercentOff = 0
let finalCost = 0
let myArchive = []

function master() { 
    const numberOfCups = Number(document.getElementById("takeOrders").value)
    // input validation
    if (numberOfCups >= 1 && numberOfCups <= 10) {
        // cost calculation
        totalNumberOfCups = totalNumberOfCups + numberOfCups
        const coffeeIndex = document.getElementById("coffeeTypes").selectedIndex
        costs = numberOfCups * coffees[coffeeIndex].price
        totalCost += costs
        finalCost = totalCost
        // giving discount
        if (totalCost>=500) {
            With10PercentOff = ((totalCost-500)*0.9)+500
            finalCost = With10PercentOff
            console.log(With10PercentOff);
            if (With10PercentOff>=1000) {
                With15PercentOff = ((With10PercentOff-1000)*0.85)+1000
                finalCost = With15PercentOff
                console.log(With15PercentOff);
            }
        }

        // getting members status
        if (totalNumberOfCups < 10) {
            membersStatus = "Brons"
        } else if (totalNumberOfCups >= 10 && totalNumberOfCups < 30) {
            membersStatus = "Silver"
        } else if (totalNumberOfCups >= 30) {
            membersStatus = "Guld"
        }
        const parent = document.getElementById("parent").innerHTML = `Du har handlat för ${finalCost}kr <br> MedlemsStatus: ${membersStatus}`

        // transation & History 
        const changeTitle = document.getElementById("title")
        changeTitle.innerHTML = "Dina Transaktioner"
        const theOtherParent = document.getElementById("second")
        const p = document.createElement("p")
        p.innerHTML = `Du har köpt ${numberOfCups}st ${coffees[coffeeIndex].name} för ${coffees[coffeeIndex].price}kr styck. Summa: ${numberOfCups*coffees[coffeeIndex].price}`
        theOtherParent.appendChild(p)
        const putInFirstLn = document.getElementById("letItBeFirst")
        putInFirstLn.insertBefore(p, putInFirstLn.childNodes[0])
        
        // archiving everything
        class Archiveclass{
            constructor(FinalCost, CoffeType, NumberOfCups) {
                this.FinalCost = FinalCost
                this.CoffeType = CoffeType
                this. NumberOfCups = NumberOfCups
            }
        }
        let archiveObj = new Archiveclass(finalCost, coffees[coffeeIndex].name, numberOfCups)
        myArchive.push(archiveObj)
        console.log(myArchive);
    } else if (numberOfCups>10) {
        alert("we don't take order more than ten cups")
    } else {
        alert ("invalid value")
    }
}

// emptying the text field
function emptyTextField() {
    document.getElementById("takeOrders").value = ""
}
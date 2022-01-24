// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Gianfranco Orlando" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0

//getting html elements
const credit = document.querySelector('#credit')
let buttons = document.querySelectorAll('.button-container')
const gbQty = document.getElementById('qty-gb')
const ccQty = document.getElementById('qty-cc')
const sugarQty = document.getElementById('qty-sugar')
const totalQty = document.getElementById('qty-total')

//changine credential
credit.textContent = `Created by ${yourName}`

//add listeners
for (let x=0; x<buttons.length; x++) {
    buttons[x].addEventListener('click', function(e) {
        let btnId = e.target.id
        switch(btnId) {
            case 'add-gb':
                gb++
                gbQty.innerHTML = gb
            break
            case 'minus-gb':
                gb--
                if (gb<0) {gb = 0}
                gbQty.innerHTML = gb
            break
            case 'add-cc':
                cc++
                ccQty.innerHTML = cc
            break
            case 'minus-cc':
                cc--
                if (cc<0) {cc = 0}
                ccQty.innerHTML = cc
            break
            case 'add-sugar':
                sugar++
                sugarQty.innerHTML = sugar
            break
            case 'minus-sugar':
                sugar--
                if (sugar<0) {sugar = 0}
                sugarQty.innerHTML = sugar
            break
        }
        total = gb+cc+sugar
        totalQty.innerHTML = total
    })

}




const data = require('./data.json')

// Challenge 1 
let first_name = data.first_name
let fn_uppercase = first_name[0].toUpperCase() + first_name.slice(1, first_name.length)
let last_name = data.last_name 
let ln_uppercase = last_name[0].toUpperCase() + last_name.slice(1, last_name.length)

// console.log(first_name, last_name)
// console.log(fn_uppercase, ln_uppercase)

// Challenge 2 
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',  'September', 'October', 'November', 'December']

let datee = new Date(data.purchased)
let month = datee.getMonth() - 1
let fullMonth = months[month]
let day = datee.getDate() + 1
let year = datee.getFullYear()

// console.log(`Purchased: ${fullMonth} ${day}, ${year}`)

// Challenge 3  
let last_payment = new Date(data.lastpayment)
let today = new Date()

let diff = Math.abs(today.getTime() - last_payment.getTime())
let numDays = diff / (1000 * 3600 * 24)
let result = ''

if (numDays < 30) {
    result = `${numDays} days`
} else if (numDays < 364) {
    result = `${Math.ceil(numDays / 30)} months`
} else {
    result = `${Math.ceil(numDays / 365)} years`
}

// if (today < this._date) {
//     console.log(`${result} from now`)
// } else {
//     console.log(`${result} ago`)
// }

// Challenge 4
let phone = data.phone

const format = function(number) {
    return `(${number.slice(0,3)})${number.slice(3,6)}-${number.slice(6,10)}`
}

let test = format(phone)
console.log(test)

module.exports = {
    format
}































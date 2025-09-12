const price = Number(prompt('Доход'))
const range = prompt('Промежуток времени (month,day,week)')

const formattedPrice = price.toLocaleString('ru', {style: "currency", currency: "RUB"})

const result = `${price} Р в ${range}`
console.log(result)

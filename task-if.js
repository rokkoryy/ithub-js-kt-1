// const fontType = 'monospace'

// let message

// if (fontType === "serif") {
//     console.log("выбран шрифт Times")
// } else if (fontType === "sans-serif"){
//     console.log("выбран шрифт Arial")
// } else if (fontType === "monospace") {
//     console.log('выбран шрифт Consolas')
// }

// console.log(message)

// const fontType = 'serif'

// let message = "Такого типа нет"

// switch(fontType){
//     case "serif":
//         message = "выбран шрифт Times"
//         break;
//     case "sans-serif":
//         message = "выбран шрифт Arial"
//         break;
//     case "monospace":
//         message = 'выбран шрифт Consolas'
//         break;
//     default:
//         message = "Такого типа нет"
// }

// console.log(message)

const role = 'admin'
const permissions = ['read']

switch (role) {
    case 'admin':
        permissions.push = (['execute'])
    case 'user':
        permissions.push = (['write'])
}

console.log(permissions)
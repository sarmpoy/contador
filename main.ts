input.onButtonPressed(Button.A, function () {
    basic.showNumber(CONTAR)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    CONTAR = 0
})
input.onButtonPressed(Button.B, function () {
    CONTAR += 1
    basic.showNumber(CONTAR)
})
let CONTAR = 0
basic.showNumber(0)
CONTAR = 0

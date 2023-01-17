input.onButtonPressed(Button.A, function () {
    if (Mode == 0) {
        A += 1
    }
    if (Mode == 1) {
        B += 1
    }
})
let Mode = 0
let A = 0
let B = 0
Mode = 0
while (!(input.buttonIsPressed(Button.B))) {
    basic.showNumber(A)
}
basic.showIcon(IconNames.Yes)
Mode = 1
basic.pause(2000)
while (!(input.buttonIsPressed(Button.B))) {
    basic.showNumber(B)
}
basic.showIcon(IconNames.Yes)
basic.pause(2000)
basic.showLeds(`
    . . . . .
    . # # # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.pause(2000)
basic.showNumber(A + B)

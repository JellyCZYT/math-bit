function Sub () {
    basic.showNumber(A - B)
}
function Power () {
    basic.showNumber(A ** B)
}
function Mul () {
    basic.showNumber(A * B)
}
input.onButtonPressed(Button.A, function () {
    if (!(Start == 69)) {
        Mode += 1
    } else {
        if (Num == 0) {
            A += 1
        }
        if (Num == 1) {
            B += 1
        }
    }
})
function Div () {
    basic.showNumber(A / B)
}
function Add () {
    basic.showNumber(A + B)
}
let Start = 0
let Num = 0
let B = 0
let A = 0
let Mode = 0
basic.showIcon(IconNames.Happy)
while (!(input.buttonIsPressed(Button.B))) {
    basic.showNumber(Mode)
}
basic.showIcon(IconNames.Yes)
basic.pause(1000)
A = 0
B = 0
Num = 0
Start = 69
while (!(input.buttonIsPressed(Button.B))) {
    basic.showNumber(A)
}
basic.showIcon(IconNames.Yes)
Num = 1
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
if (Mode == 0) {
    Add()
} else if (Mode == 1) {
    Sub()
} else if (Mode == 2) {
    Mul()
} else if (Mode == 3) {
    Div()
} else {
    Power()
}

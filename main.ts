input.onButtonPressed(Button.A, function () {
    rope += -0.1
})
input.onButtonPressed(Button.B, function () {
    rope += 0.1
})
let rope = 0
led.plot(Math.round(rope), 2)
basic.forever(function () {
    basic.clearScreen()
    led.plot(rope, 2)
    if (rope) {
        basic.showString("A... WINS!!!")
    } else if (rope) {
        basic.showString("B... WINS!!!")
    }
})
basic.forever(function () {
    rope = 2
})

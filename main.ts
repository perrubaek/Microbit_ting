basic.forever(function () {
    basic.showLeds(`
        . # . . .
        . # . # .
        . # . # .
        . # # # .
        . . . . .
        `)
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    }
})

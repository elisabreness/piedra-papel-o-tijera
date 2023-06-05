let icono = 0
input.onGesture(Gesture.Shake, function () {
    icono = randint(0, 2)
    if (icono == 0) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (icono == 1) {
        basic.showIcon(IconNames.Square)
    }
    if (icono == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})

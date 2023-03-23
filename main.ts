input.onButtonPressed(Button.A, function () {
    radio.sendString("Sara")
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)

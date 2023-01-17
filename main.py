def on_button_pressed_a():
    global A, B
    if Mode == 0:
        A += 1
    if Mode == 1:
        B += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

Mode = 0
A = 0
B = 0
Mode = 0
while not (input.button_is_pressed(Button.B)):
    basic.show_number(A)
basic.show_icon(IconNames.YES)
Mode = 1
basic.pause(2000)
while not (input.button_is_pressed(Button.B)):
    basic.show_number(B)
basic.show_icon(IconNames.YES)
basic.pause(2000)
basic.show_leds("""
    . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
""")
basic.pause(2000)
basic.show_number(A + B)
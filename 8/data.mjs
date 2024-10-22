
class Instruction {

    constructor(code, value) {
        this.code = code;
        this.value = value;
        this.timesExcecuted = 0;
    }

    reset() {
        this.timesExcecuted = 0;
    }

    incrementExecuted() {
        this.timesExcecuted++;
    }

}

export const data = `acc -9
jmp +1
acc +3
acc +32
jmp +118
acc +8
nop +405
jmp +179
acc +43
acc +24
acc +11
jmp +545
acc +26
acc -6
acc +24
jmp +560
acc +39
acc +42
jmp +1
jmp +457
acc +36
acc +7
jmp +190
acc -12
acc -10
acc +30
jmp +110
acc +20
acc +22
acc +20
jmp +513
acc +7
jmp +110
acc +35
acc +4
jmp +51
acc +42
acc +23
jmp +158
acc +7
jmp +156
acc -15
acc -7
acc +27
jmp +30
jmp +141
acc +33
jmp +12
acc +5
acc +4
nop +49
jmp +296
acc +46
nop +358
acc -3
jmp +276
acc -1
acc +22
jmp +220
nop +178
acc +34
jmp +363
jmp +4
acc +2
jmp +173
jmp +484
acc +26
acc +2
acc -10
jmp +58
nop +137
acc -17
acc +15
jmp -14
acc +27
jmp +512
jmp +415
jmp +489
jmp -12
acc +34
acc +31
jmp +438
acc +4
acc +31
acc +47
jmp +302
nop +446
acc -8
acc +42
jmp +305
nop +504
jmp +89
acc +25
acc -2
nop +279
acc +5
jmp +19
acc +38
jmp +121
jmp +87
acc +26
acc -18
acc -18
acc +34
jmp +500
acc +0
acc -1
acc +38
jmp +1
jmp -46
acc +39
acc -14
acc +48
acc +19
jmp +480
acc -3
acc -7
nop +316
jmp +1
jmp +406
acc -3
jmp -44
acc +21
acc -5
acc -3
jmp +447
jmp +478
jmp +53
acc -2
nop +202
jmp +264
acc -17
acc +16
jmp +405
acc +28
jmp +393
jmp +320
acc +35
acc +38
acc -19
acc +11
jmp +86
acc -8
jmp -97
jmp +350
jmp +35
nop +448
acc +7
acc -6
acc +6
jmp +444
acc +11
acc +42
acc -15
acc +44
jmp +145
acc +1
jmp +46
acc -6
acc +1
nop +183
acc +20
jmp +413
acc +42
acc -9
jmp +391
jmp +197
acc +27
acc +7
jmp +68
acc -11
jmp -140
acc +11
jmp +238
acc -11
acc +33
acc +41
jmp +391
acc +2
jmp +389
jmp -134
acc +2
acc +29
jmp +1
acc +34
jmp +358
acc +39
acc +2
acc -12
acc +16
jmp +97
acc +25
jmp +412
acc +42
jmp +129
jmp -21
acc +39
acc -9
jmp +130
acc +21
jmp +1
acc +5
jmp -97
acc -16
jmp -188
acc +15
jmp +72
jmp -76
acc -2
acc +33
acc +13
jmp -175
jmp +250
acc +4
acc +25
jmp -163
jmp +184
acc -17
jmp -195
acc +20
acc +45
jmp -18
acc +28
acc +48
acc +43
nop +53
jmp -111
nop +51
acc -15
acc -16
acc +46
jmp +150
nop +121
acc +46
acc +11
nop -65
jmp -62
acc +37
acc -7
acc -16
jmp +19
jmp +1
jmp +187
acc +6
acc -2
jmp +217
nop +32
nop +186
acc +5
jmp -134
acc -3
acc +49
acc +19
jmp -34
nop -127
acc +0
acc -4
acc +43
jmp +253
acc -18
nop -183
acc +6
acc +32
jmp +76
nop -37
acc +0
nop +65
acc +12
jmp +275
jmp +263
acc +22
acc +38
jmp +59
acc -10
acc +14
acc -7
jmp +141
jmp +156
acc +3
acc +20
acc -11
jmp -74
acc -1
acc +0
acc +35
acc +48
jmp +57
acc -16
acc +27
jmp +1
acc -2
jmp +82
acc +34
acc +5
acc +12
nop +233
jmp +32
jmp +79
acc +27
jmp -30
jmp +1
nop +210
acc -18
jmp +84
jmp +221
nop -297
acc +35
jmp +1
jmp +304
jmp +266
acc +26
acc +2
acc +16
acc +14
jmp -148
nop -193
acc -9
jmp -181
jmp -282
acc +16
jmp +1
acc +18
jmp +102
acc -17
nop +70
jmp -109
nop -83
jmp +4
jmp +128
acc +34
jmp +172
acc +47
acc +7
jmp -121
nop -107
acc -6
acc -12
nop -206
jmp +187
acc +35
acc +44
jmp -68
jmp +87
jmp -185
acc -6
acc +50
jmp -3
acc +40
jmp -79
acc +14
nop -50
acc -5
jmp -286
acc +39
jmp +44
acc +3
acc +40
acc -17
acc +41
jmp -318
jmp +131
jmp +1
jmp -220
acc +22
acc +11
acc +35
acc +48
jmp -7
acc +34
acc -10
acc +45
nop +233
jmp -202
acc +38
jmp -27
jmp +193
nop -345
acc +0
jmp -109
acc +24
jmp -357
acc +15
jmp -72
acc -15
nop +10
nop -126
jmp -309
acc +2
jmp -35
acc +7
acc +31
jmp +1
nop -313
jmp +145
acc -19
nop +209
jmp +98
jmp -282
jmp -80
jmp -203
jmp +41
acc +33
acc -1
jmp +108
acc +15
jmp -306
acc +9
acc +8
acc +28
acc -3
jmp -324
acc -10
jmp -242
acc -11
acc +14
acc +35
jmp -85
acc -7
acc +24
acc +38
jmp -341
acc +21
acc -15
jmp -92
acc +18
acc -14
jmp -148
nop -341
jmp +166
jmp +82
acc -13
acc +36
jmp +100
acc +18
acc +40
acc +1
jmp -384
acc +26
nop +87
acc +28
jmp -298
acc +35
nop -132
acc +19
acc +24
jmp +57
acc -4
acc +17
acc -7
jmp +83
acc +36
jmp -208
nop -429
acc +0
acc +19
jmp -432
acc +24
acc -19
nop -406
jmp -209
acc +19
jmp -98
acc +33
acc +30
nop -328
jmp -238
acc +41
acc +9
acc -14
acc -11
jmp -139
jmp +145
acc +18
nop +102
acc +38
jmp -132
acc -3
acc +6
jmp -386
acc +7
acc +3
acc +6
jmp -430
acc +32
acc +28
acc +40
acc +0
jmp -83
acc +0
jmp +1
jmp -283
acc +11
jmp -299
jmp -224
nop +34
acc +21
nop -34
acc -10
jmp +27
acc -7
acc +8
jmp +67
nop -436
acc -15
acc +3
jmp -22
acc -12
nop -421
acc -13
acc -18
jmp -388
acc +30
acc +13
jmp -408
acc -3
acc -9
acc +34
acc +0
jmp -137
acc +4
acc +22
acc +7
acc +48
jmp +61
jmp +70
jmp -484
acc +19
jmp -382
acc +45
jmp +75
acc +34
jmp -144
jmp -381
jmp +1
acc +48
acc +48
acc +0
jmp -108
acc +0
jmp +1
jmp -477
acc +48
jmp +62
acc +1
jmp +1
jmp +49
acc -13
acc +20
jmp -406
acc +48
acc +3
acc -9
acc +32
jmp -124
acc -16
jmp -131
acc +27
acc -4
acc +36
acc -12
jmp -255
acc +0
jmp +1
acc +8
acc +41
jmp -407
jmp -543
jmp -73
nop +4
acc -6
jmp -504
jmp -28
nop -450
jmp -226
jmp -274
acc +1
jmp -568
acc +29
jmp -570
jmp +1
jmp -494
acc +29
acc -12
jmp -127
acc +32
jmp -135
jmp -383
nop -59
acc -19
acc +2
acc +26
jmp -446
acc +47
jmp +1
acc -18
acc -10
acc +32
nop -423
jmp -476
acc +39
acc +27
acc -9
acc +28
jmp -325
acc +37
acc +28
nop -81
jmp -310
acc -2
acc +8
acc +28
jmp -43
jmp -141
acc +5
nop -2
jmp -457
acc +25
acc +13
acc +0
jmp +1
jmp +1`
    .split('\n')
    .map(row => {
        let [code, value] = row.split(' ')
        return new Instruction(code, value)
    })

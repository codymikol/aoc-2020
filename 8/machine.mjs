
const MAX_INSTRUCTION_EXECUTION = 1;

export default class Machine {

    constructor(instructions) {
        this.accumulator = 0;
        this.index = 0;
        this.instructions = instructions;
        this.shorted = false;
    }

    getCurrentInstruction() {
        return this.instructions[this.index]
    }

    doCurrentInstruction() {
        let current = this.getCurrentInstruction();
        switch (current.code) {
            case 'acc':
                this.doAcc();
                break;
            case 'nop':
                this.doNop();
                break;
            case 'jmp':
                this.doJmp();
                break;
            default:
                throw new Error('Unknown instruction: ' + current.code);
        }
    }

    doAcc() {
        this.accumulator += parseInt(this.getCurrentInstruction().value);
        this.index++;
    }

    doNop() {
        this.index++;
    }

    doJmp() {
        this.index += parseInt(this.getCurrentInstruction().value);
    }

    reset() {
        this.shorted = false;
        this.accumulator = 0;
        this.index = 0;
        this.instructions.forEach((instruction) => instruction.reset())
    }

    /**
     *  This will run until an instruction is executed a second time.
     */
    run() {

        if(this.index > this.instructions.length - 1) {
            console.log('done')
            return;
        }

        let currentInstruction = this.getCurrentInstruction();
        console.log(currentInstruction)
        if(currentInstruction.timesExcecuted < MAX_INSTRUCTION_EXECUTION) {
            this.doCurrentInstruction();
            currentInstruction.incrementExecuted();
            this.run();
        } else {
            this.shorted = true;
        }
    }

    /**
     * This method will find the broken instruction and return the value of a functioning program.
     */
    findValidSolution() {
       for(let i = 0; i < this.instructions.length; i++) {
           console.log('computan')
           this.reset();
           if(this.instructions[i].code === 'acc') continue;
           this.flipJmpNopCode(this.instructions[i])
           this.run();
           if(this.shorted === false) {
               return this.accumulator;
           } else {
               this.flipJmpNopCode(this.instructions[i])
           }
       }
    }

    /**
     * Dirty nasty mutation 🤷
     */
    flipJmpNopCode(instruction) {
        if(instruction.code === 'acc') throw new Error('You messed up the flippity flop!')
        instruction.code = instruction.code === 'nop' ? 'jmp' : 'nop'
    }

}

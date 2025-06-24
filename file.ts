type Operation = 'multiply' | 'add' | 'divide';


const calculator = (a: number, b:number, op:Operation) : number =>{
    switch(op) {
        case 'multiply':
            return a * b
        case 'add':
            return a + b
        case 'divide':
            if (b === 0) throw new Error('cannot divide by zero')
            return a / b
        default:
            throw new Error ('please enter add, mulitply, or divide')
 }
}

calculator(1, 2,'add')
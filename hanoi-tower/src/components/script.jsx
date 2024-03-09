const N = 5;
class Stack{
    constructor(){
        this.data = [];
    }

    push(element){
        if(this.data.length > N){
            return false;
        }
        else{
            this.data.push(element);
            return true;
        }
    }

    pop(){
        if(this.data.length === 0){
            return false;
        }else{
            return this.data.pop();
        }
    }

    length(){
        return this.data.length;
    }

    list_(){
        return this.data.reverse();
    }
}

export function levelArray(level) {
    const levels = {
        1 : [1, 2, 3, 4, 5],
        2 : [1, 4, 3, 2, 5],
        3 : [2, 1, 5, 4, 3],
        4 : [3, 4, 2, 5, 1],
        5 : [5, 4, 3, 2, 1]
    }
    return levels[level];
}


export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Stack;
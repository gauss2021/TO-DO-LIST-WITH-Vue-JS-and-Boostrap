class Notifications{
    
   constructor(){
        
        this.state={
            count:0
        }
    }

    increment() {
        this.state.count++;
    }

    decrement(){
        this.state.count--;
    }
}

let notification= new Notifications();

export default notification;


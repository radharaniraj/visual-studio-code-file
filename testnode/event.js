const events=require('events');
const event=new events.EventEmitter();
event.on('click',()=>console.log("radha"));
event.emit('click');
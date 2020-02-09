const question= new Map();
question.set('question','what is the official name of the latest major javascript version?');
question.set(1,'es5');
question.set(2,'es6');
question.set(3,'es2015');
question.set(4,'es7');
question.set('correct',3);
question.set(true,'correct ans :D');
question.set(false,'wrong ans please try again!');

console.log(question.get('question'));
console.log(question.size);

for(let [key,value]of question.entries()){
    if (typeof(key)==='number'){
        console.log(`Answer ${key}:${value}`);
    }
};
const ans=parseInt(prompt ('write the correct answer'));
console.log(question.get(ans===question.get('correct')));



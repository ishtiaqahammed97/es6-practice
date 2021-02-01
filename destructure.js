const person = { name: 'Jack william',age:19, job: 'facebooker',gfName: 'Ema Watson', address:'kochukhet',phone:'01717112211', friends: ['Tom hanks','Tom banks']}

const { phone,gfName, address, salary } = person;
// const gfName =person.gfName;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName,phone, salary, address);


const friends = ['Sahkib khan', 'Amir khan', 'Jamal khan']
const [chotoFrist, ...olderF] = friends;
console.log(chotoFrist, olderF);
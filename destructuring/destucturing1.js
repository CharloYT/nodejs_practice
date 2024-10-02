const user = { name: 'Charles', age: 18 }
const { name, age, role = 'student' } = user

console.log(`${name}, ${age} years old, Role: ${role}`)


const food = ['rice', 'yam'];
const [breakfast, lunch = 'yam'] = food

console.log(`Breakfast: ${breakfast}, Lunch: ${lunch}`)
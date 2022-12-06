
let input = prompt("what would you like to do?");
const todos = ['Collect Eggs', 'Shave'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]} `);
        }
        console.log('***********');
    } else if (input === 'new') {
        const newTodo = prompt("What is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added!`);
    } else if (input === 'delete') {
        const index = parseInt(prompt("What is the index to delete?"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Deleted ${deleted[0]}`)
        } else console.log("Wrong index");
    }
    input = prompt("What would you like to do?");
}
console.log("OK You quit");
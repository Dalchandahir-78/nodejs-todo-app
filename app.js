
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Empty array
const todos = [];

const showMenu = () => {
    console.log("\n===== TODO APP =====");
    console.log("1: Add a Task");
    console.log("2: View Tasks");
    console.log("3: Delete a Task");
    console.log("4: Exit");

    rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
    if (option === "1") {
        rl.question("Enter the Task: ", (task) => {
            if (task.trim() === "") {
                console.log("Task cannot be empty!");
            } else {
                todos.push(task.trim());
                console.log("Task added:", task.trim());
            }

            showMenu();
        });
    }

    else if (option === "2") {
        console.log("\nYour Todo List:");

        if (todos.length === 0) {
            console.log("No tasks available.");
        } else {
            todos.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }

        showMenu();
    }

    else if (option === "3") {
        if (todos.length === 0) {
            console.log("No tasks available to delete!");
            showMenu();
            return;
        }

        console.log("\nYour Todo List:");

        todos.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });

        rl.question("Enter task number to delete: ", (number) => {
            const taskNumber = Number(number);

            if (
                !Number.isInteger(taskNumber) ||
                taskNumber < 1 ||
                taskNumber > todos.length
            ) {
                console.log("Invalid task number!");
            } else {
                const deletedTask = todos.splice(taskNumber - 1, 1);

                console.log("Task deleted:", deletedTask[0]);
            }

            showMenu();
        });
    }

    else if (option === "4") {
        console.log("Goodbye, buddy!");
        rl.close();
    }

    else {
        console.log("Invalid option. Please try again.");
        showMenu();
    }
};

showMenu();

// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

  markCompleted: function(task) {
  this.complete = true;
    },

  logState: function() {
  console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
  };
  return task;
};

const task0 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box');
const task1 = newTask('Do Laundry', 'First the washer then dryer...');
const tasks = [task0, task1];

task0.logState();
task0.markCompleted();
task0.logState();

console.log(tasks)

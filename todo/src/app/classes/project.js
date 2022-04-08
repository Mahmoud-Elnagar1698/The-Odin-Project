class Project {
  #tasks = [];

  constructor(title) {
    this.title = title;
  }

  addTask(...tasks) {
    this.#tasks.push(...tasks);
  }

  hasTask(queryTask) {
    for (const task of this.#tasks) {
      if (task.title === queryTask.title) {
        return true;
      }
    }
    return false;
  }

  removeTask(targetTask) {
    this.#tasks = this.#tasks.filter((task) => task !== targetTask);
  }

  get tasks() {
    return [...this.#tasks];
  }
}

export function project(title) {
  return new Project(title);
}

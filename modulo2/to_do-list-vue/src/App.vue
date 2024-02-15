<template>
  <div class="w-full flex flex-col items-center justify-center">
    <h1 class="text-center font-bold bg-red-500 p-4 w-full">{{title}}</h1>
    <img :src="logoURL" :alt="logoCaption" width="200" height="200" class="my-2" />
    
    <h2 class="font-bold">Add a new task</h2>
    <span class="mb-2">
      You have {{ allTasks }} {{ allTasks > 1 ? 'tasks': 'task' }} at the moment
    </span>
    
    <div>
      <input type="text" v-model="newTask" placeholder="Add a new task">
      <button @click="addTask" :disabled="newTask.length < 1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Add task</button>
    </div>
    <div v-if="newTask.length > 0">
      <h3>New task preview</h3>
      <p>{{ newTask }}</p>
    </div>
    <ul>
      <li v-for="(task, index) in latest" :key="task.id">
        {{ index + 1  }}. {{ task.name }}
        <div v-if="task.finished">
          <button>Delete task</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "My To Do App",
      newTask: '',
      logoURL: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80',
      logoCaption: 'A photo by Kelly Sikkema on Unsplash showing post-it notes',
      tasks: [
        { 
          id: 1, 
          name: 'Learn Vue JS', 
          finished: false
        },
        { 
          id: 2, 
          name: 'Build a Vue application', 
          finished: false
        },
        { 
          id: 3, 
          name: 'Write an article about Vue JS', 
          finished: false
        },
      ]
    }
  },

  methods: {
    addTask() {
      if (this.newTask.length < 1) return
      this.tasks.push({
        id: this.tasks.length + 1,
        name: this.newTask,
        finished: false
      });
      this.newTask = ''
    },

    removeTask(taskID) {
      this.tasks = this.tasks.filter(task => {
        return task.id !== taskID
      });
    },

    finishTask(task) {
      task.finished = !task.finished
    }
  }, 
  computed: {
    allTasks() {
      return this.tasks.length
    },
    latest() {
      return [...this.tasks].reverse()
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

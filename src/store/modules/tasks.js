export default {
    namespaced: true,
    state: {
        tasks: null,
        newTask: null,
        deleteTask: null,
        editTask: null
    },
    mutations: {
      setTasks(state, payload){
          state.tasks = payload
      },
      setNewTask(state, payload){
          state.newTask = payload
      },
      setDeleteTask(state, payload){
          state.deleteTask = payload
      },
      setEditTask(state, payload){
          payload = {'id': 'id', 'task': 'task'}
          state.editTask = payload.id
          state.editTask = payload.task
         
      }
    },
    actions: {
      async getTasks({commit}){
          try {
              const res = await fetch(`https://hack-app-a.herokuapp.com/api/v1/tasks`, {
                  method: 'GET',
              })
              const response = await res.json()
              commit('setTasks', response)
              return response
          } catch (error) {
              console.log(error)
          }
      },
      async registerTask({commit}, task){
        try {
            const res = await fetch(`https://hack-app-a.herokuapp.com/api/v1/tasks`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task)
            })
            const resp = await res.json()
            commit('setNewTask', resp)
            // alert('Registro exitoso')

        } catch (error) {
            alert('Registro fallido')
            console.log(error)
        }
    },
    async deleteTask({commit}, id){
        try {
            const res = await fetch(`https://hack-app-a.herokuapp.com/api/v1/tasks/${id}`, {
                method: 'DELETE'
            })
            const resp = await res.json()
            commit('setDeleteTask', resp)
            alert('Registro borrado')

        } catch (error) {
            alert('Operacion fallida')
            console.log(error)
        }
    },
    async editarTask({commit}, payload){
        try {
            const res = await fetch(`https://hack-app-a.herokuapp.com/api/v1/tasks/${payload.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload.task)
            })
            const resp = await res.json()
            commit('setEditTask', resp)
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    },
    }
  };
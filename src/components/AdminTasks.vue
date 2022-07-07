<template>
    <div class="adminTask">
        <h1 class="adminTask__title">Crear tarea</h1>
        <!-- <h1 class="adminTask__title" v-if="showModalEditar">Editar tarea</h1> -->
        <form class="adminTask__form" @submit.prevent="saveTask">
            <input class="adminTask__form--input" type="text" v-model="task.title" placeholder="Titulo de la tarea">
            <input class="adminTask__form--input" type="text" v-model="task.description"
                placeholder="Descripcion de la tarea">
            <input class="adminTask__form--input" type="text" v-model="task.tags" placeholder="Tags identificadores">
            <button class="adminTask__form--btn" @click="saveTask">Guardar</button>
            <!-- <button>Editar</button> -->
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                task: {
                    title: "",
                    description: "",
                    tags: ""
                }
            }
        },
        methods: {
            async saveTask() {
                this.task = {
                    title: this.task.title,
                    description: this.task.description,
                    tags: this.task.tags
                }
                await this.$store.dispatch("tasks/registerTask", this.task);
                location.reload()
            },
        }
    }
</script>
<style lang="scss">
    .adminTask {
        text-align: center;
        width: 500px;
        height: 300px;
        padding: 0 5%;
        border-radius: 6px;
        background-color: #b3e5fc;

        &__form {
            display: flex;
            flex-direction: column;
            justify-content: center;

            &--input {
                margin-top: 2%;
                height: 30px;
                border-radius: 6px;
                border: 0;
                outline: none;
            }

            &--btn {
                margin-top: 3%;
                width: 90px;
                height: 35px;
                border-radius: 6px;
                margin-left: 40%;
                border: 0;
                outline: none;
                cursor: pointer;
                color:#fff;
                background: blue;
            }

        }
    }
</style>
<template>
    <div class="adminTask">
        <h1 class="adminTask__title">Editar tarea</h1>
        <form class="adminTask__form">
            <p>Identificador de la tarea {{item._id}}</p>
            <input class="adminTask__form--input" type="text" v-model="item.title" placeholder="Titulo de la tarea">
            <input class="adminTask__form--input" type="text" v-model="item.description"
                placeholder="Descripcion de la tarea">
            <input class="adminTask__form--input" type="text" v-model="item.tags" placeholder="Tags identificadores">
            <button class="adminTask__form--btn" @click.prevent="saveChanges">Guardar/Cerrar</button>
        </form>
    </div>
</template>
<script>
    export default {
        props: ['item'],
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
            saveChanges() {
                this.$emit("click");
            }
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
                &::placeholder{
                    font-size: 16px;
                }
            }

            &--btn {
                margin-top: 3%;
                width: 150px;
                height: 35px;
                border-radius: 6px;
                margin-left: 35%;
                border: 0;
                outline: none;
                cursor: pointer;
                color: #fff;
                background: blue;
                font-size: 16px;
            }

        }
    }
</style>
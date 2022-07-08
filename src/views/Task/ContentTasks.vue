<template>
    <div class="contentTasks">
        <div class="contentTasks__container">
            <section class="contentTasks__container--header">
                <div class="contentTasks__container--headerLeft">
                    <section>
                        <p>1</p>
                    </section>
                    <section>
                        <p>Inmediate Steps</p>
                        <p>These are your inmediate steps to complete</p>
                    </section>
                </div>
                <div class="contentTasks__container--headerRight">
                    <div>
                        <p>{{count}}/{{data.length}} tasks left</p>
                        <progress id="file" max="100" value="70"></progress>
                    </div>
                    <div>
                        <p>🔼</p>
                    </div>
                </div>
            </section>
            <div class="contentTasks__container--line"></div>
            <section class="contentTasks__container--buttons">
                <div class="contentTasks__container--btnShow" @click="showTasks">Show All Tasks</div>
                <input class="contentTasks__container--search" v-model="search" v-if="show" type="text"
                    placeholder="Search by title or word">
                <div class="contentTasks__container--btnAdd" @click="getModal">+Add a Task</div>
            </section>
            <Modal class="contentTasks__container--modal" v-if="showModal" />
            <ModalEdicion v-if="showModalEdit" :item="item" @click="saveChanges(item)" />
            <div v-for="(item, index) in items" :key="index">
                <div class="contentTasks__container--line" v-if="show"></div>
                <section class="contentTasks__container--tasks" v-if="show" @click="showBtn">
                    <div class="task">
                        <p :id="index+1">{{index + 1}}</p>
                        <p>{{item.title}}</p>
                    </div>
                    <div class="icon">
                        <p>▶️</p>
                    </div>
                </section>
                <div class="contentTasks__container--btns" v-if="showButtons">
                    <button class="btn" v-if="show" @click="editTask(item)">Editar</button>
                    <button class="btn" v-if="show" @click="done(index+1)">Realizada</button>
                    <button class="btn" v-if="show" @click="eliminar(index)">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Modal from "../../components/AdminTasks.vue"
    import ModalEdicion from "../../components/EditTask.vue"
    export default {
        components: {
            Modal,
            ModalEdicion
        },
        data() {
            return {
                showButtons: false,
                showModal: false,
                showModalEditar: false,
                showModalEdit: false,
                count: 0,
                show: false,
                data: [],
                item: {},
                search: ''
            }
        },
        computed: {
            items() {
                return this.data.filter(item => {
                    return item.title.toLowerCase().includes(this.search.toLowerCase()) || item.description.toLowerCase().includes(this.search.toLowerCase());
                });
            },
        },
            methods: {
                done(index) {
                    document.getElementById(index).style.opacity = "0.8"
                    document.getElementById(index).innerHTML = "✔️"
                    document.getElementById(index).style.background = "grey"
                    document.getElementById(index).style.paddingTop = "2px"
                    document.getElementById(index).style.paddingBottom = "3px"
                    this.count++
                },
                showTasks() {
                    this.show = !this.show

                },
                async getTasks() {
                    let response = await this.$store.dispatch("tasks/getTasks");
                    this.data = response
                },
                getModal() {
                    this.showModal = !this.showModal
                },
                showBtn() {
                    this.showButtons = !this.showButtons
                },
                editTask(item) {
                    this.showModalEdit = true
                    this.item = item
                },
                async saveChanges(item) {
                    const payload = {
                        'id': item._id,
                        'task': item
                    }
                    console.log(payload)
                    await this.$store.dispatch("tasks/editarTask", payload);
                    location.reload()
                },
                async eliminar(index) {
                    const id = this.data[index]._id
                    console.log(id)
                    await this.$store.dispatch("tasks/deleteTask", id);
                    location.reload()

                }
            },
            created() {
                this.getTasks()
            }
        }
</script>
<style lang="scss">
    .contentTasks {
        position: relative;
        background: #fff;
        display: flex;
        justify-content: center;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;

        &__container {
            width: 70%;
            height: 80%;
            border: 1px solid lightgrey;
            border-radius: 6px;
            margin-bottom: 4%;
            box-shadow: 2px 3px 18px 4px rgba(75, 71, 71, 0.075);

            &--header {
                display: flex;
                justify-content: space-between;
                padding: 0 2%;
            }

            &--headerLeft {
                display: flex;
                gap: 25px;

                :nth-child(1) {
                    padding: 20px 0 0 0;
                }
            }

            &--headerRight {
                display: flex;
                gap: 25px;

                :nth-child(1) {
                    padding-top: 15px;

                    :nth-child(1) {
                        margin-bottom: -2%;
                    }

                }

                :nth-child(2) {
                    padding-top: 20px;
                    margin-left: -5%;
                }
            }

            &--line {
                height: 1px;
                background-color: lightgray;
                width: 94%;
                margin: 0 3%;
            }

            &--modal {
                position: absolute;
                right: 30%;
                top: -10%;
            }

            &--buttons {
                display: flex;
                justify-content: space-between;
                padding: 1% 4%;
            }

            &--btnShow {
                border: 1px solid lightgray;
                padding: 1% 3.5%;
                border-radius: 4px;
                color: green;
                cursor: pointer;
            }
            &--search{
                padding-left: 5px;
                width: 250px;
                border: 1px solid green;
                outline: none;
                border-radius: 6px;
                &::placeholder{
                    font-size: 16px;
                }
            }

            &--btnAdd {
                padding: 1% 3.5%;
                border-radius: 4px;
                background-color: green;
                color: #fff;
                cursor: pointer;
            }

            &--tasks {
                display: flex;
                justify-content: space-between;
                padding: 0 3% 0 0;
                cursor: pointer;

                .task {
                    display: flex;
                    gap: 10px;

                    :nth-child(1) {
                        width: 25px;
                        height: 20px;
                        border-radius: 50%;
                        border: solid 1px lightgray;
                        text-align: center;
                        padding-top: 5px;
                    }

                    :nth-child(2) {
                        padding-top: 5px;

                        &::first-letter {
                            text-transform: capitalize
                        }

                        ;
                    }
                }

                .icon {
                    padding-top: 20px;
                }
            }

            &--btns {
                margin-bottom: 1%;
                display: flex;
                justify-content: center;
                gap: 10px;
                .btn{
                    border: 1px solid green;
                    border-radius: 4px;
                    width: 10%;
                    height: 25px;
                    font-size: 16px;
                }
            }
        }
    }
</style>
<template>
    <div class="navTask">
        <div class="navTask__logo">EstateAssist</div>
        <div class="navTask__tabs" v-for="(estado, index) in estados" :key="index">
            <div class="navTask__tabs--items" :id="estado" @click="markTab(estado)">
                <p>{{index + 1}}</p>
                <p>{{estado}}</p>
            </div>
        </div>
        <div class="navTask__user">
            <div class="navTask__user--data">
                <p class="name__user">{{getNombre}}</p>
                <p class="estate__user">Estate of {{getNombre}}</p>
            </div>
            <div class="navTask__user--icon">🔽</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                estados: ['Estate Tasks', 'Estate Accounting', 'Estate Details', 'Distribution', 'Closure']
            }
        },
        computed: {
            getNombre() {
                return localStorage.getItem('nombre').toUpperCase()
            }
        },
        methods: {
            markTab(estado) {
                let div = document.getElementById(estado)
                if (document.getElementById(estado).id === estado) {
                    div.style.borderBottom = '3px solid green'
                    div.firstChild.style.background = 'green'
                    div.firstChild.style.color = '#fff'
                }
            }
        }
    }
</script>
<style lang="scss">
    .navTask {
        display: flex;
        background: #fff;
        justify-content: space-around;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border-bottom: 1px solid lightgray;

        &__logo {
            padding-top: 30px;
            font-weight: bold;
            cursor: pointer;
            font-size: 20px;
        }

        &__tabs {
            display: flex;
            gap: 20px;

            &--items {
                display: flex;
                gap: 8px;
                cursor: pointer;
                padding-top: 15px;

                :nth-child(1) {
                    width: 20px;
                    height: 17px;
                    border-radius: 50%;
                    border: 1px solid grey;
                    text-align: center;
                    padding-top: 2px;
                    color: grey;
                }

                :nth-child(2) {
                    padding-top: 3px;
                }
            }
        }

        &__user {
            display: flex;

            .estate__user {
                margin-top: -10px;
            }

            &--data {
                :nth-child(1) {
                    font-size: 22px;
                    margin-bottom: 7%;
                    font-weight: bold;
                }
                :nth-child(2){
                    font-size: 15px;
                    color: lightgray;
                }
            }

            &--icon {
                padding-top: 35px;
            }
        }
    }
</style>
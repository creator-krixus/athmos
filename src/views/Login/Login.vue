<template>
    <div class="login">
        <form class="login__form" @submit.prevent="onSubmit">
            <input class="login__form--data" type="text" v-model="usuario.email" placeholder="Email/Usuario">
            <input class="login__form--data" type="password" v-model="usuario.password" placeholder="Password">
            <button type="submit" class="login__form--btn">Ingresar</button>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                usuario: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async onSubmit() {
                await this.$store.dispatch("login/login", this.usuario);
                if (localStorage.getItem('token') != null) {
                    this.$router.push({
                        name: "task"
                    });
                }
                this.usuario.email = '',
                this.usuario.password = ''
            }
        }
    }
</script>
<style lang="scss" scoped>
    .login {
        height: 80vh;
        &__form {
            width: 30%;
            height: 40%;
            padding: 3% 3% 0 3%;
            display: flex;
            flex-direction: column;
            margin-top: 10%;
            opacity: 0.7;
            border: solid 1px rgba(189, 224, 236, 0.588);
            border-radius: 6px;
            text-align: center;
            background: #084d6e;
            margin-left: auto;
            margin-right: auto;
            
            &--data {
                width: 100%;
                height: 35px;
                margin-bottom: 10%;
                border-radius: 4px;
                border: 0;
                outline: none;
                &::placeholder{
                    color: black;
                    font-size: 16px;
                }
            }

            &--btn {
                width: 40%;
                margin-left: 32%;
                background: rgba(189, 224, 236, 0.588);
                border: none;
                padding: 1.5%;
                border-radius: 6px;
                font-size: 20px;
                color: black;

                &:hover {
                    color: #fff;
                    cursor: pointer;
                    
                }
            }
        }
    }
</style>
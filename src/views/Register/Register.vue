<template>
    <div class="login">
        <form class="login__form" @submit.prevent="onSubmit">
            <input class="login__form--data" type="text" v-model="form.email" placeholder="Email">
            <input class="login__form--data" type="text" v-model="form.nombre" placeholder="Nombre">
            <input class="login__form--data" type="password" v-model="form.password" placeholder="Password">
            <input class="login__form--data" type="password" v-model="form.confirmPassword"
                placeholder="Confirmar password">
            <button type="submit" class="login__form--btn">Registrar</button>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    email: '',
                    nombre: '',
                    password: '',
                    confirmPassword: '',
                }
            }
        },
        methods: {
            async onSubmit() {
                if (this.form.password === this.form.confirmPassword) {
                    await this.$store.dispatch("register/register", this.form);
                    this.form.email = ''
                    this.form.nombre = ''
                    this.form.password = ''
                    this.form.confirmPassword = ''
                    this.$router.push({ path: '/login' })
                } else {
                    alert('Uno o varios campos no corresponden')
                    this.form.email = ''
                    this.form.nombre = ''
                    this.form.password = ''
                    this.form.confirmPassword = ''
                    this.$router.push({ path: '/login' })
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .login {
        height: 80vh;

        &__form {
            width: 30%;
            padding: 3%;
            display: flex;
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10%;
            opacity: 0.7;
            border: solid 1px rgba(189, 224, 236, 0.588);
            background: #084d6e;
            border-radius: 6px;

            &--data {
                width: 100%;
                height: 35px;
                margin-bottom: 5%;
                border-radius: 4px;
                border: 0;
                outline: none;

                &::placeholder {
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
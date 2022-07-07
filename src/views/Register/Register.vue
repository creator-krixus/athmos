<template>
    <div class="login">
        <form class="login__form" @submit.prevent="onSubmit">
            <input class="login__form--data" type="text" v-model="form.email" placeholder="Email">
            <input class="login__form--data" type="text" v-model="form.nombre" placeholder="Nombre">
            <input class="login__form--data" type="password" v-model="form.password" placeholder="Password">
            <input class="login__form--data" type="password" v-model="form.confirmPassword" placeholder="Confirmar password">
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
                } else {
                    alert('Uno o varios campos no corresponden')
                    this.form.email = ''
                    this.form.nombre = ''
                    this.form.password = ''
                    this.form.confirmPassword = ''
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
            padding: 0 10%;
            display: flex;
            flex-direction: column;
            margin-left: 60%;
            padding: 2%;
            opacity: 0.7;
            border: solid 1px rgba(189, 224, 236, 0.588);
            background: blue;
            border-radius: 6px;

            &--data {
                width: 100%;
                height: 35px;
                margin-bottom: 5%;
                border-radius: 4px;
                border: 0;
                background: rgba(189, 224, 236, 0.588);
                outline: none;
            }

            &--btn {
                width: 25%;
                margin-left: 40%;
                background: red;
                border: none;
                padding: 1.5%;
                border-radius: 6px;

                &:hover {
                    color: #fff;
                    cursor: pointer;
                    transform: scale(1.1);
                }
            }
        }
    }
</style>
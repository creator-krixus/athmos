<template>
    <div class="nav">
        <div class="nav__logo">
            <router-link to="/">
                <img class="nav__logo--logo"
                    src="https://www.iconshock.com/image/Vista/Project_management/task_completed"
                    alt="">
            </router-link>
        </div>
        <div class="nav__routes">
            <router-link to="/" class="nav__routes--item">Home</router-link>
            <router-link class="nav__routes--item" to="register">Registrarse</router-link>
            <router-link class="nav__routes--item" to="login">Login</router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .nav {
        display: flex;
        // background: red;
        justify-content: space-between;
        padding: 1%;

        &__logo {
            &--logo {
                margin-top: 5%;
                margin-left: 40%;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                cursor: pointer;
            }
        }

        &__routes {
            display: flex;
            justify-content: space-around;
            gap: 1rem;
            padding-right: 5%;

            &--item {
                font-size: 1.5rem;
                padding: 10% 0;
                color: black;
                text-decoration: none;
            }
        }
    }
</style>
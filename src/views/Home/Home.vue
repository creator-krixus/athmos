<template>
    <div class="home">
        <div class="home__slogan">
            <p class="home__slogan--item">Crear,</p>
            <p class="home__slogan--item">Organizar,</p>
            <p class="home__slogan--item">Finalizar</p>
        </div>
        <div class="home__slogan--action">
            <p>La app que te ayuda a tener un control de todas tus tareas.</p>
        </div>
    </div>
</template>
<style lang="scss">
    .home {
        padding: 13% 0 0 5%;
        height: 100%;
        &__slogan {
            &--item {
                font-size: 60px;
            }
            :nth-child(2) {
                width: 25%;
                border-radius: 6px;
                background: orange;
                margin-top: -50px;
                animation: change 6s linear infinite;
            }
            :nth-child(1),
            :nth-child(3){
                margin-top: -50px;
                color: black;
            }

            &--action{
                color: rgb(62, 156, 106);
                padding: 1%;
                font-size: 1.5em;
            }
        }

        @keyframes change {
            0% {
                width: 0;
            }

            100% {
                width: 25%;
            }

        }
    }
</style>
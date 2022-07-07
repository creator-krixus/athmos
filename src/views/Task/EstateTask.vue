<template>
    <div class="estateTask">
        <div class="estateTask__icon">
            <img class="estateTask__icon--image"
                src="https://img.freepik.com/vector-gratis/mujer-joven-sentada-leyendo-enorme-pila-libros-ilustracion-vector-plano-dibujos-animados-aislado-sobre-fondo-blanco-libro-lectura-aprendizaje-estudiante-pasatiempo-ocio-o-aficion-nina_419010-250.jpg?w=2000"
                alt="women">
        </div>
        <div class="estateTask__info">
            <p class="estateTask__info--title">Estate Tasks</p>
            <section class="estateTask__info--container">
                <p class="subtitle">Estate Tasks Guide 🔽</p>
            </section>
        </div>

    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss">
    .estateTask {
        display: flex;
        background: #fff;
        justify-content: center;

        &__icon {
            &--image {
                width: 200px;
                height: 250px;
            }
        }

        &__info {
            padding-top: 100px;
            line-height: 10px;

            &--title {
                font-size: 27px;
                font-weight: bold;
            }
            &--container{
                .subtitle{
                    color:green
                }
            }
        }
    }
</style>
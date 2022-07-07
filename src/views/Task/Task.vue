<template>
    <div class="task">
        <NavTask />
        <EstateTask />
        <ContentTask />
    </div>
</template>
<script>
import NavTask from './NavTask.vue'
import EstateTask from './EstateTask.vue'
import ContentTask from './ContentTasks.vue';
export default {
    components:{
        NavTask, EstateTask, ContentTask
    }
}
</script>
<style lang="scss">
.task{
    padding: 2% 3%;
}
</style>
<!-- 单例模式下通用的子应用挂载视图 -->

<template>
    <div class="MicroApp">
        <MicroRoot v-for="app in apps" :key="app.name" :appName="app.name" />
    </div>
</template>

<script>
    import apps from './apps'
    import MicroRoot from './MicroRoot'

    export default {
        name: 'MicroApp',
        components: {
            MicroRoot
        },
        data () {
            return {
                apps: apps.apps
            }
        }
    }
</script>

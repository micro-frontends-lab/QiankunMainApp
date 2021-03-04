<!-- 子应用挂载组件，通常用于具体视图中布局子应用。 -->

<template>
    <div class="MicroRoot" style="position: relative" ref="root" v-show="shouldBeActive"></div>
</template>

<script>
    import apps from './apps'

    export default {
        name: 'MicroRoot',
        props: {
            appName: {
                type: String,
                required: true
            }
        },
        computed: {
            shouldBeActive () {
                let matchingApps = this.$route.meta.apps
                return matchingApps && matchingApps.includes(this.appName)
            }
        },
        mounted () {
            let appWrapper = apps.appsStore[this.appName].appWrapper
            this.$refs.root.appendChild(appWrapper)
        }
    }
</script>

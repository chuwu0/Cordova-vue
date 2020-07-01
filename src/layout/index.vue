<template>
    <div class="layout-view">
        <header>
            <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="按钮"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
            />
        </header>
        <router-view />
        <footer>
            <bottomTab />
        </footer>
    </div>
</template>

<script>
import bottomTab from './components/bottomTab';
export default {
    name: 'Layout',
    components: {
        bottomTab
    },
    methods: {
        onClickLeft () {

        },
        onClickRight () {
            
        }
    }
}
</script>

<style scoped>

</style>

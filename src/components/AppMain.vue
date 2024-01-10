<script>
import CardList from './CardList.vue'
export default {
    name: 'AppMain',
    components:{
        CardList
    }
}
</script>
<template lang="">
    <main>
        <CardList />
    </main>
</template>
<style lang="scss" scoped>
main{
    background-color: rgb(212, 143, 56);
}
</style>
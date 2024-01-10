<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'CardList',
    data(){
        return{
            store,
        }
    },
    methods: {
        getCardList(){
            axios.get(this.store.endpoint).then((response) => {
                this.store.cardlist = response.data.data
            })
        }

    },
    mounted(){
        this.getCardList()
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3" v-for="card, index in store.cardlist" :key="index">
                <div class="cardlist text-center">
                    <img :src="card.card_images[0].image_url" class="img-fluid" alt="">
                    <h3>{{ card.name }}</h3>
                    <p>{{ card.archetype }}</p>

                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    
</style>
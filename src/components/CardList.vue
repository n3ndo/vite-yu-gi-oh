<script>
import axios from 'axios';
import { store } from '../store.js';
import AppSearch from './AppSearch.vue'
export default {
    name: 'CardList',
    components: {
        AppSearch
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getCardList() {

            let apiUrl = store.apiUrl;
            if (store.searchArchetype !== '') {
                apiUrl += `&archetype=${store.searchArchetype}`;

            }
            axios.get(apiUrl).then((response) => {
                this.store.cardlist = response.data.data
            })


        },
        filterCardsArchetype() {
            this.getCardList();
        }



    },
    mounted() {
        this.getCardList()
    }
}
</script>
<template lang="">
    <div class="container pb-5">
        <AppSearch @filter_cards="filterCardsArchetype"/>
        <div class="row">
            <div class="col-6 col-md-3 d-flex justify-content-center" v-for="card, index in store.cardlist" :key="index">
                <div class="cardlist text-center my-3">
                    <img :src="card.card_images[0].image_url" class="img-fluid" alt="">
                    <h3>{{ card.name }}</h3>
                    <p>{{ card.archetype }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';

.row {
    background-color: white;

    .cardlist {
        max-width: 200px;
        height: 95%;
        background-color: rgb(212, 143, 56);

        h3 {
            color: white;
        }
    }
}
</style>
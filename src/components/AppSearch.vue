<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'AppSearch',
    data() {
        return {
            store,
            archetypeList: [],
        }
    },
    created() {
        this.getArchetypeList();
    },
    methods: {
        getArchetypeList() {
            axios.get(store.apiArchetypeUrl).then((response) => {
                console.log(response.data);
                this.archetypeList = response.data.slice(0, 15);
            })
        }
    }
}
</script>
<template lang="">
    <div class="container mb-3">
        <div class="row">
            <select class="select-archetype" v-model="store.searchArchetype" @change="$emit('filter_cards')">
                <option value="">Tutti</option>
                <option :value="archetype.archetype_name" v-for="archetype, index in archetypeList" :key="index">
                    {{ archetype.archetype_name }}
                </option>
            </select>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.select-archetype {
    background-color: white;
    border: none;
    padding: 4px;
    width: 100px;
    margin-top: 10px;
}
</style>
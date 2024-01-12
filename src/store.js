import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=48&offset=0 ',
    cardlist: [],
    apiArchetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    searchArchetype: '',
})
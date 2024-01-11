<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
            archetypeArray: [
                'Alien',
                'Noble Knight',
                'Melodious',
                'Archfiend'
            ],
        }
    }
}
</script>
<template lang="">
    <div class="container mb-3">
        <div class="row">
            <div class="col-auto">
                <label for="filter" class="control-label">Archetype</label>
                <select id="filter" v-model="store.archetype" class="form-select">
                    <option value="" selected></option>
                    <option v-for="archetype, index in archetypeArray" :key="index" :value="archetype">
                        {{ archetype }}
                    </option>
                </select>
            </div>
            <div class="col-3">
                <button class="btn btn-primary" @click="$emit('perform_select')">Select</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
</style>
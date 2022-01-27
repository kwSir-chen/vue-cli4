<template>
    <div class="hello">
        {{ a }}
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    name: 'AsyncComponent',
    async setup() {
        let a = ref(111)
        await new Promise((res) => {
            setTimeout(() => {
                res(123)
            }, 3000)
        })
        await new Promise((res) => {
            setTimeout(() => {
                res(123)
            }, 2000)
        })
        return { a }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>

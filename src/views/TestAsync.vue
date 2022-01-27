<template>
    <suspense>
        <template #default>
            <div class="home">
                <img alt="Vue logo" src="../assets/logo.png" />
                {{ t }}
                <!-- <AsyncComp /> -->
                <AsyncComponent />
            </div>
        </template>
        <template #fallback>
            <div>Loading...</div>
        </template>
    </suspense>
</template>

<script lang="ts">
// @ is an alias to /src
import AsyncComponent from '@/components/AsyncComponent.vue'
import { ref } from 'vue'

export default {
    name: 'Home',
    components: {
        AsyncComponent,
        // AsyncComp,
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    setup() {
        console.log('setup')
        // await new Promise((res)=>{
        //   setTimeout(()=>{
        //     res(123)
        //   },5000)
        // })
        let t = ref(333)

        return { t }
    },
}
</script>

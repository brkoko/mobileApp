<script setup>
    import Galleria from 'primevue/galleria';
    import { ref, onMounted, computed } from "vue";
    import { useRoute } from 'vue-router';
    import phoneData from '@/data/phones.json'
    const route = useRoute()

    const phoneId = route.params.id
    const phone = phoneData.find(p => p.id == phoneId)
    // onMounted(() => {
    //     PhotoService.getImages().then((data) => (images.value = data));
    // });
   
// const images = ref();
// const responsiveOptions = ref([
//     {
//         breakpoint: '1300px',
//         numVisible: 4
//     },
//     {
//         breakpoint: '575px',
//         numVisible: 1
//     }
// ]);
</script>
<template>
    <!-- <div class="card">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.phone.img" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </div> -->
    {{ phone.img }}
</template>





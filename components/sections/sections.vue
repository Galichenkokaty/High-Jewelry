<template>
    <div class="sections">
        <div class="sections__items grid --temp-col-2">
            <NuxtLink :to="section.link" v-for="(section, index) in sections" class="sections__item flex --direction-column --align-center --just-center">
                <div class="sections__item-content flex --direction-column --align-center">
                    <NuxtLink :to="section.link" class="sections__item-desc link h5">Перейти в раздел </NuxtLink>
                    <div class="sections__item-title" v-html="section.name"></div>
                    <span class=""></span>
                </div>
                <div class="sections__item-thumb">
                    <div class="sections__item-mask"></div>
                    <NuxtPicture class="sections__item-img thumb" :src="section.img" />
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
    import '~/components/sections/__sections.css'

    const sections = [
        {
            name: 'Для мужчин',
            link: '#',
            img: 'sections/man.jpg'
        },
        {
            name: 'Для женщин',
            link: '#',
            img: 'sections/woman.jpg'
        },
    ]
</script>

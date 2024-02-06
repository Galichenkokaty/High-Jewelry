<template>
    <div class="location grid">
        <div class="location__search flex --direction-column  --just-center">
            <div class="location__search-title h2">Найди <br>бутик около себя</div>
            <div class="location__search-desc p --l mt-16">Введите свой адрес и узнайте о самых ближайших<br> бутиках к вам</div>
            <div class="location__search-input">
                <input placeholder="Введите адрес" />
                <span class="location__search-input-arrow">
                    <NuxtIcon class="thumb" name="arrow" filled/>
                </span>
            </div>
        </div>
        <div class="location__map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9de02b83390601b2188bbc5d23f9538b2860c0ded5280b3d18e8e3e724ad7023&amp;source=constructor" frameborder="0"></iframe>
        </div>
    </div>
</template>
<script setup>
    import '~/components/location/__location.css'
</script>
<template>
    <div class="social flex --direction-column">
        <div class="social__title center-wrap">Мы<br> в социальных сетях</div>
        <div class="social__carusel swiper flex --direction-column --align-end">
            <div class="swiper-wrapper">
                <div v-for="(slide, index) in slides" :key="index" class="social__slide swiper-slide">
                    <div class="social__slide-thumb">
                        <NuxtPicture class="social__slide-img thumb" :src=slide />
                    </div>
                </div>
            </div>
            <div class="social__carusel-bottom flex --just-space center-wrap">
                <div class="social__carusel-btns flex">
                    <div class="social__carusel-btn">
                        <NuxtIcon name="social/Facebook" class="social__carusel-btn-img thumb" filled />
                    </div>
                    <div class="social__carusel-btn">
                        <NuxtIcon name="social/Instagram" class="social__carusel-btn-img thumb" filled/>
                    </div>
                </div>
                <div class="social__nav flex --align-center">
                    <div class="social__nav-button swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                    <div class="social__nav-button swiper-button-next"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import '~/components/social/__social.css'
    import Swiper from 'swiper/bundle';
    import 'swiper/css/bundle';
    
    const slides = [
        'social/social-img-1.jpg',
        'social/social-img-2.jpg',
        'social/social-img-3.jpg',
        'social/social-img-4.jpg',
        'social/social-img-5.jpg']
    onMounted(()=> {
        const swiper = new Swiper('.swiper',{
            slidesPerView: 3.25,
            loop: true,
            spaceBetween: 10,
            slidesPerGroup: 1,
            autoplay: {
                delay: 4000,
            },
            speed: 1500,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    }) 

</script>
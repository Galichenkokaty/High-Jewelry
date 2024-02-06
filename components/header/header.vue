<template>
    <div class="header flex --align-center ">
        <div class="header__content center-wrap --gap-88 grid --temp-col-2 --align-center">
            <div class="header__text flex --direction-column">
                <h1 class="header__title">HIGH JEWELRY</h1>
                <div class="header__sub-title flex --align-center"><span></span>Смотреть коллекцию</div>
            </div>
            <div class="header__ring">
                <NuxtPicture class="header__ring-img thumb" src="/ring.png" />
            </div>
        </div>
        <div class="header__dark-block flex --direction-column --just-end --align-end">
            <div class="header__info-ring flex --direction-column --align-end">
                <div class="header__info-ring-name p --p">КОЛЬЦО TRINITY, Cartier</div>
                <div class="header__info-ring-materials p --l">Белое золото, бриллианты</div>
                <div class="header__info-ring-price p --l">498 000 ₽</div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import '~/components/header/__header.css'
    
</script>
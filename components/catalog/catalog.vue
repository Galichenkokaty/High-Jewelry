<template>
    <div class="catalog ">
        <div class="catalog__items grid">
            <div v-for="(item,index) in catalog" class="catalog__item flex --direction-column --align-center"> 
                <div class="catalog__item-thumb">
                    <NuxtPicture class="catalog__item-img thumb" :src=item.img />
                </div>
                <div class="catalog__item-info flex --direction-column">
                    <div class="header__info-ring-name p --p" v-html="item.name"></div>
                    <div class="header__info-ring-materials p --l" v-html="item.material"></div>
                    <div class="header__info-ring-price p --l" v-html="item.price"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import '~/components/catalog/__catalog.css'

    const catalog = [
        {
            name: 'КОЛЬЦО jow’s, Cartier',
            material:'Белое золото, бриллианты',
            price: '674 000 ₽',
            img: "catalog/jow's.png"
        },
        {
            name: 'КОлье etoile, HUBLOT',
            material:'Белое золото, бриллианты',
            price: '539 000 ₽',
            img: 'catalog/etoile.jpg'
        },
        {
            name: 'Серьги moon, HUBLOT',
            material:'Желтое золото, сапфир',
            price: '498 000 ₽',
            img: 'catalog/moon.png'
        },
        {
            name: 'КОЛЬЦО croix, Cartier',
            material:'Желтое, белое, розовое золото',
            price: '432 000 ₽',
            img: 'catalog/croix.png'
        },
        {
            name: 'серьги win, BLANCPAIN',
            material:'Желтое золото, жемчуг',
            price: '398 000 ₽',
            img: 'catalog/win.png'
        },
    ]
</script>

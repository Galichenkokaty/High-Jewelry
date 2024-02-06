<template>
    <div class="footer">
        <div class="footer-wrap center-wrap flex --direction-column">
            <div class="footer__nav flex">
                <div v-for="(item, index) in nav" class="footer__nav-item">
                    <NuxtLink :to="item.link" class="link">{{ item.name }}</NuxtLink>
                </div>
            </div>
            <div class="footer__content grid --temp-col-2">
                <div class="nav__logo">
                    <NuxtIcon class="nav__logo-img thumb" name="logo-white" filled/>
                </div>
                <div class="footer__content-block flex">
                    <div class="footer__content-info flex --direction-column">
                        <div class="footer__content-block-title">телефон горячей линии</div>
                        <div class="footer__content-tel">+7 800 456 456</div>
                        <div class="social__carusel-btns flex">
                            <div class="social__carusel-btn">
                                <NuxtIcon name="social/Facebook" class="social__carusel-btn-img thumb" filled />
                            </div>
                            <div class="social__carusel-btn">
                                <NuxtIcon name="social/Instagram" class="social__carusel-btn-img thumb" filled/>
                            </div>
                        </div>
                    </div>
                    <div class="footer__content-news flex --direction-column">
                        <div class="footer__content-block-title">подпишитесь на новости</div>
                        <div class="footer__content-news-input location__search-input">
                            <input placeholder="Введите E-mail" />
                            <span class="location__search-input-arrow">
                                <NuxtIcon class="thumb" name="arrow" filled/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import '~/components/footer/__footer.css'
    const nav = [
        {
            name: 'работа в компании',
            link: '#'
        },
        {
            name: 'условия пользования',
            link: '#'
        },
        {
            name: 'выходные данные',
            link: '#'
        },
        {
            name: 'политика конфиденциальности',
            link: '#'
        },
        {
            name: 'карта сайта',
            link: '#'
        },
    ]
</script>
<template>
    <div class="nav" ref="navRef">
        <div class="nav-wrap center-wrap flex --just-space --align-center">
            <div class="nav__logo">
                <NuxtIcon class="nav__logo-img thumb" name="logo" filled/>
            </div>
            <div class="nav__info flex">
                <div class="nav__items flex">
                    <div class="nav__item">
                        <NuxtIcon class="nav__item-img thumb" name="nav/like" filled/>
                    </div>
                    <div class="nav__item">
                        <NuxtIcon class="nav__item-img thumb" name="nav/account" filled/>
                    </div>
                    <div class="nav__item">
                        <NuxtIcon class="nav__item-img thumb" name="nav/basket" filled/>
                    </div>
                </div>
                <div class="nav__menu flex --direction-column">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import '~/components/nav/__nav.css'
    const navRef = ref(null); // obtain the reference
    onMounted(() => {

        window.addEventListener("scroll", () => {
            var curr = window.scrollY;

            // You can style header-bg for style purpose

            if (curr >= 1) {
                navRef.value.classList.add("nav-bg");
            }else{
                navRef.value.classList.remove("nav-bg");
            }
        });
        return {
            navRef
        }
    });
</script>
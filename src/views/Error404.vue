<template>
    <section class="error_info">
        <div class="cont">
            <img src="@/assets/images/error_404.svg" alt="" class="img">

            <div class="title" v-html="$t('message.error_title_404')"></div>

            <router-link :to="router.options.history.state.back ? router.options.history.state.back : '/'" class="back_btn">
                {{ $t('message.btn_back_home') }}
            </router-link>
        </div>
    </section>
</template>


<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()
</script>
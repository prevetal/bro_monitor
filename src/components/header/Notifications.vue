<template>
    <section class="notifications" v-if="store.tooltip">
        <div class="data" :class="{ animate: store.tooltipAnimate }">
            <div class="icon">
                <svg><use xlink:href="@/assets/sprite.svg#ic_notification"></use></svg>
            </div>

            <span>{{ store.tooltip }}</span>
        </div>
    </section>
</template>


<script setup>
    import { useGlobalStore } from '@/stores'

    const store = useGlobalStore()
</script>


<style scoped>
    .notifications
    {
        width: calc(100% - 497px);

        --shine-degree: 120deg;
        --shine-color: rgba(255, 255, 255, .15);
        --shine-effect: linear-gradient( var(--shine-degree), transparent, var(--shine-color), transparent );
        --shine-transition: all .65s ease-in-out;
    }


    .notifications .data
    {
        font-size: 14px;
        line-height: 150%;

        position: relative;

        display: flex;
        overflow: hidden;

        min-height: 92px;
        padding: 20px;

        transition: .2s linear;

        border-radius: 20px;
        background: #141414;

        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        font-feature-settings: 'pnum' on, 'lnum' on;
    }


    .notifications .icon
    {
        display: flex;

        width: 52px;
        height: 52px;

        border: 1px solid rgba(217, 217, 217, .1);
        border-radius: 50%;

        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }

    .notifications .icon svg
    {
        display: block;

        width: 30px;
        height: 30px;
    }

    .notifications .icon + *
    {
        width: calc(100% - 67px);
        margin-left: auto;
    }

    .notifications span
    {
        display: -webkit-box;
        overflow: hidden;

        text-overflow: ellipsis;

        align-self: center;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }


    .notifications .data:before
    {
        position: absolute;
        top: 0;
        left: -100%;

        width: 20%;
        height: 100%;

        content: '';

        background: var(--shine-effect);
    }

    .notifications .data.animate:before
    {
        animation: shine 5s linear;
    }


    @keyframes shine
    {
        0%
        {
            left: -100%;

            transition-property: left;
        }
        11.5044247788%,
        100%
        {
            left: 100%;

            transition-property: left;
        }
    }


    .notifications .data.animate .icon svg
    {
        animation-name: swing;
        animation-duration: 1s;
    }


    @keyframes swing
    {
        20%
        {
            transform: rotate(20deg);
        }
        40%
        {
            transform: rotate(-15deg);
        }
        60%
        {
            transform: rotate(10deg);
        }
        80%
        {
            transform: rotate(-10deg);
        }
        100%
        {
            transform: rotate(0deg);
        }
    }



    @media print, (max-width: 1599px)
    {
        .notifications .data
        {
            font-size: 13px;
        }
    }



    @media print, (max-width: 1279px)
    {
        .notifications
        {
            display: none;

            width: 100%;
            margin-top: 12px;

            order: 3;
        }
    }
</style>
<template>
    <section class="network_page">
        <div class="cont">
            <div class="grid row">
                <section class="col">
                    <!-- Networks -->
                    <Networks />
                </section>


                <section class="col_main">
                    <div class="tabs">
                        <button class="btn" :class="{'active': activeTab == 1}" @click.prevent="activeTab = 1">
                            {{ $t('message.network_tab_network') }}
                        </button>

                        <button class="btn" :class="{'active': activeTab == 2}" @click.prevent="activeTab = 2">
                            {{ $t('message.network_tab_accounts') }}
                        </button>

                        <button class="btn" :class="{'active': activeTab == 3}" @click.prevent="activeTab = 3">
                            {{ $t('message.network_tab_IBC_Relaying') }}
                        </button>

                        <button class="btn" :class="{'active': activeTab == 4}" @click.prevent="activeTab = 4">
                            {{ $t('message.network_tab_validators') }}
                        </button>
                    </div>


                    <div class="head">
                        <div class="page_title">
                            {{ $t('message.network_network_page_title') }}
                        </div>

                        <div class="types">
                            <button class="btn" :class="{'active': activeType == 1}" @click.prevent="activeType = 1">
                                <svg><use xlink:href="@/assets/sprite.svg#ic_network_data_type_blocks"></use></svg>
                                <span>Blocks</span>
                            </button>

                            <button class="btn" :class="{'active': activeType == 2}" @click.prevent="activeType = 2">
                                <svg><use xlink:href="@/assets/sprite.svg#ic_network_data_type_charts"></use></svg>
                                <span>Charts</span>
                            </button>

                            <button class="btn" :class="{'active': activeType == 3}" @click.prevent="activeType = 3">
                                <svg><use xlink:href="@/assets/sprite.svg#ic_network_data_type_params"></use></svg>
                                <span>Parameters</span>
                            </button>
                        </div>
                    </div>


                    <div class="charts" v-if="activeType == 1">
                        <div class="row">
                            <TokenPrice />


                            <div class="block">
                                <div class="btns">
                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_pin"></use></svg>
                                    </button>

                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_fullscreen"></use></svg>
                                    </button>
                                </div>

                                <div class="title">APR</div>

                                <div class="val">15.3%</div>

                                <div class="chart"></div>
                            </div>


                            <div class="block">
                                <div class="btns">
                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_pin"></use></svg>
                                    </button>

                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_fullscreen"></use></svg>
                                    </button>
                                </div>

                                <div class="title">Inflation</div>

                                <div class="val">24.7%</div>

                                <div class="chart"></div>
                            </div>


                            <MarketCap />


                            <div class="block">
                                <div class="btns">
                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_pin"></use></svg>
                                    </button>

                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_fullscreen"></use></svg>
                                    </button>
                                </div>

                                <div class="title">APY</div>

                                <div class="val">150%</div>

                                <div class="chart"></div>
                            </div>


                            <div class="block">
                                <div class="btns">
                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_pin"></use></svg>
                                    </button>

                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_fullscreen"></use></svg>
                                    </button>
                                </div>

                                <div class="title">Total amount of unbonded ATOM</div>

                                <div class="val">7 320 612</div>

                                <div class="chart"></div>
                            </div>


                            <PendingProposals />

                            <ActiveProposals />


                            <div class="block">
                                <div class="btns">
                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_pin"></use></svg>
                                    </button>

                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_fullscreen"></use></svg>
                                    </button>
                                </div>

                                <div class="title">Total amount of unbonded ATOM</div>

                                <div class="val">246 379 529</div>

                                <div class="chart"></div>
                            </div>


                            <div class="block">
                                <div class="btns">
                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_pin"></use></svg>
                                    </button>

                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_fullscreen"></use></svg>
                                    </button>
                                </div>

                                <div class="title">Total bonded ratio</div>

                                <div class="val">70.19%</div>

                                <div class="chart"></div>
                            </div>


                            <div class="block">
                                <div class="btns">
                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_pin"></use></svg>
                                    </button>
                                </div>

                                <div class="title">Total Supply</div>

                                <div class="val">351 021 947</div>
                            </div>


                            <div class="block">
                                <div class="btns">
                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_pin"></use></svg>
                                    </button>
                                </div>

                                <div class="title">Cosmos Circulating Supply</div>

                                <div class="val">351 022 192</div>
                            </div>


                            <div class="block">
                                <div class="btns">
                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_pin"></use></svg>
                                    </button>
                                </div>

                                <div class="title">Community Pool</div>

                                <div class="val">3 500 000</div>
                            </div>


                            <div class="block">
                                <div class="btns">
                                    <button class="btn">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_pin"></use></svg>
                                    </button>
                                </div>

                                <div class="title">Last Block Height</div>

                                <div class="val">15 886 830</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref } from 'vue'

    // Components
    import Networks from '@/components/Networks.vue'
    import TokenPrice from  '@/components/Network/Blocks/TokenPrice.vue'
    import MarketCap from  '@/components/Network/Blocks/MarketCap.vue'
    import PendingProposals from  '@/components/Network/Blocks/PendingProposals.vue'
    import ActiveProposals from  '@/components/Network/Blocks/ActiveProposals.vue'


    const activeTab = ref(1),
        activeType = ref(1)
</script>


<style>
    .grid
    {
        justify-content: space-between;
    }


    .col
    {
        width: 353px;
        max-width: 100%;
    }


    .col_main
    {
        width: calc(100% - 373px);
    }



    .tabs
    {
        display: flex;

        width: 100%;
        margin-bottom: 34px;

        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
        flex-wrap: nowrap;
    }


    .tabs .btn
    {
        color: #555;
        line-height: 100%;

        display: block;

        width: 100%;
        padding: 10px 0;

        text-align: left;
transition: .2s linear;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
    }

    .tabs .btn + .btn
    {
        margin-left: 8px;
    }

    .tabs .btn:hover,
    .tabs .btn.active
    {
        color: #950fff;
        font-weight: 500;

        border-color: #950fff;
    }



    .head{
        display: flex;
        justify-content: space-between;
        align-items:center;
        align-content: center;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }


    .head .page_title{
        font-size: 24px;
font-weight: 600;
    }


    .head .types{
        padding: 2px;
        border-radius: 12px;
border: 2px solid #212121;
background: #000;
        margin-left: auto;
        display: flex;
        justify-content: space-between;
        align-items:center;
        align-content: center;
        flex-wrap: wrap;  
    }


    .head .types .btn{
        color: rgba(255, 255, 255, 0.50);
transition: 0.2s linear;
font-size: 16px;
border-radius: 8px;
display: flex;
padding: 14px 8px;
        justify-content: center;
        align-items:center;
        align-content: center;
        flex-wrap: wrap;
    }

    .head .types .btn svg{
        display: block;
        width: 18px;
height: 18px;
margin-right: 4px;
    }

    .head .types .btn:hover,
    .head .types .btn.active{
        color: #fff;
        background: #212121;
    }



    .charts .row{
        align-items:stretch;
        align-content: stretch;
        margin-left: -11px;
        margin-bottom: -20px;
    }

    .charts .row > *{
        width: calc(33.333% - 11px);
        margin-left: 11px;
        margin-bottom: 20px;
    }

    .charts .row > *.mini{
        width: calc(16.666% - 11px);}


    .charts .block{
        padding: 12px 8px;
        border-radius: 16px;
border: 2px solid #212121;
background: #000;
min-height: 146px;
        position: relative;
    }


    .charts .block .link{
        position: absolute;
        top: 8px;
        right: 8px;
        
z-index: 5;
        color: #fff;
        text-decoration: none;
    }

    .charts .block .link svg{
        display: block;
        width: 24px;
height: 24px;
    }


    .charts .block .btns{
        display: flex;
        justify-content: flex-start;
        align-items:center;
        align-content: stretch;
        flex-wrap: wrap;
        position: absolute;
        top: 8px;
        right: 8px;
z-index: 5;
    }


    .charts .block .btns .btn{
        display: flex;
        border-radius: 50%;
        width: 34px;
height: 34px;
padding: 8px;
background: #353535;
transition: background 0.2s linear;
        justify-content: center;
        align-items:center;
        align-content: center;
        flex-wrap: wrap;  
    }

    .charts .block .btns .btn + .btn{
        margin-left: 4px;
    }

    .charts .block .btns .btn svg{
        display: block;
        width: 18px;
height: 18px;
    }


    .charts .block .btns .btn:hover,
    .charts .block .btns .btn.active{
        background: #950FFF;
    }


    .charts .block .title{
        width: calc(100% - 80px);
        font-size: 18px;
line-height: 120%;
margin-bottom: 24px;
position: relative;
z-index: 3;
    }


    .charts .block .val{
        font-size: 30px;
font-weight: 600;
line-height: 100%;
position: relative;
z-index: 3;
    }



    @media print, (max-width: 1599px)
    {
        .col
        {
            width: 324px;
        }

        .col_main
        {
            width: calc(100% - 344px);
        }
    }



    @media print, (max-width: 1439px)
    {
        .col
        {
            width: 300px;
        }

        .col_main
        {
            width: calc(100% - 320px);
        }
    }



    @media print, (max-width: 1359px)
    {
        .col
        {
            width: 280px;
        }

        .col_main
        {
            width: calc(100% - 300px);
        }
    }



    @media print, (max-width: 1279px)
    {
        .col,
        .col_main
        {
            width: 100%;
        }
    }



    @media print, (max-width: 479px)
    {
        .tabs
        {
            display: block;
            overflow: auto;

            width: calc(100% + 40px);
            margin: 0 -20px 20px;
            padding: 0 20px;

            white-space: nowrap;

            scrollbar-color: transparent transparent !important;
            scrollbar-width: thin !important;
        }

        .tabs::-webkit-scrollbar
        {
            display: none;

            width: 0 !important;
            height: 0 !important;

            background-color: transparent !important;
        }

        .tabs::-webkit-scrollbar-thumb
        {
            background-color: transparent !important;
        }


        .tabs .btn
        {
            display: inline-block;

            width: 120px;
            max-width: none;
            margin: 0;

            vertical-align: top;
        }
    }
</style>
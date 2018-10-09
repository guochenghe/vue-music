
<template>
    <div>
        推荐页面
        <slider>
            <div v-for="item in recommends">
                <a :href="item.linkUrl">
                    1122121
                </a>
            </div>
        </slider>
    </div>
</template>
<script>
/* eslint-disable */
    import getRecommond from 'api/recommend'
    import Slider from 'base/slider/slider'
    export default {
        data(){
            return {
                recommends:[]
            }
        },
        mounted() {
            this._getRecommond();
        },
        methods:{
            _getRecommond:()=>{
                getRecommond().then((res)=>{
                    this.recommends = res.data.slider;
                    console.log(this.recommends);
                })
            }
        },
        components:{
            Slider
        }
    }

</script>
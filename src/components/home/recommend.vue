<template>
    <div class='recom'>
        <ul>
            <li>
                <img src="./img/10@2x.png" alt="">
                <p>轻车上路，一路飙向爱的乌托邦</p>
                <span>安安静静做自己</span>
            </li>
            <li>
                <img src="./img/11@2x.png" alt="">
                <p>轻车上路，一路飙向爱的乌托邦 </p>
                <span>安安静静做自己</span>
            </li>
            <li>
                <img src="./img/12@2x.png" alt="">
                <p>轻车上路，一路飙向爱的乌托邦</p>
                <span>安安静静做自己</span>
            </li>
            <li>
                <img src="./img/10@2x.png" alt="">
                <p>轻车上路，一路飙向爱的乌托邦</p>
                <span>安安静静做自己</span>
            </li>
            <li>
                <img src="./img/11@2x.png" alt="">
                <p>轻车上路，一路飙向爱的乌托邦</p>
                <span>安安静静做自己</span>
            </li>
            <li>
                <img src="./img/12@2x.png" alt="">
                <p>轻车上路，一路飙向爱的乌托邦</p>
                <span>安安静静做自己</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.recom{
    ul{
        overflow: hidden;
        li{
            float:left;
            margin-bottom:.16rem;
            width:1.2rem;
            margin-right:.07rem;
            overflow: hidden;
            img{
                width:1.2rem;
                float:left;
            }
            p{
                float:left;
                text-align: left;
                margin:.08rem 0 .01rem 0;
                padding-left:.15rem;
                font-size:.12rem;
            }
            span{
                float:left;
                font-size:.12rem;
                color:rgb(153,153,153);
                padding-left:.15rem;
            }
        }
        li:nth-of-type(3n){
            margin-right:0px;
        }
    }
}
</style>



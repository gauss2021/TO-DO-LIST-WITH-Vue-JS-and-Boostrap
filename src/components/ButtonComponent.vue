<template>
    <div class="" style="width:250px">
        <div class="btn btn-warning" @click="action">{{nomButton}}</div>
    </div>
</template>

<script>


export default {
    name:'ButtonComponent',
    props:{
        nomButton:String
    },
    methods:{
        action(){
            console.log("action");
        }
    }
}
</script>
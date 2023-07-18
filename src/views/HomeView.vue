<template>
  <div id="home-cards">
    <div class="row">
      <div class="col-sm col-style" >
        <p> HOME PAGE </p>
      </div>
    </div>
  </div>
    
  
</template>

<script>
export default {
  data(){
    return {
    }
  },
  components:{
  },
  methods:{
  },
  created(){
  }
};
</script>

<style>
.col-style{
  padding: 10px;
}
.card-style{
  margin: 10px 0px !important;
}

#home-cards .v-list{
  height:250px !important;
  overflow-y:auto;
}

#home-cards .row{
  padding: 5% 5%;
}

</style>
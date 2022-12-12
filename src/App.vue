<template>
  <div id="app">
    <PremierComponent @addTask="ajouterTache" />
    <div class="container">
      <div class="col-7">
        <div class="row mt-4 justify-content-around">
          <ButtonComponent nomButton="Toutes les taches" />
          <ButtonComponent nomButton="Taches effectuee" />
          <ButtonComponent nomButton="Taches non effectuee" />
        </div> 
      </div>
      <div class="container mt-5" v-if="tasks.length>0">
        <ul class="list-group">
            <OneTask v-for="task in tasks" :id="task.id" :key="task.id" :taskName="task.name" :completed="task.completed"/>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
import PremierComponent from './components/PremierComponent.vue';
import ButtonComponent from './components/ButtonComponent.vue';
import OneTask from './components/OneTask.vue';

export default {
  name: 'App',
  components: {
    PremierComponent,ButtonComponent,OneTask
  },
  data:function(){
    return{
      tasks:[
        {
          id:0,
          name:"premiere tache",
          completed:false
        },
        {
          id:1,
          name:"Une deuxieme tache",
          completed:false
        },
        {
          id:2,
          name:"Une troisieme tache",
          completed:true
        },
        {
          id:3,
          name:"Une quatrieme tache",
          completed:false
        },
        {
          id:4,
          name:"premiere tache",
          completed:true
        },
      ],
    }
  },
  methods:{
    ajouterTache(e){
      console.log(this.tasks);
      console.log(e+"-----------------");
      this.tasks.push(e);
      console.log(this.tasks);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 30px;
}
</style>

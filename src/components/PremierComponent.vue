<template>
  <div class="container">
      <h1 class="text-center">To Do List with vue js 2</h1>
      <div class="row">
        <div class="col-7">
            <form @submit.capture="addNewTask">
                <label class="form-label">Entrer votre nouvelle tache</label>
                <input type="text" class="form-control w-100" name="newTask">
                <button type="submit" class="btn btn-primary w-100 mt-3">Ajouter une tache</button>
            </form>
        </div>
      </div>
  </div>    
</template>

<script>
export default {
  name: 'PremierComponent',
  methods:{
    addNewTask(event){
      event.preventDefault();
      let valueOfNewTask=event.target['newTask'].value;
      this.$emit('addTask',valueOfNewTask);
      event.target['newTask'].value='';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

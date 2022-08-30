<template>
  <div style="width:100%;max-width:500px;margin:auto;">
 <form @submit.prevent="handleSubmit">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Title</label>
    <input type="text" v-model="title" class="form-control">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Details</label>
    <textarea v-model="details" class="form-control" rows="3"></textarea>
  </div>
  <button type="submit" class="btn">Update Project</button>
  </form>

  </div>
</template>

<script>
export default {
     name:'EditProject',
     props:['id'],
     data() {
      return {
            title:'',
            details:'',
            complete:null,
            url:'http://localhost:3000/projects/'+this.id
      }
     },
     mounted() {
      fetch(this.url)
      .then(res=> res.json())
      .then(data=> {
            this.title=data.title;
            this.details=data.details;
            this.complete=data.complete;
      });
     },
     methods: {
          handleSubmit() {
        fetch(this.url, { 
               method: 'PATCH',
               headers: { 'Content-Type' : 'application/json' },
               body :JSON.stringify({
                  title: this.title,
                  details: this.details,
                  complete: this.complete
                  })
               })    //updated in db
        .then(()=> {
            this.$router.push('/');
        })         
        .catch((err)=> console.log(err.message));
    }
  }
}

</script>

<style scoped>
input, textarea{
  border: 1px solid #e90074;
}
button {
  background-color: #00ce89;
  color:white;
}

</style>

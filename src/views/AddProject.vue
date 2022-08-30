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
  <button type="submit" class="btn">Add Project</button>
  </form>
  </div>
</template>

<script>
import {ref} from 'vue'
import { projectFirestore,timestamp } from '../firebase/config'     
import {useRouter} from 'vue-router'

export default {
  name:'AddProject',
  setup()
  {
         const title=ref('')
         const details=ref('')
         const router = useRouter()

         //Adding data , action by submit
         const handleSubmit= async () => {
            const post= {
               title:title.value,
               details:details.value,
               complete:false,
               timestamp: timestamp()    
            }

            const res=await projectFirestore.collection('projects').add(post)

            router.push({name:'home'})

         }

         
         return {
            title,details,handleSubmit
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

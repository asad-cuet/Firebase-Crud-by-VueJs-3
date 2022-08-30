<template>
  <div class="home">
    <NavFilter @filterChange=" current = $event " :current="current"/>


   <div v-if="error">{{error}}</div>

    <div v-if="posts.length">

            <ul class="list-group">

          <li v-for="project in filteredProject" :key="project.id" class="list-group-item">
            <SingleProject :project="project" @delete="handleDelete"/>
          </li>


          </ul>

    </div>
    <div v-else>
          Loading...
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import SingleProject from '@/views/SingleProject.vue';
import NavFilter from '@/views/NavFilter.vue';

import {computed,ref} from 'vue'
import { projectFirestore,timestamp } from '../firebase/config'     

export default {
  name: 'Home',
  setup()
      {
            const posts=ref([])
            const error=ref('')
            const current=ref('all')  //using for filtering fetched data, default value is all

            //fetching data
            const load= async() => {
                  try {
                        const res=await projectFirestore.collection('projects').get()    //return many document.
                        
                        posts.value= res.docs.map(doc => {          //coverting all document as row data,and adding id in row
                              return {...doc.data(),id:doc.id} 
                        })
                  }
                  catch (err) {
                        error.value=err.message
                        console.log(error.value)
                  }
            }
            load()

            //filtering fetched data , action by emit ,coming current value from navfilter
            const filteredProject= computed( ()=> {
               
                  if(current.value=== 'all') {
                    return posts.value;
                  }
                  if(current.value=== 'completed') {
                    return posts.value.filter(post=> post.complete);
                  }
                  if(current.value=== 'ongoing') {
                    return posts.value.filter(post=> !post.complete);
                  }
            })

            //removing deleted data from fetched data , action by emit , coming id from singleproject
            const handleDelete= async(id) => {
              posts.value=posts.value.filter(post=> {
                return post.id !==id;
                })
           } 

           //returning all variavle and computed function
            return {
                  posts,error,filteredProject,current,handleDelete
            }
      },
  components: {
    SingleProject,
    NavFilter
  }
  // methods: {

  //   },
  //   handleComplete(id) {
  //     let p=this.projects.find(project=> {
  //         return project.id === id
  //     });
  //     p.complete=!p.complete
  //   }
  // }
}
</script>

<template>

<div>
      <nav class="filter-nav">
 
       <button :class="{ active: current === 'all' }" @click="updateFilter('all')">All</button>
       <button :class="{ active: current === 'completed' }" @click="updateFilter('completed')">Completed</button>
       <button :class="{ active: current === 'ongoing' }" @click="updateFilter('ongoing')">Ongoing</button>

      </nav>
</div>
</template>

<script>
export default {
      name:'NavFilter',
      props:['current'],
      methods: {
            updateFilter(by) {
                  this.$emit('filterChange',by);
            }
      }
}
</script>

<style scoped>
.filter-nav button {
      background: none;
      border: none;
      color: #bbb;
      outline: none;
      font-size: 12px;
      text-transform: uppercase;
      margin-left: 10px;
      letter-spacing: 1px;
      font-weight: bold;
      cursor: pointer;
}
  .active {
      color:#555!important;
}
</style>
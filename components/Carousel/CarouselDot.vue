<template>
  <button
    role="button"
    class="owl-dot"
    :class="{ active: isActive }"
    @click="$emit('clicked', dotNumber)"
  >
    <span></span>
  </button>
</template>
<script>
export default {
  props: {
    dotNumber: {
      type: Number,
      required: true
    },
    owlStageX: {
      type: Number,
      required: true
    },
    outerLenght: {
      type: Number,
      required: true
    }
  },
  computed:{
    selfOwlStageX(){
      return this.outerLenght*(this.dotNumber-1)*(-1)
    },
    minStageX(){
      return this.selfOwlStageX-this.outerLenght
    },
    maxStageX(){
      return this.selfOwlStageX+this.outerLenght
    },
    isActive(){
      return this.owlStageX<this.maxStageX && this.owlStageX>this.minStageX
    }
  }
};
</script>
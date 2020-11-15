<template>
  <li :class="{ active: isActive }" :style="{ width: getWidthPercent + '%' }"></li>
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
    },
    nDot: {
      type: Number,
      required: true
    }
  },
  computed: {
    getWidthPercent() {
      return 100 / this.nDot;
    },
    selfOwlStageX() {
      return this.outerLenght * (this.dotNumber - 1) * -1;
    },
    minStageX() {
      return this.selfOwlStageX - this.outerLenght;
    },
    maxStageX() {
      return this.selfOwlStageX + this.outerLenght;
    },
    isActive() {
      return this.owlStageX < this.maxStageX && this.owlStageX > this.minStageX;
    }
  }
};
</script>
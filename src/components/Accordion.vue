<template>
  <!-- :groupId="groupId" -->
  <div class="container">
    <dl class="accordion box">
      <accordion-item
        v-for="item in content"
        :multiple="multiple"
        :item="item"
        :key="item.id"
      >
      </accordion-item>
    </dl>
  </div>
</template>

<script>
import AccordionItem from "@/components/AccordionItem.vue";

export default {
  name: "Accordion",
  components: {
    AccordionItem,
  },
  props: {
    content: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // groupId: null,
    };
  },
  // mounted() {
  //   this.groupId = this.$el.id;
  // },
};
</script>
<style>
#trigger-1 {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom: 1px solid var(--auxiliary-color);
}
#trigger-3 {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top: 1px solid var(--auxiliary-color);
}
#inner-1 {
  border-bottom: 1px solid var(--auxiliary-color);
}
#inner-2 {
  border-top: 1px solid var(--auxiliary-color);
}
#inner-3 {
  border-top: 1px solid var(--auxiliary-color);
}
/* .container {
  margin-bottom: 1.5em;
} */
.btn-action-delete {
  color: #cc4b37;
  cursor: pointer;
}
.accordion {
  padding: 0;
  margin: 1.57em 0 0 0;
}
.accordion div:not(:last-child) {
  border-bottom: 1px solid rgba(10, 10, 10, 0.1);
}
.accordion div:last-child .accordion-item-details {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
.accordion dd {
  margin-left: 0;
}
.accordion-item-trigger,
.accordion-item-details-inner {
  padding: 0.8rem 1.25rem;
}
.accordion-item-title {
  position: relative;
}
.accordion-item-title h4 {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  margin-bottom: 0;
  color: var(--main-color);
  margin-top: 3px;
}
.accordion-item-trigger {
  width: 100%;
  text-align: left;
  background-color: var(--color-accordion);
  border: none;
  display: flex;
  justify-content: center;
}
.accordion-item-trigger-icon {
  display: block;
  position: absolute;
  top: 0;
  right: 1.25rem;
  bottom: 0;
  margin: auto;
  width: 8px;
  height: 8px;
  border-right: 2px solid var(--main-color);
  border-bottom: 2px solid var(--main-color);
  transform: translateY(-2px) rotate(45deg);
  transition: transform 0.2s ease;
}
.accordion-item-title-img {
  display: block;
  position: absolute;
  top: 0;
  left: 1.25rem;
  bottom: 0;
  margin: auto;
}
.is-active .accordion-item-trigger-icon {
  transform: translateY(2px) rotate(225deg);
}
.accordion-item-details {
  overflow: hidden;
  background: rgba(69, 69, 69, 0.5);
}
.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}
.accordion-item-enter,
.accordion-item-leave-to {
  height: 0 !important;
}
</style>

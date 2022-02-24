<template>
  <div
    class="accordion-item"
    :id="groupId + '-' + item.id"
    :class="{ 'is-active': item.active }"
  >
    <dt class="accordion-item-title">
      <button
        @click="toggle"
        class="accordion-item-trigger"
        :id="'trigger-' + item.id"
      >
        <img
          class="accordion-item-title-img"
          :src="require(`../assets/images/icon-${item.id}.svg`)"
          alt="icon"
        />
        <h4 class="accordion-item-title-text">{{ item.title }}</h4>
        <span class="accordion-item-trigger-icon"></span>
      </button>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <dd v-if="item.active" class="accordion-item-details">
        <div
          v-html="item.details"
          :id="'inner-' + item.id"
          class="accordion-item-details-inner"
        ></div>
      </dd>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
  props: ["item", "multiple", "groupId"],
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active;
      else {
        this.$parent.$children.forEach((item) => {
          if (
            item.$el.id === event.currentTarget.parentElement.parentElement.id
          )
            item.item.active = !item.item.active;
          else item.item.active = false;
        });
      }
    },

    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },

    endTransition(el) {
      el.style.height = "";
    },
  },
};
</script>

<style></style>

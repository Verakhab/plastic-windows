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
        <!-- v-html="item.details" -->
        <div :id="'inner-' + item.id" class="accordion-item-details-inner">
          <AccordionFormSize :item="item" />
        </div>
      </dd>
    </transition>
    <img
      v-if="
        (!$store.state.option.heightSash || !$store.state.option.widthSash) &&
        item.id === 1 &&
        !item.active
      "
      class="form-size-error"
      src="../assets/images/validConfig.svg"
      alt="pic"
    />
    <img
      v-if="
        (!$store.state.option.profil ||
          !$store.state.option.accessories ||
          !$store.state.option.externalLamination ||
          !$store.state.option.glazedWindows ||
          !$store.state.option.internalLamination) &&
        item.id === 2 &&
        !item.active
      "
      class="form-size-error"
      src="../assets/images/validConfig.svg"
      alt="pic"
    />
    <img
      v-if="
        (!$store.state.option.windowsillWidth ||
          !$store.state.option.windowsillLength ||
          !$store.state.option.upperSlopeWidth ||
          !$store.state.option.upperSlopeLength ||
          !$store.state.option.lowTideWidth ||
          !$store.state.option.lowTideLength ||
          !$store.state.option.sideSlopesWidth ||
          !$store.state.option.sideSlopesLength) &&
        item.id === 3 &&
        !item.active
      "
      class="form-size-error"
      src="../assets/images/validConfig.svg"
      alt="pic"
    />
  </div>
</template>

<script>
import AccordionFormSize from "@/components/AccordionFormSize.vue";

export default {
  name: "AccordionItem",
  components: {
    AccordionFormSize,
  },
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

<style>
.accordion-item {
  position: relative;
}
.form-size-error {
  position: absolute;
  top: 15px;
  left: -10px;
}
</style>

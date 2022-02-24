<template>
  <footer class="footer">
    <a class="footer__text" href="#">Вопрос в техподдержку</a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  margin: 0 160px;
  height: 109px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid var(--second-color);
}
.footer__text {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  color: var(--second-color);
  padding-top: 15px;
}
</style>

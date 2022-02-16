<template>
  <div class="header">
    <div class="header__logo">LOGO</div>
    <div class="header__info">
      <div class="header__info-user">
        <img
          class="header__foto-user"
          src="../assets/avatar.png"
          alt="user avatar"
        />
        <p class="header__text-user">
          Ваш менеджер Антон +7 916 569 5665 nAnthony@mail.ru
        </p>
      </div>
      <button class="header__button">
        <p class="header__button-text">Сроки готовности заказов</p>
      </button>
    </div>
    <div class="header__menu"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  padding: 0.7vmax 11vmax;
  background: linear-gradient(263.93deg, #3a3a3c -6.49%, #454545 87.1%);
}
.header__logo {
  flex: 1 1 9vmax;
  font-family: Geometria;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0em;
  text-align: left;
}
.header__info {
  display: flex;
  flex: 2 1 34.4vmax;
  align-items: center;
}
@media screen and (min-width: 375px) and (max-width: 830px) {
  .header__info {
    flex: 2 1 4vmax;
  }
}
.header__info-user {
  width: 21.5vmax;
  display: flex;
  align-items: center;
}
@media screen and (min-width: 505px) and (max-width: 830px) {
  .header__info-user {
    width: 51.5vmax;
  }
}
@media screen and (min-width: 375px) and (max-width: 504px) {
  .header__info-user {
    display: none;
  }
}
.header__foto-user {
  width: 30px;
  height: 30px;
  padding-right: 10px;
}
.header__text-user {
  width: 16vmax;
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0em;
}
@media screen and (min-width: 375px) and (max-width: 830px) {
  .header__text-user {
    width: 40vmax;
  }
}
.header__button {
  background-color: var(--buttons-color);
  border-radius: var(--buttons-radius);
  height: var(--buttons-height);
  border: none;
  color: var(--main-color);
}
@media screen and (min-width: 375px) and (max-width: 830px) {
  .header__button {
    display: none;
  }
}
.header__button-text {
  margin: 0;
  padding: 0 1.3vmax;
}
.header__menu {
  width: 20px;
  height: 13px;
  background-image: url("../assets/menu.png");
}
</style>

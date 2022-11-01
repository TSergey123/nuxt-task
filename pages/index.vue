<template>
  <body class="page">
    <main class="main">
      <div class="container">
        <article class="counter">
          <h1 class="counter__heading heading-main">Счётчик калорий</h1>
          <span>{{slim}}</span>
          <span>{{gain}}</span>
          <span>{{balancedWeight}}</span>
          <div
            class="counter__form form"
            name="counter"
            action="#"
            method="post"
          >
            <div class="form__item">
              <h2 class="heading">Пол</h2>
              <ul class="switcher">
                <li class="switcher__item">
                  <input
                    v-model="gender"
                    value="male"
                    id="gender-male"
                    name="gender"
                    type="radio"
                    required
                  />
                  <label for="gender-male"> Мужчина </label>
                </li>
                <li class="switcher__item">
                  <input
                    v-model="gender"
                    id="gender-female"
                    name="gender"
                    value="female"
                    type="radio"
                    required
                  />
                  <label for="gender-female"> Женщина </label>
                </li>
              </ul>
            </div>
            <fieldset class="form__item form__parameters" name="parameters">
              <legend class="visually-hidden">Физические параметры</legend>
              <div class="inputs-group">
                <div class="input">
                  <div class="input__heading">
                    <label class="heading" for="age"> Возраст </label>
                    <span class="input__heading-unit"> лет </span>
                  </div>
                  <div class="input__wrapper">
                    <input
                      v-model="age"
                      @change="() => { if(age > 40 || age < 0) { this.age = 0 }}"
                      class="input__heading-item input__heading-item--age"
                      style="width: 150px;"
                      type="text"
                      id="age"
                      name="age"
                      placeholder="0"
                      inputmode="decimal"
                      maxlength="3"
                      required
                    />
                  </div>
                </div>
                <div class="input">
                  <div class="input__heading">
                    <label class="heading" for="height"> Рост </label>
                    <span class="input__heading-unit input__heading-unit--sm"> см </span>
                  </div>
                  <div class="input__wrapper">
                    <input
                      v-model="height"
                      @change="() => { if(height > 200 || height < 0) { this.height = 0 }}"
                      type="text"
                      id="height"
                      name="height"
                      placeholder="0"
                      inputmode="decimal"
                      maxlength="3"
                      required
                    />
                  </div>
                </div>
                <div class="input">
                  <div class="input__heading">
                    <label class="heading" for="weight"> Вес </label>
                    <span class="input__heading-unit"> кг </span>
                  </div>
                  <div class="input__wrapper">
                    <input
                      v-model="weight"
                      @change="() => { if(weight > 100 || weight < 0) { this.weight = 0 }}"
                      type="text"
                      id="weight"
                      name="weight"
                      placeholder="0"
                      inputmode="decimal"
                      maxlength="3"
                      required
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset class="form__item">
              <legend class="heading">Физическая активность</legend>
              <ul class="radios-group">
                <li class="radio">
                  <div class="radio__wrapper">
                    <input
                      id="activity-minimal"
                      v-model="activity"
                      name="activity"
                      value="min"
                      type="radio"
                      checked
                      required
                    />
                    <label for="activity-minimal"> Минимальная </label>
                  </div>
                  <p class="radio__description">
                    Сидячья работа и нет физических нагрузок
                  </p>
                </li>
                <li class="radio">
                  <div class="radio__wrapper">
                    <input
                      v-model="activity"
                      id="activity-low"
                      name="activity"
                      value="low"
                      type="radio"
                      required
                    />
                    <label for="activity-low"> Низкая </label>
                  </div>
                  <p class="radio__description">
                    Редкие, неригулярные тренировки, активность в быту
                  </p>
                </li>
                <li class="radio">
                  <div class="radio__wrapper">
                    <input
                      v-model="activity"
                      id="activity-medium"
                      name="activity"
                      value="medium"
                      type="radio"
                      required
                    />
                    <label for=""> Средняя </label>
                  </div>
                  <p class="radio__description">Тренировки 3-5 раз в неделю</p>
                </li>
                <li class="radio">
                  <div class="radio__wrapper">
                    <input
                      v-model="activity"
                      id="activity-high"
                      name="activity"
                      value="high"
                      type="radio"
                      required
                    />
                    <label for="activity-medium"> Высокая </label>
                  </div>
                  <p class="radio__description">Тренировка 6-7 раза в неделю</p>
                </li>
                <li class="radio">
                  <div class="radio__wrapper">
                    <input
                      v-model="activity"
                      id="activity-maximal"
                      name="activity"
                      value="max"
                      type="radio"
                      required
                    />
                    <label for="activity-maximal"> Очень высокая </label>
                  </div>
                  <p class="radio__description">
                    Больше 1 тренировок в неделю и фезическая работа
                  </p>
                </li>
              </ul>
            </fieldset>
            <div class="form__submit">
              <button
                :disabled="!isDisable"
                @click="calculateData()"
                class="form__submit-button button"
                name="submit"
              >
                Расчитать
              </button>
              <button
                class="form__reset-button"
                name="reset"
                type="reset"
                @click="resetFields()"
              >
                <svg
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="#FD3636"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"
                  />
                </svg>
                <span> Очистить </span>
              </button>
            </div>
          </div>
          <section class="counter__result" :class="{hidden: isHidden}">
            <h2 class="heading">Ваша норма каллорий</h2>
            <ul class="counter__result-list">
              <li class="counter__result-item">
                <h3><span id="calories-norm">{{balancedWeight}}</span> ккал</h3>
                <p>подержание веса</p>
              </li>
              <li class="counter__result-item">
                <h3><span id="calories-minimal">{{slim}}</span> ккал</h3>
                <p>снежение веса</p>
              </li>
              <li class="counter__result-item">
                <h3><span id="calories-maximal">{{gain}}</span> ккал</h3>
                <p>набор веса</p>
              </li>
            </ul>
          </section>
        </article>
      </div>
      <span>{{balancedResult}}</span>
      <span>{{slimResult}}</span>
      <span>{{gainResult}}</span>
    </main>
  </body>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      gender: "male",
      activity: "min",
      info: 0,
      disabled: 0,
      age: 0,
      height: 0,
      weight: 0,
      result: "",
      superResult: {
        type: String,
      },
      balancedWeight: 0,
      gain: 0,
      slim: 0,
      isHidden: true,
      getGenderWeight: {
        male: +5,
        female: -159,
      },
      getActivity: {
        min: 1.2,
        low: 1.375,
        medium: 1.55,
        high: 1.725,
        max: 1.8,
      },
    };
  },

  methods: {
    calculateData() {
      const myAge = parseInt(this.age);
      const myWeight = parseInt(this.weight);
      const myHeight = parseInt(this.height);
      const myGender = this.getGenderWeight[this.gender];
      const myActivity = this.getActivity[this.activity];
      const N = (10 * myWeight) + (6.25 * myHeight) - (5 * myAge) + (myGender);

      const balancedWeight = Math.round(N * myActivity);
      const gain = Math.round(
        balancedWeight + (balancedWeight / 100) * 15
      );
      const slim = Math.round(
        balancedWeight - (balancedWeight / 100) * 15
      );
      this.slim = slim;
      this.gain = gain;
      this.balancedWeight = balancedWeight;
      this.isHidden = !this.isHidden

      console.log(balancedWeight);
      console.log(gain);
      console.log(slim);
      console.log(this.getActivity);
      console.log(this.getGenderWeight)
      console.log(this.superResult)
      console.log(this.activity)
    },
    resetFields() {
      this.age = 0;
      this.weight = 0;
      this.height = 0;
      this.gender = 'female';
    }
  },
  computed: {
    isDisable() {
      return (
        this.age.length > 0 && this.weight.length > 0
      );
    },
  },
};
</script>

<style>
/* @font-face {
  font-style: normal;
  font-weight: 700;
  font-family: "PT Sans Caption";

  font-display: swap;
  src:
    url("../fonts/pt-sans-caption-bold.woff2") format("woff2"),
    url("../fonts/pt-sans-caption-bold.woff") format("woff");
}

@font-face {
  font-style: normal;
  font-weight: 400;
  font-family: "PT Sans Caption";

  font-display: swap;
  src:
    url("../fonts/pt-sans-caption-regular.woff2") format("woff2"),
    url("../fonts/pt-sans-caption-regular.woff") format("woff");
} */

*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:root {
  --color-gray-darkest: #7b7b7b;
  --color-gray-dark: #7e7e7e;
  --color-gray: #9e9e9e;
  --color-gray-light: #bdbdbd;
  --color-gray-lighter: #d1d1d1;
  --color-gray-lightest: #dcdcdc;
  --color-text-black: #000000;
  --color-text-white: #ffffff;
  --color-background-main: #ffffff;
  --color-accent: #fd7d36;
  --color-accent-hover: #ff9e68;
  --color-accent-active: #ff7528;
  --color-warning: #fd3636;
  --color-warning-hover: #ff8484;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  min-width: 1160px;
}

body {
  width: 100%;

  font-size: 18px;
  line-height: 21px;
  font-family: "PT Sans Caption", "Arial", sans-serif;
  color: var(--color-text-black);
}

.page {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.main {
  flex: 1 0 auto;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;

  background-image: url("/main-background.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--color-accent);
}

.header,
.footer {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

img,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
}

/* firefox placeholder \ invalid fix + ios bdrs */
input,
textarea {
  border-radius: 0;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
}

input:invalid,
textarea:invalid {
  box-shadow: none;
}

/* input[number] arrows removal */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;

  appearance: none;
}

/* ios inputs reset */
select,
textarea,
input:matches([type="email"], [type="number"], [type="password"], [type="search"], [type="tel"], [type="text"], [type="url"]) {
  appearance: none;
}

input[type="number"] {
  appearance: textfield;
}

.visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;

  white-space: nowrap;

  border: 0;

  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
}

.container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding-right: 300px;
  padding-left: 300px;
}

.container--no-padding {
  padding-right: 0;
  padding-left: 0;
}

.heading-main,
.heading {
  margin: 0;

  font-family: "PT Sans Caption", "Arial", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.heading-main {
  font-size: 64px;
  line-height: 83px;
}

.heading {
  font-size: 32px;
  line-height: 41px;
}

.counter {
  padding-top: 40px;
  padding-bottom: 50px;
}

.counter__heading {
  margin: 0;
  margin-bottom: 22px;

  color: var(--color-text-white);
  text-align: center;
}

.counter__form,
.counter__result {
  padding: 32px 32px;

  background-color: var(--color-background-main);
}

.counter__form {
  margin-bottom: 20px;
  padding-top: 39px;
  padding-bottom: 43px;

  border-radius: 16px;
}

.counter__result {
  opacity: 1;
  visibility: visible;
  border-radius: 12px;

  transition: 0.6s ease;
  transition-property: opacity, visibility;
}

.hidden {
  opacity: 0;
  /* visibility: hidden; */
}

.counter__result > .heading {
  margin-bottom: 12px;

  color: var(--color-accent);
}

.counter__result-list {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  list-style: none;
}

.counter__result-item {
  max-width: 124px;
}

.counter__result-item h3 {
  margin: 0;
  margin-bottom: 2px;

  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
}

.counter__result-item p {
  margin: 0;

  color: var(--color-gray-dark);
}

.switcher {
  display: flex;
  align-items: stretch;
  margin: 0;
  padding: 0;

  font-family: "PT Sans Caption", "Arial", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;

  border-radius: 4px;
  list-style: none;
}

.switcher__item {
  flex: 1 1 0;
}

.switcher__item + .switcher__item {
  margin-left: -1px;
}

.switcher__item:first-of-type label {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.switcher__item:last-of-type label {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.switcher__item:only-child label {
  border-radius: 4px;
}

.switcher__item label {
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 14px;

  color: var(--color-text-black);

  user-select: none;
  cursor: pointer;
  border: solid 0.5px var(--color-accent);
  background-color: transparent;
  transition: 0.3s ease;
  transition-property: color, border, background, z-index, margin;
}

.switcher__item input[type="radio"] {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;

  white-space: nowrap;

  border: 0;

  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
}

.switcher__item label:hover {
  z-index: 3;

  color: var(--color-accent);
}

.switcher__item input[type="radio"]:checked + label {
  z-index: 0;

  color: var(--color-text-white);

  border-color: transparent;
  background-color: var(--color-accent);
}

.switcher__item input[type="radio"]:checked + label:hover {
  color: var(--color-text-white);
}

.input {
  width: fit-content;
}

.input__heading {
  display: flex;
  align-items: flex-end;
  margin: 0;
  margin-bottom: 12px;
}

.input__heading label {
  cursor: pointer;
}

.input__heading-unit {
  margin: 0;
  margin-left: 6px;

  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: var(--color-gray);
}

.input__heading-unit--sm {
  margin-bottom: 6px;
  font-size: 10px;
}

.input__wrapper {
  display: flex;
  width: 80px;
  margin: 0;
}

.input__wrapper input {
  width: 100%;
  margin: 0;
  padding: 10px 5px;

  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: var(--color-text-black);

  outline: none;
  border-radius: 4px;
  border: 0.5px solid currentColor;
  background: transparent;

  transition: 0.3s ease;
  transition-property: color, border;
}

.input__wrapper input::placeholder {
  color: var(--color-gray-darkest);

  transition: 0.3s ease;
  transition-property: color;
}

.input__wrapper input:hover,
.input__wrapper input:active,
.input__wrapper input:focus {
  border-color: var(--color-accent);
}

.input__wrapper input:hover::placeholder,
.input__wrapper input:active::placeholder {
  color: var(--color-text-black);
}

.input__wrapper input:focus::placeholder {
  color: transparent;
}

.inputs-group {
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 0;

  list-style: none;
}

.inputs-group .input:nth-child(2) {
  margin-left: 47px;
  margin-right: auto;
}

.radio__wrapper {
  width: fit-content;
}

.radio__wrapper label {
  display: flex;
  align-items: flex-start;

  font-size: 20px;
  line-height: 26px;

  cursor: pointer;
  transition: 0.3s ease;
  transition-property: color, box-shadow;
}

.radio__wrapper input[type="radio"] {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;

  white-space: nowrap;

  border: 0;

  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
}

.radio__wrapper label::before {
  content: "";

  flex-shrink: 0;
  display: block;
  width: 32px;
  height: 24px;
  margin-top: 1px;
  padding-right: 8px;

  background-image: url("/icon-radio-empty.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 24px 24px;

  cursor: pointer;
  transition: 0.3s ease;
  transition-property: background;
}

.radio__wrapper input[type="radio"]:checked + label::before {
  background-image: url("/icon-radio-checked.svg");
}

.radio__wrapper label:hover,
.radio__wrapper input[type="radio"]:checked + label {
  color: var(--color-accent);
}

.radio__description {
  margin: 0;
  margin-left: 32px;
  margin-top: 3px;
  padding-bottom: 2px;

  color: var(--color-gray-light);
}

.radios-group {
  max-width: 94%;
  margin: 0;
  padding: 0;

  list-style: none;
}

.radios-group .radio {
  margin-bottom: 15px;
}

.radios-group .radio:last-child {
  margin-bottom: 0;
}

.button {
  padding: 20px 24px;

  font-family: "PT Sans Caption", "Arial", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 15px;
  color: var(--color-text-white);

  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: var(--color-accent);
  transition: 0.3s ease;
  transition-property: background;
}

.button:hover,
.button:focus {
  background-color: var(--color-accent-hover);
}

.button:active {
  background-color: var(--color-accent-active);
}

.button:disabled {
  cursor: not-allowed;
  background-color: var(--color-gray-lightest);
}

.form__item {
  margin: 0;
  margin-bottom: 40px;
  padding: 0;

  border: none;
}

.form__item > .heading {
  margin-bottom: 16px;
}

.form__parameters {
  margin-bottom: 34px;
}

.form__submit {
  display: flex;
  align-items: center;
  margin-top: 42px;
}

.form__item:last-child {
  margin-bottom: 0;
}

.form__reset-button {
  display: inline-flex;
  align-items: center;
  margin: 0;
  margin-left: 24px;
  padding: 0;

  font-size: 20px;
  line-height: 16px;
  color: var(--color-warning);

  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  transition: 0.3s ease;
  transition-property: color, box-shadow;
}

.form__reset-button svg {
  flex-shrink: 0;
  margin-right: 1px;

  fill: currentColor;
}

.form__reset-button:hover,
.form__reset-button:focus,
.form__reset-button:active {
  color: var(--color-warning-hover);

  outline: none;
}

.form__reset-button:disabled {
  color: var(--color-gray-lighter);

  cursor: not-allowed;
}
</style>

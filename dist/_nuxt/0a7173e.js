(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{251:function(n,t,e){var content=e(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(127).default)("03b14700",content,!0,{sourceMap:!1})},252:function(n,t,e){"use strict";e(251)},253:function(n,t,e){var r=e(126)(!1);r.push([n.i,'\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n:root {\n  --color-gray-darkest: #7b7b7b;\n  --color-gray-dark: #7e7e7e;\n  --color-gray: #9e9e9e;\n  --color-gray-light: #bdbdbd;\n  --color-gray-lighter: #d1d1d1;\n  --color-gray-lightest: #dcdcdc;\n  --color-text-black: #000000;\n  --color-text-white: #ffffff;\n  --color-background-main: #ffffff;\n  --color-accent: #fd7d36;\n  --color-accent-hover: #ff9e68;\n  --color-accent-active: #ff7528;\n  --color-warning: #fd3636;\n  --color-warning-hover: #ff8484;\n}\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  min-width: 1160px;\n}\nbody {\n  width: 100%;\n\n  font-size: 18px;\n  line-height: 21px;\n  font-family: "PT Sans Caption", "Arial", sans-serif;\n  color: var(--color-text-black);\n}\n.page {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.main {\n  flex: 1 0 auto;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 0 auto;\n\n  background-image: url("/main-background.jpg");\n  background-position: 0 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: var(--color-accent);\n}\n.header,\n.footer {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\nimg,\nvideo {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n/* firefox placeholder \\ invalid fix + ios bdrs */\ninput,\ntextarea {\n  border-radius: 0;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n}\ninput:invalid,\ntextarea:invalid {\n  box-shadow: none;\n}\n\n/* input[number] arrows removal */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  margin: 0;\n\n  appearance: none;\n}\n\n/* ios inputs reset */\nselect,\ntextarea,\ninput:matches([type="email"], [type="number"], [type="password"], [type="search"], [type="tel"], [type="text"], [type="url"]) {\n  appearance: none;\n}\ninput[type="number"] {\n  appearance: textfield;\n}\n.visually-hidden {\n  position: absolute;\n\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n\n  white-space: nowrap;\n\n  border: 0;\n\n  clip: rect(0 0 0 0);\n  -webkit-clip-path: inset(100%);\n  clip-path: inset(100%);\n}\n.container {\n  width: 100%;\n  max-width: 1160px;\n  margin: 0 auto;\n  padding-right: 300px;\n  padding-left: 300px;\n}\n.container--no-padding {\n  padding-right: 0;\n  padding-left: 0;\n}\n.heading-main,\n.heading {\n  margin: 0;\n\n  font-family: "PT Sans Caption", "Arial", sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n.heading-main {\n  font-size: 64px;\n  line-height: 83px;\n}\n.heading {\n  font-size: 32px;\n  line-height: 41px;\n}\n.counter {\n  padding-top: 40px;\n  padding-bottom: 50px;\n}\n.counter__heading {\n  margin: 0;\n  margin-bottom: 22px;\n\n  color: var(--color-text-white);\n  text-align: center;\n}\n.counter__form,\n.counter__result {\n  padding: 32px 32px;\n\n  background-color: var(--color-background-main);\n}\n.counter__form {\n  margin-bottom: 20px;\n  padding-top: 39px;\n  padding-bottom: 43px;\n\n  border-radius: 16px;\n}\n.counter__result {\n  opacity: 1;\n  visibility: visible;\n  border-radius: 12px;\n\n  transition: 0.6s ease;\n  transition-property: opacity, visibility;\n}\n.hidden {\n  opacity: 0;\n  /* visibility: hidden; */\n}\n.counter__result > .heading {\n  margin-bottom: 12px;\n\n  color: var(--color-accent);\n}\n.counter__result-list {\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  padding: 0;\n\n  list-style: none;\n}\n.counter__result-item {\n  max-width: 124px;\n}\n.counter__result-item h3 {\n  margin: 0;\n  margin-bottom: 2px;\n\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 26px;\n}\n.counter__result-item p {\n  margin: 0;\n\n  color: var(--color-gray-dark);\n}\n.switcher {\n  display: flex;\n  align-items: stretch;\n  margin: 0;\n  padding: 0;\n\n  font-family: "PT Sans Caption", "Arial", sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 23px;\n  text-align: center;\n\n  border-radius: 4px;\n  list-style: none;\n}\n.switcher__item {\n  flex: 1 1 0;\n}\n.switcher__item + .switcher__item {\n  margin-left: -1px;\n}\n.switcher__item:first-of-type label {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.switcher__item:last-of-type label {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.switcher__item:only-child label {\n  border-radius: 4px;\n}\n.switcher__item label {\n  position: relative;\n  z-index: 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 14px;\n\n  color: var(--color-text-black);\n\n  user-select: none;\n  cursor: pointer;\n  border: solid 0.5px var(--color-accent);\n  background-color: transparent;\n  transition: 0.3s ease;\n  transition-property: color, border, background, z-index, margin;\n}\n.switcher__item input[type="radio"] {\n  position: absolute;\n\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n\n  white-space: nowrap;\n\n  border: 0;\n\n  clip: rect(0 0 0 0);\n  -webkit-clip-path: inset(100%);\n  clip-path: inset(100%);\n}\n.switcher__item label:hover {\n  z-index: 3;\n\n  color: var(--color-accent);\n}\n.switcher__item input[type="radio"]:checked + label {\n  z-index: 0;\n\n  color: var(--color-text-white);\n\n  border-color: transparent;\n  background-color: var(--color-accent);\n}\n.switcher__item input[type="radio"]:checked + label:hover {\n  color: var(--color-text-white);\n}\n.input {\n  width: fit-content;\n}\n.input__heading {\n  display: flex;\n  align-items: flex-end;\n  margin: 0;\n  margin-bottom: 12px;\n}\n.input__heading label {\n  cursor: pointer;\n}\n.input__heading-unit {\n  margin: 0;\n  margin-left: 6px;\n\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 30px;\n  color: var(--color-gray);\n}\n.input__heading-unit--sm {\n  margin-bottom: 6px;\n  font-size: 10px;\n}\n.input__wrapper {\n  display: flex;\n  width: 80px;\n  margin: 0;\n}\n.input__wrapper input {\n  width: 100%;\n  margin: 0;\n  padding: 10px 5px;\n\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 23px;\n  text-align: center;\n  color: var(--color-text-black);\n\n  outline: none;\n  border-radius: 4px;\n  border: 0.5px solid currentColor;\n  background: transparent;\n\n  transition: 0.3s ease;\n  transition-property: color, border;\n}\n.input__wrapper input::placeholder {\n  color: var(--color-gray-darkest);\n\n  transition: 0.3s ease;\n  transition-property: color;\n}\n.input__wrapper input:hover,\n.input__wrapper input:active,\n.input__wrapper input:focus {\n  border-color: var(--color-accent);\n}\n.input__wrapper input:hover::placeholder,\n.input__wrapper input:active::placeholder {\n  color: var(--color-text-black);\n}\n.input__wrapper input:focus::placeholder {\n  color: transparent;\n}\n.inputs-group {\n  display: flex;\n  align-items: flex-start;\n  margin: 0;\n  padding: 0;\n\n  list-style: none;\n}\n.inputs-group .input:nth-child(2) {\n  margin-left: 47px;\n  margin-right: auto;\n}\n.radio__wrapper {\n  width: fit-content;\n}\n.radio__wrapper label {\n  display: flex;\n  align-items: flex-start;\n\n  font-size: 20px;\n  line-height: 26px;\n\n  cursor: pointer;\n  transition: 0.3s ease;\n  transition-property: color, box-shadow;\n}\n.radio__wrapper input[type="radio"] {\n  position: absolute;\n\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n\n  white-space: nowrap;\n\n  border: 0;\n\n  clip: rect(0 0 0 0);\n  -webkit-clip-path: inset(100%);\n  clip-path: inset(100%);\n}\n.radio__wrapper label::before {\n  content: "";\n\n  flex-shrink: 0;\n  display: block;\n  width: 32px;\n  height: 24px;\n  margin-top: 1px;\n  padding-right: 8px;\n\n  background-image: url("/icon-radio-empty.svg");\n  background-position: 0 0;\n  background-repeat: no-repeat;\n  background-size: 24px 24px;\n\n  cursor: pointer;\n  transition: 0.3s ease;\n  transition-property: background;\n}\n.radio__wrapper input[type="radio"]:checked + label::before {\n  background-image: url("/icon-radio-checked.svg");\n}\n.radio__wrapper label:hover,\n.radio__wrapper input[type="radio"]:checked + label {\n  color: var(--color-accent);\n}\n.radio__description {\n  margin: 0;\n  margin-left: 32px;\n  margin-top: 3px;\n  padding-bottom: 2px;\n\n  color: var(--color-gray-light);\n}\n.radios-group {\n  max-width: 94%;\n  margin: 0;\n  padding: 0;\n\n  list-style: none;\n}\n.radios-group .radio {\n  margin-bottom: 15px;\n}\n.radios-group .radio:last-child {\n  margin-bottom: 0;\n}\n.button {\n  padding: 20px 24px;\n\n  font-family: "PT Sans Caption", "Arial", sans-serif;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 15px;\n  color: var(--color-text-white);\n\n  cursor: pointer;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  background-color: var(--color-accent);\n  transition: 0.3s ease;\n  transition-property: background;\n}\n.button:hover,\n.button:focus {\n  background-color: var(--color-accent-hover);\n}\n.button:active {\n  background-color: var(--color-accent-active);\n}\n.button:disabled {\n  cursor: not-allowed;\n  background-color: var(--color-gray-lightest);\n}\n.form__item {\n  margin: 0;\n  margin-bottom: 40px;\n  padding: 0;\n\n  border: none;\n}\n.form__item > .heading {\n  margin-bottom: 16px;\n}\n.form__parameters {\n  margin-bottom: 34px;\n}\n.form__submit {\n  display: flex;\n  align-items: center;\n  margin-top: 42px;\n}\n.form__item:last-child {\n  margin-bottom: 0;\n}\n.form__reset-button {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  margin-left: 24px;\n  padding: 0;\n\n  font-size: 20px;\n  line-height: 16px;\n  color: var(--color-warning);\n\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n  transition: 0.3s ease;\n  transition-property: color, box-shadow;\n}\n.form__reset-button svg {\n  flex-shrink: 0;\n  margin-right: 1px;\n\n  fill: currentColor;\n}\n.form__reset-button:hover,\n.form__reset-button:focus,\n.form__reset-button:active {\n  color: var(--color-warning-hover);\n\n  outline: none;\n}\n.form__reset-button:disabled {\n  color: var(--color-gray-lighter);\n\n  cursor: not-allowed;\n}\n',""]),n.exports=r},254:function(n,t,e){"use strict";e.r(t);var r={name:"IndexPage",data:function(){return{gender:"male",activity:"min",info:0,disabled:0,age:0,height:0,weight:0,result:"",superResult:{type:String},balancedWeight:0,gain:0,slim:0,isHidden:!0,getGenderWeight:{male:5,female:-159},getActivity:{min:1.2,low:1.375,medium:1.55,high:1.725,max:1.8}}},methods:{calculateData:function(){var n=parseInt(this.age),t=parseInt(this.weight),e=parseInt(this.height),r=this.getGenderWeight[this.gender],o=this.getActivity[this.activity],l=10*t+6.25*e-5*n+r,c=Math.round(l*o),d=Math.round(c+c/100*15),h=Math.round(c-c/100*15);this.slim=h,this.gain=d,this.balancedWeight=c,this.isHidden=!this.isHidden,console.log(c),console.log(d),console.log(h),console.log(this.getActivity),console.log(this.getGenderWeight),console.log(this.superResult),console.log(this.activity)},resetFields:function(){this.age=0,this.weight=0,this.height=0,this.gender="female"}},computed:{isDisable:function(){return this.age.length>0&&this.weight.length>0}}},o=(e(252),e(56)),component=Object(o.a)(r,(function(){var n=this,t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("div",{staticClass:"main"},[e("div",{staticClass:"container"},[e("article",{staticClass:"counter"},[e("h1",{staticClass:"counter__heading heading-main"},[t._v("Счётчик калорий")]),t._v(" "),e("span",[t._v(t._s(t.slim))]),t._v(" "),e("span",[t._v(t._s(t.gain))]),t._v(" "),e("span",[t._v(t._s(t.balancedWeight))]),t._v(" "),e("div",{staticClass:"counter__form form",attrs:{name:"counter",action:"#",method:"post"}},[e("div",{staticClass:"form__item"},[e("h2",{staticClass:"heading"},[t._v("Пол")]),t._v(" "),e("ul",{staticClass:"switcher"},[e("li",{staticClass:"switcher__item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],attrs:{value:"male",id:"gender-male",name:"gender",type:"radio",required:""},domProps:{checked:t._q(t.gender,"male")},on:{change:function(n){t.gender="male"}}}),t._v(" "),e("label",{attrs:{for:"gender-male"}},[t._v(" Мужчина ")])]),t._v(" "),e("li",{staticClass:"switcher__item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],attrs:{id:"gender-female",name:"gender",value:"female",type:"radio",required:""},domProps:{checked:t._q(t.gender,"female")},on:{change:function(n){t.gender="female"}}}),t._v(" "),e("label",{attrs:{for:"gender-female"}},[t._v(" Женщина ")])])])]),t._v(" "),e("fieldset",{staticClass:"form__item form__parameters",attrs:{name:"parameters"}},[e("legend",{staticClass:"visually-hidden"},[t._v("Физические параметры")]),t._v(" "),e("div",{staticClass:"inputs-group"},[e("div",{staticClass:"input"},[t._m(0),t._v(" "),e("div",{staticClass:"input__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.age,expression:"age"}],staticClass:"input__heading-item input__heading-item--age",staticStyle:{width:"150px"},attrs:{type:"text",id:"age",name:"age",placeholder:"0",inputmode:"decimal",maxlength:"3",required:""},domProps:{value:t.age},on:{change:function(){(t.age>40||t.age<0)&&(n.age=0)},input:function(n){n.target.composing||(t.age=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"input"},[t._m(1),t._v(" "),e("div",{staticClass:"input__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],attrs:{type:"text",id:"height",name:"height",placeholder:"0",inputmode:"decimal",maxlength:"3",required:""},domProps:{value:t.height},on:{change:function(){(t.height>200||t.height<0)&&(n.height=0)},input:function(n){n.target.composing||(t.height=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"input"},[t._m(2),t._v(" "),e("div",{staticClass:"input__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],attrs:{type:"text",id:"weight",name:"weight",placeholder:"0",inputmode:"decimal",maxlength:"3",required:""},domProps:{value:t.weight},on:{change:function(){(t.weight>100||t.weight<0)&&(n.weight=0)},input:function(n){n.target.composing||(t.weight=n.target.value)}}})])])])]),t._v(" "),e("fieldset",{staticClass:"form__item"},[e("legend",{staticClass:"heading"},[t._v("Физическая активность")]),t._v(" "),e("ul",{staticClass:"radios-group"},[e("li",{staticClass:"radio"},[e("div",{staticClass:"radio__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity,expression:"activity"}],attrs:{id:"activity-minimal",name:"activity",value:"min",type:"radio",checked:"",required:""},domProps:{checked:t._q(t.activity,"min")},on:{change:function(n){t.activity="min"}}}),t._v(" "),e("label",{attrs:{for:"activity-minimal"}},[t._v(" Минимальная ")])]),t._v(" "),e("p",{staticClass:"radio__description"},[t._v("\n                  Сидячья работа и нет физических нагрузок\n                ")])]),t._v(" "),e("li",{staticClass:"radio"},[e("div",{staticClass:"radio__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity,expression:"activity"}],attrs:{id:"activity-low",name:"activity",value:"low",type:"radio",required:""},domProps:{checked:t._q(t.activity,"low")},on:{change:function(n){t.activity="low"}}}),t._v(" "),e("label",{attrs:{for:"activity-low"}},[t._v(" Низкая ")])]),t._v(" "),e("p",{staticClass:"radio__description"},[t._v("\n                  Редкие, неригулярные тренировки, активность в быту\n                ")])]),t._v(" "),e("li",{staticClass:"radio"},[e("div",{staticClass:"radio__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity,expression:"activity"}],attrs:{id:"activity-medium",name:"activity",value:"medium",type:"radio",required:""},domProps:{checked:t._q(t.activity,"medium")},on:{change:function(n){t.activity="medium"}}}),t._v(" "),e("label",{attrs:{for:""}},[t._v(" Средняя ")])]),t._v(" "),e("p",{staticClass:"radio__description"},[t._v("Тренировки 3-5 раз в неделю")])]),t._v(" "),e("li",{staticClass:"radio"},[e("div",{staticClass:"radio__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity,expression:"activity"}],attrs:{id:"activity-high",name:"activity",value:"high",type:"radio",required:""},domProps:{checked:t._q(t.activity,"high")},on:{change:function(n){t.activity="high"}}}),t._v(" "),e("label",{attrs:{for:"activity-medium"}},[t._v(" Высокая ")])]),t._v(" "),e("p",{staticClass:"radio__description"},[t._v("Тренировка 6-7 раза в неделю")])]),t._v(" "),e("li",{staticClass:"radio"},[e("div",{staticClass:"radio__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity,expression:"activity"}],attrs:{id:"activity-maximal",name:"activity",value:"max",type:"radio",required:""},domProps:{checked:t._q(t.activity,"max")},on:{change:function(n){t.activity="max"}}}),t._v(" "),e("label",{attrs:{for:"activity-maximal"}},[t._v(" Очень высокая ")])]),t._v(" "),e("p",{staticClass:"radio__description"},[t._v("\n                  Больше 1 тренировок в неделю и фезическая работа\n                ")])])])]),t._v(" "),e("div",{staticClass:"form__submit"},[e("button",{staticClass:"form__submit-button button",attrs:{disabled:!t.isDisable,name:"submit"},on:{click:function(n){return t.calculateData()}}},[t._v("\n              Расчитать\n            ")]),t._v(" "),e("button",{staticClass:"form__reset-button",attrs:{name:"reset",type:"reset"},on:{click:function(n){return t.resetFields()}}},[e("svg",{attrs:{width:"24",height:"24",viewbox:"0 0 24 24",fill:"#FD3636",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"}})]),t._v(" "),e("span",[t._v(" Очистить ")])])])]),t._v(" "),e("section",{staticClass:"counter__result",class:{hidden:t.isHidden}},[e("h2",{staticClass:"heading"},[t._v("Ваша норма каллорий")]),t._v(" "),e("ul",{staticClass:"counter__result-list"},[e("li",{staticClass:"counter__result-item"},[e("h3",[e("span",{attrs:{id:"calories-norm"}},[t._v(t._s(t.balancedWeight))]),t._v(" ккал")]),t._v(" "),e("p",[t._v("подержание веса")])]),t._v(" "),e("li",{staticClass:"counter__result-item"},[e("h3",[e("span",{attrs:{id:"calories-minimal"}},[t._v(t._s(t.slim))]),t._v(" ккал")]),t._v(" "),e("p",[t._v("снежение веса")])]),t._v(" "),e("li",{staticClass:"counter__result-item"},[e("h3",[e("span",{attrs:{id:"calories-maximal"}},[t._v(t._s(t.gain))]),t._v(" ккал")]),t._v(" "),e("p",[t._v("набор веса")])])])])])]),t._v(" "),e("span",[t._v(t._s(t.balancedResult))]),t._v(" "),e("span",[t._v(t._s(t.slimResult))]),t._v(" "),e("span",[t._v(t._s(t.gainResult))])])])}),[function(){var n=this,t=n._self._c;return t("div",{staticClass:"input__heading"},[t("label",{staticClass:"heading",attrs:{for:"age"}},[n._v(" Возраст ")]),n._v(" "),t("span",{staticClass:"input__heading-unit"},[n._v(" лет ")])])},function(){var n=this,t=n._self._c;return t("div",{staticClass:"input__heading"},[t("label",{staticClass:"heading",attrs:{for:"height"}},[n._v(" Рост ")]),n._v(" "),t("span",{staticClass:"input__heading-unit input__heading-unit--sm"},[n._v(" см ")])])},function(){var n=this,t=n._self._c;return t("div",{staticClass:"input__heading"},[t("label",{staticClass:"heading",attrs:{for:"weight"}},[n._v(" Вес ")]),n._v(" "),t("span",{staticClass:"input__heading-unit"},[n._v(" кг ")])])}],!1,null,null,null);t.default=component.exports}}]);
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function showLeaders(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      users = _ref.users,
      emoji = _ref.emoji,
      selectedUserId = _ref.selectedUserId;
  var selectedUserIndex = users.findIndex(function (user) {
    return user.id === selectedUserId;
  });
  return "\n    <section class=\"leaders\">\n      <div class=\"container\">\n        <div class=\"wrapper\">\n          <div class=\"heading heading__container\">\n            <h1 class=\"heading heading--primary\">".concat(title, "</h1>\n            <h2 class=\"heading heading--secondary\">").concat(subtitle, "</h2>\n          </div>\n          <ul class=\"leaders__list\">\n            ").concat(users.map(function (user, userIndex) {
    return "\n            <li class=\"leaders__item\">\n              <div class=\"user\">\n                <div class=\"user__info\">\n                  <div class=\"user__photo\">\n                    <img\n                      srcset=\"\n                        assets/images/1x/".concat(user.avatar, " 64w,\n                        assets/images/2x/").concat(user.avatar, " 128w,\n                        assets/images/3x/").concat(user.avatar, " 192w,\n                        assets/images/4x/").concat(user.avatar, " 256w,\n                      \"\n                      sizes=\"\n                        (max-width: 567px) 64px,\n                        (max-width: 768px) 128px,\n                        (max-width: 1365px) 192px,\n                        256px\n                        \"\n                      src=\"assets/images/1x/").concat(user.avatar, "\"\n                      alt=\"").concat(user.avatar, "\"\n                    />\n                  ").concat(userIndex === 0 ? "<span class=\"user__photo user__photo__emoji\">".concat(emoji, "</span>") : '', " \n                  ").concat(userIndex === users.length - 1 ? "<span class=\"user__photo user__photo__emoji\">\uD83D\uDC4D</span>" : '', "\n                </div>\n                <div class=\"user__data\">\n                  <span class=\"user__name\">").concat(user.name, "</span>\n                  <span class=\"user__count\">").concat(user.valueText, "</span>\n                </div>\n              </div>\n              <div class=\"user__place user__place--").concat(userIndex + 1, "\">\n                <span class=\"user__place-number\">").concat(userIndex + 1, "</span>\n                ").concat(userIndex === 0 && selectedUserIndex && users[selectedUserIndex] ? "\n                <div \n                  data-action=\"leaders\" \n                  data-params='{ \"alias\": \"leaders\", \"data\": { \"selectedUserId\": \"".concat(selectedUserId, "\" }}'\n                  class=\"user user--selected data-\">\n                  <div class=\"user__info\">\n                    <div class=\"user__photo\">\n                      <img\n                        srcset=\"\n                          assets/images/1x/").concat(users[selectedUserIndex].avatar, " 64w,\n                          assets/images/2x/").concat(users[selectedUserIndex].avatar, " 128w,\n                          assets/images/3x/").concat(users[selectedUserIndex].avatar, " 192w,\n                          assets/images/4x/").concat(users[selectedUserIndex].avatar, " 256w,\n                        \"\n                        sizes=\"\n                          (max-width: 567px) 64px,\n                          (max-width: 768px) 128px,\n                          (max-width: 1365px) 192px,\n                          256px\n                          \"\n                        src=\"assets/images/1x/").concat(users[selectedUserIndex].avatar, "\"\n                        alt=\"").concat(users[selectedUserIndex].avatar, "\"\n                      />\n                      <span class=\"user__photo user__photo__emoji\" >\uD83D\uDC4D</span>\n                    </div>\n                    <div class=\"user__data\">\n                      <span class=\"user__name\">").concat(users[selectedUserIndex].name, "</span>\n                      <span class=\"user__count\">").concat(users[selectedUserIndex].valueText, "</span>\n                    </div>\n                  </div>\n                  <div class=\"user__place-number user__place-number--selected\">").concat(selectedUserIndex + 1, "</div>\n              </div>") : "", "\n              </div>\n            </div>\n          </li>\n          ");
  }).join(''), "\n        </ul>\n      </div>\n    </div>\n  </section>\n");
}

function showVote(_ref2) {
  var title = _ref2.title,
      subtitle = _ref2.subtitle,
      users = _ref2.users,
      offset = _ref2.offset,
      selectedUserId = _ref2.selectedUserId;
  return "<section class=\"vote\">\n            <div class=\"container\">\n              <div class=\"wrapper\">\n                <div class=\"heading heading__container\">\n                  <h1 class=\"heading heading--primary\">".concat(title, "</h1>\n                  <h2 class=\"heading heading--secondary\">").concat(subtitle, "</h2>\n                </div>\n                <ul class=\"vote__users\">\n                  ").concat(users.map(function (_ref3) {
    var id = _ref3.id,
        name = _ref3.name,
        avatar = _ref3.avatar;
    return "<li class=\"vote__users__item vote__users__item--".concat(id, "\">\n                      <button \n                        data-action=\"update\" \n                        data-params=\"data-params='{ \"alias\": \"vote\", \"data\": { \"selectedUserId\": \"").concat(selectedUserId, "\" }}\" \n                        class=\"vote__users__button vote__users__button--").concat(id === selectedUserId ? "selected" : "", "\">\n                        <div class=\"vote__user\">\n                          <img srcset=\"\n                          assets/images/1x/").concat(avatar, " 64w,\n                          assets/images/2x/").concat(avatar, " 128w,\n                          assets/images/3x/").concat(avatar, " 192w,\n                          assets/images/4x/").concat(avatar, " 256w,\n                        \" sizes=\"\n                          (max-width: 567px) 64px,\n                          (max-width: 768px) 128px,\n                          (max-width: 1365px) 192px,\n                          256px\" src=\"assets/images/1x/").concat(avatar, "\" alt=\"").concat(avatar, "\" />\n                          <span class=\"vote__user__name\">\n                           ").concat(name, "\n                          </span>\n                          ").concat(id === selectedUserId ? "<span class=\"vote__user__emoji\">\uD83D\uDC4D</span>" : "", "\n                        </div>\n                      </button>\n                    </li>");
  }).join(""), "\n                    <li class=\"vote__users__item vote__users__item--13\">\n                      <button data-action=\"update\" data-params='{ \"alias\": \"vote\", \"data\": { \"offset\": \"").concat(offset, "\" }}'  class=\"vote__users__wrapper\">\n                        <svg width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                            d=\"M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z\"\n                            fill=\"#FCFBF7\" />\n                        </svg>\n                      </button>\n                    </li>\n                    <li class=\"vote__users__item vote__users__item--14\">\n                      <button data-action=\"update\" data-params='{ \"alias\": \"vote\", \"data\": { \"offset\": \"").concat(offset, "\" }}' class=\"vote__users__wrapper\">\n                        <svg width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                            d=\"M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z\"\n                            fill=\"#FCFBF7\" />\n                        </svg>\n                      </button>\n                    </li>\n                  </ul>\n              </div>\n          </section>");
}

function showChart(_ref4) {
  var title = _ref4.title,
      subtitle = _ref4.subtitle,
      values = _ref4.values,
      users = _ref4.users;
  var maxValue = Math.max.apply(Math, _toConsumableArray(values.map(function (_ref5) {
    var value = _ref5.value;
    return value;
  })));
  return "<section class=\"chart\">\n  <div class=\"container chart__container\">\n    <div class=\"heading heading__container\">\n      <h1 class=\"heading heading--primary\">".concat(title, "</h1>\n      <h2 class=\"heading heading--secondary\">").concat(subtitle, "</h2>\n    </div>\n    <div class=\"chart__wrapper\">\n      <div class=\"chart__bars\">\n      ").concat(values.splice(4, 9).map(function (_ref6) {
    var title = _ref6.title,
        value = _ref6.value,
        active = _ref6.active;
    var percentage = value / maxValue * 100;
    return "\n        <div class=\"chart__item ".concat(active ? "chart__item__bar--active" : "", "\">\n          ").concat(value > 0 ? "<span class=\"chart__item__value\">".concat(value, "</span>") : "", "\n          <div class=\"chart__item__bar chart__item__bar--").concat(~~percentage, "\"></div>\n          <span class=\"chart__item__title\">").concat(title, "</span>\n        </div>\n    ");
  }).join(''), "}\n      </div>\n      <ul class=\"chart__users\">\n      ").concat(users.map(function (_ref7) {
    var name = _ref7.name,
        avatar = _ref7.avatar,
        valueText = _ref7.valueText;
    return "\n        <div class=\"user chart__user\">\n          <div class=\"user__info chart__user__info\">\n            <div class=\"user__photo chart__user__photo\">\n              <img\n                srcset=\"\n                  assets/images/1x/".concat(avatar, " 64w,\n                  assets/images/2x/").concat(avatar, " 128w,\n                  assets/images/3x/").concat(avatar, " 192w,\n                  assets/images/4x/").concat(avatar, " 256w,\n                \"\n                sizes=\"\n                  (max-width: 567px) 64px,\n                  (max-width: 768px) 128px,\n                  (max-width: 1365px) 192px,\n                  256px\n                  \"\n                src=\"assets/images/1x/").concat(avatar, "\"\n                alt=\"").concat(avatar, "\"\n              />\n          </div>\n          <div class=\"user__data chart__user__data\">\n            <span class=\"user__name\">").concat(name, "</span>\n            <span class=\"user__count chart__user__count\">").concat(valueText, "</span>\n          </div>\n        </div>\n        </div>\n      ");
  }).join(""), "\n        </ul>\n    </div>\n  </div>\n</section>");
}

function showDiagram(_ref8) {
  var title = _ref8.title,
      subtitle = _ref8.subtitle,
      totalText = _ref8.totalText,
      differenceText = _ref8.differenceText,
      categories = _ref8.categories;
  return "\n  <section class=\"diagram\">\n      <div class=\"container diagram__container\">\n        <div class=\"heading heading__container\">\n          <h1 class=\"heading heading--primary\">".concat(title, "</h1>\n          <h2 class=\"heading heading--secondary\">").concat(subtitle, "</h2>\n        </div>\n        <div class=\"diagram__wrapper\">\n          <div class=\"donut-chart-block block\">\n            <div class=\"diagram__donut\">\n              <div class=\"diagram__donut__slice-outer diagram__donut__slice-outer--1\">\n                <div class=\"diagram__donut__slice-inner diagram__donut__slice-inner--1\"></div>\n              </div>\n              <div class=\"diagram__donut__slice-outer diagram__donut__slice-outer--2\">\n                <div class=\"diagram__donut__slice-inner diagram__donut__slice-inner--2\"></div>\n              </div>\n              <div class=\"diagram__donut__slice-outer diagram__donut__slice-outer--3\">\n                <div class=\"diagram__donut__slice-inner diagram__donut__slice-inner--3\"></div>\n              </div>\n              <div class=\"diagram__donut__slice-outer diagram__donut__slice-outer--4\">\n                <div class=\"diagram__donut__slice-inner diagram__donut__slice-inner--4\"></div>\n              </div>\n              <div class=\"diagram__donut__slice-center\">\n                <div class=\"diagram__donut__slice-center__wrapper\">\n                  <span class=\"diagram__donut__slice-center__commits\">").concat(totalText, "</span>\n                  <span class=\"diagram__donut__slice-center__plus\">").concat(differenceText, "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <ul class=\"diagram__legend\">\n          ").concat(categories.map(function (_ref9, index) {
    var title = _ref9.title,
        valueText = _ref9.valueText,
        differenceText = _ref9.differenceText;
    return "<li class=\"diagram__legend__item\">\n            <div class=\"diagram__legend__variants\">\n              <div class=\"diagram__legend__circle diagram__legend__circle--".concat(index + 1, "\"></div>\n              <span class=\"diagram__legend__text\">").concat(title, "</span>\n            </div>\n            <div class=\"diagram__legend__value\">\n              <span class=\"diagram__legend__plus-commits\">").concat(differenceText.split(" ")[0], "</span>\n              <span class=\"diagram__legend__commits\">").concat(valueText.split(" ")[0], "</span>\n            </div>\n          </li>");
  }).join(""), "\n          </ul>\n        </div>\n      </div>\n    </section>\n  ");
}

function showActivity(_ref10) {
  var title = _ref10.title,
      subtitle = _ref10.subtitle,
      data = _ref10.data;

  var getValueByHour = function getValueByHour(hour) {
    if (hour === 1 || hour === 2) return "mid";
    if (hour === 3 || hour === 4) return "max";
    if (hour === 4 || hour === 5 || hour >= 6) return "extra";
    return "min";
  };

  var theme = document.body.classList.value === "theme_dark" || document.body.classList.value === "" ? "dark" : "light";
  return "<section class=\"activity\">\n  <div class=\"container activity__container\">\n    <div class=\"heading heading__container\">\n      <h1 class=\"heading heading--primary\">".concat(title, "</h1>\n      <h2 class=\"heading heading--secondary\">").concat(subtitle, "</h2>\n    </div>\n    <div class=\"activity__wrapper\">\n    <div class=\"activity__visual\">\n    ").concat(Object.keys(data).slice(0, 7).map(function (day) {
    return "<div class=\"activity__visual__day\">\n      <div class=\"activity__visual__hour\">\n        ".concat(data[day].map(function (hour, index) {
      return "<img srcset=\"\n              assets/images/1x/".concat(getValueByHour(hour), "-").concat(theme, ".png 34w,\n              assets/images/2x/").concat(getValueByHour(hour), "-").concat(theme, ".png 68w,\n              assets/images/3x/").concat(getValueByHour(hour), "-").concat(theme, ".png 102w,\n              assets/images/4x/").concat(getValueByHour(hour), "-").concat(theme, ".png 136w,\n            \"\n            sizes=\"\n              (max-width: 567px) 34px,\n              (max-width: 768px) 68px,\n              (max-width: 1365px) 102px,\n              136px\n            \"\n            class=\"\n              activity__visual__hour__value activity__visual__hour__value__").concat(index + 1, " \n              activity__visual__hour__value__").concat(index + 1, "--").concat(getValueByHour(hour), "\n              \"\n            src=\"./assets/images/1x/").concat(getValueByHour(hour), "-").concat(theme, ".png\" alt=\"").concat(day, "_").concat(hour, "\"\n            />");
    }).join(""), "\n      </div>\n    </div>");
  }).join(""), "\n  </div>\n  <div class=\"activity__legend\">\n    <div class=\"activity__legend__item\">\n      <div class=\"activity__legend__block activity__legend__block--center\">\n          <div class=\"activity__legend__block__hour\"></div>\n      </div>\n      <span class=\"activity__legend__value activity__legend__value--one\">1 \u0447\u0430\u0441</span>\n      <span class=\"activity__legend__value activity__legend__value--two\">2 \u0447\u0430\u0441\u0430</span>\n    </div>\n    <div class=\"activity__legend__item\">\n      <div class=\"activity__legend__block activity__legend__block--1\"></div>\n      <span class=\"activity__legend__value\">0</span>\n    </div>\n    <div class=\"activity__legend__item\">\n      <div class=\"activity__legend__block activity__legend__block--2\"></div>\n      <span class=\"activity__legend__value\">1\u2009\u2014\u20092</span>\n    </div>\n    <div class=\"activity__legend__item\">\n      <div class=\"activity__legend__block activity__legend__block--3\"></div>\n      <span class=\"activity__legend__value\">3\u2009\u2014\u20094</span>\n    </div>\n    <div class=\"activity__legend__item\">\n      <div class=\"activity__legend__block activity__legend__block--4\"></div>\n      <span class=\"activity__legend__value\">5\u2009\u2014\u20096</span>\n    </div>\n  </div>\n    </div>\n\n  </div>\n</section>");
}

window.renderTemplate = function (alias, data) {
  switch (alias) {
    case "leaders":
      return showLeaders(data);

    case "vote":
      return showVote(data);

    case "chart":
      return showChart(data);

    case "diagram":
      return showDiagram(data);

    case "activity":
      return showActivity(data);
  }
};

},{}]},{},[1]);

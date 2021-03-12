(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var data = [{
  "alias": "leaders",
  "data": {
    "title": "Больше всего коммитов",
    "subtitle": "Спринт № 213",
    "emoji": "👑",
    "users": [{
      "id": 3,
      "name": "Дарья Ковалева",
      "avatar": "3.jpg",
      "valueText": "32"
    }, {
      "id": 9,
      "name": "Сергей Бережной",
      "avatar": "9.jpg",
      "valueText": "27"
    }, {
      "id": 7,
      "name": "Дмитрий Андриянов",
      "avatar": "7.jpg",
      "valueText": "22"
    }, {
      "id": 6,
      "name": "Андрей Мокроусов",
      "avatar": "6.jpg",
      "valueText": "20"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "19"
    }]
  }
}, {
  "alias": "leaders",
  "data": {
    "title": "Самый большой коммит",
    "subtitle": "Спринт № 213",
    "emoji": "😮",
    "users": [{
      "id": 12,
      "name": "Алексей Ярошевич",
      "avatar": "12.jpg",
      "valueText": "4001 строка"
    }, {
      "id": 5,
      "name": "Александр Николаичев",
      "avatar": "5.jpg",
      "valueText": "3845 строк"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "3640 строк"
    }, {
      "id": 10,
      "name": "Яна Берникова",
      "avatar": "10.jpg",
      "valueText": "3453 строки"
    }, {
      "id": 4,
      "name": "Вадим Пацев",
      "avatar": "4.jpg",
      "valueText": "2852 строки"
    }]
  }
}, {
  "alias": "vote",
  "data": {
    "title": "Самый 🔎 внимательный разработчик",
    "subtitle": "Спринт № 213",
    "emoji": "🔎",
    "selectedUserId": 4,
    "users": [{
      "id": 1,
      "name": "Евгений Дементьев",
      "avatar": "1.jpg",
      "valueText": "22 голоса"
    }, {
      "id": 4,
      "name": "Вадим Пацев",
      "avatar": "4.jpg",
      "valueText": "19 голосов"
    }, {
      "id": 10,
      "name": "Яна Берникова",
      "avatar": "10.jpg",
      "valueText": "17 голосов"
    }, {
      "id": 12,
      "name": "Алексей Ярошевич",
      "avatar": "12.jpg",
      "valueText": "16 голосов"
    }, {
      "id": 11,
      "name": "Юрий Фролов",
      "avatar": "11.jpg",
      "valueText": "11 голосов"
    }, {
      "id": 2,
      "name": "Александр Шлейко",
      "avatar": "2.jpg",
      "valueText": "10 голосов"
    }, {
      "id": 5,
      "name": "Александр Николаичев",
      "avatar": "5.jpg",
      "valueText": "9 голосов"
    }, {
      "id": 6,
      "name": "Андрей Мокроусов",
      "avatar": "6.jpg",
      "valueText": "8 голосов"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "7 голосов"
    }, {
      "id": 7,
      "name": "Дмитрий Андриянов",
      "avatar": "7.jpg",
      "valueText": "6 голосов"
    }, {
      "id": 3,
      "name": "Дарья Ковалева",
      "avatar": "3.jpg",
      "valueText": "5 голосов"
    }, {
      "id": 9,
      "name": "Сергей Бережной",
      "avatar": "9.jpg",
      "valueText": "4 голоса"
    }]
  }
}, {
  "alias": "leaders",
  "data": {
    "title": "Самый 🔎 внимательный разработчик",
    "subtitle": "Спринт № 213",
    "emoji": "🔎",
    "selectedUserId": 11,
    "users": [{
      "id": 1,
      "name": "Евгений Дементьев",
      "avatar": "1.jpg",
      "valueText": "22 голоса"
    }, {
      "id": 4,
      "name": "Вадим Пацев",
      "avatar": "4.jpg",
      "valueText": "19 голосов"
    }, {
      "id": 10,
      "name": "Яна Берникова",
      "avatar": "10.jpg",
      "valueText": "17 голосов"
    }, {
      "id": 12,
      "name": "Алексей Ярошевич",
      "avatar": "12.jpg",
      "valueText": "16 голосов"
    }, {
      "id": 11,
      "name": "Юрий Фролов",
      "avatar": "11.jpg",
      "valueText": "15 голосов"
    }, {
      "id": 2,
      "name": "Александр Шлейко",
      "avatar": "2.jpg",
      "valueText": "14 голосов"
    }, {
      "id": 5,
      "name": "Александр Николаичев",
      "avatar": "5.jpg",
      "valueText": "12 голосов"
    }, {
      "id": 6,
      "name": "Андрей Мокроусов",
      "avatar": "6.jpg",
      "valueText": "9 голосов"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "8 голосов"
    }, {
      "id": 7,
      "name": "Дмитрий Андриянов",
      "avatar": "7.jpg",
      "valueText": "6 голосов"
    }, {
      "id": 3,
      "name": "Дарья Ковалева",
      "avatar": "3.jpg",
      "valueText": "5 голосов"
    }, {
      "id": 9,
      "name": "Сергей Бережной",
      "avatar": "9.jpg",
      "valueText": "4 голоса"
    }]
  }
}, {
  "alias": "vote",
  "data": {
    "title": "Самый 👪 командный разработчик",
    "subtitle": "Спринт № 213",
    "emoji": "👪",
    "offset": 8,
    "users": [{
      "id": 2,
      "name": "Александр Шлейко",
      "avatar": "2.jpg",
      "valueText": "24 голоса"
    }, {
      "id": 3,
      "name": "Дарья Ковалева",
      "avatar": "3.jpg",
      "valueText": "21 голос"
    }, {
      "id": 6,
      "name": "Андрей Мокроусов",
      "avatar": "6.jpg",
      "valueText": "19 голосов"
    }, {
      "id": 7,
      "name": "Дмитрий Андриянов",
      "avatar": "7.jpg",
      "valueText": "18 голосов"
    }, {
      "id": 1,
      "name": "Евгений Дементьев",
      "avatar": "1.jpg",
      "valueText": "16 голосов"
    }, {
      "id": 9,
      "name": "Сергей Бережной",
      "avatar": "9.jpg",
      "valueText": "14 голосов"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "13 голосов"
    }, {
      "id": 11,
      "name": "Юрий Фролов",
      "avatar": "11.jpg",
      "valueText": "11 голосов"
    }, {
      "id": 10,
      "name": "Яна Берникова",
      "avatar": "10.jpg",
      "valueText": "9 голосов"
    }, {
      "id": 12,
      "name": "Алексей Ярошевич",
      "avatar": "12.jpg",
      "valueText": "7 голосов"
    }, {
      "id": 5,
      "name": "Александр Николаичев",
      "avatar": "5.jpg",
      "valueText": "6 голосов"
    }, {
      "id": 4,
      "name": "Вадим Пацев",
      "avatar": "4.jpg",
      "valueText": "5 голосов"
    }]
  }
}, {
  "alias": "leaders",
  "data": {
    "title": "Самый 👪 командный разработчик",
    "subtitle": "Спринт № 213",
    "emoji": "👪",
    "selectedUserId": 6,
    "users": [{
      "id": 2,
      "name": "Александр Шлейко",
      "avatar": "2.jpg",
      "valueText": "24 голоса"
    }, {
      "id": 3,
      "name": "Дарья Ковалева",
      "avatar": "3.jpg",
      "valueText": "21 голос"
    }, {
      "id": 6,
      "name": "Андрей Мокроусов",
      "avatar": "6.jpg",
      "valueText": "19 голосов"
    }, {
      "id": 7,
      "name": "Дмитрий Андриянов",
      "avatar": "7.jpg",
      "valueText": "18 голосов"
    }, {
      "id": 1,
      "name": "Евгений Дементьев",
      "avatar": "1.jpg",
      "valueText": "16 голосов"
    }, {
      "id": 9,
      "name": "Сергей Бережной",
      "avatar": "9.jpg",
      "valueText": "14 голосов"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "13 голосов"
    }, {
      "id": 11,
      "name": "Юрий Фролов",
      "avatar": "11.jpg",
      "valueText": "11 голосов"
    }, {
      "id": 10,
      "name": "Яна Берникова",
      "avatar": "10.jpg",
      "valueText": "9 голосов"
    }, {
      "id": 12,
      "name": "Алексей Ярошевич",
      "avatar": "12.jpg",
      "valueText": "7 голосов"
    }, {
      "id": 5,
      "name": "Александр Николаичев",
      "avatar": "5.jpg",
      "valueText": "6 голосов"
    }, {
      "id": 4,
      "name": "Вадим Пацев",
      "avatar": "4.jpg",
      "valueText": "5 голосов"
    }]
  }
}, {
  "alias": "chart",
  "data": {
    "title": "Коммиты",
    "subtitle": "Спринт № 213",
    "values": [{
      "title": "203",
      "value": 108
    }, {
      "title": "204",
      "value": 160
    }, {
      "title": "205",
      "value": 126
    }, {
      "title": "206",
      "value": 134
    }, {
      "title": "207",
      "value": 112
    }, {
      "title": "208",
      "value": 152
    }, {
      "title": "209",
      "value": 128
    }, {
      "title": "210",
      "value": 164
    }, {
      "title": "211",
      "value": 118
    }, {
      "title": "212",
      "value": 140
    }, {
      "title": "213",
      "value": 182,
      "active": true
    }, {
      "title": "214",
      "value": 0
    }, {
      "title": "215",
      "value": 0
    }, {
      "title": "216",
      "value": 0
    }, {
      "title": "217",
      "value": 0
    }, {
      "title": "218",
      "value": 0
    }],
    "users": [{
      "id": 3,
      "name": "Дарья Ковалева",
      "avatar": "3.jpg",
      "valueText": "32"
    }, {
      "id": 9,
      "name": "Сергей Бережной",
      "avatar": "9.jpg",
      "valueText": "27"
    }, {
      "id": 7,
      "name": "Дмитрий Андриянов",
      "avatar": "7.jpg",
      "valueText": "22"
    }]
  }
}, {
  "alias": "chart",
  "data": {
    "title": "Строки кода",
    "subtitle": "Спринт № 213",
    "values": [{
      "title": "203",
      "value": 47798
    }, {
      "title": "204",
      "value": 68590
    }, {
      "title": "205",
      "value": 55472
    }, {
      "title": "206",
      "value": 63073
    }, {
      "title": "207",
      "value": 51917
    }, {
      "title": "208",
      "value": 65852
    }, {
      "title": "209",
      "value": 60693
    }, {
      "title": "210",
      "value": 70631
    }, {
      "title": "211",
      "value": 57299
    }, {
      "title": "212",
      "value": 62839
    }, {
      "title": "213",
      "value": 74156,
      "active": true
    }, {
      "title": "214",
      "value": 0
    }, {
      "title": "215",
      "value": 0
    }, {
      "title": "216",
      "value": 0
    }, {
      "title": "217",
      "value": 0
    }, {
      "title": "218",
      "value": 0
    }],
    "users": [{
      "id": 12,
      "name": "Алексей Ярошевич",
      "avatar": "12.jpg",
      "valueText": "8739"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "7538"
    }, {
      "id": 10,
      "name": "Яна Берникова",
      "avatar": "10.jpg",
      "valueText": "6845"
    }]
  }
}, {
  "alias": "diagram",
  "data": {
    "title": "Размер коммитов",
    "subtitle": "Спринт № 213",
    "totalText": "182 коммита",
    "differenceText": "+42 с прошлого спринта",
    "categories": [{
      "title": "> 1001 строки",
      "valueText": "30 коммитов",
      "differenceText": "+8 коммитов"
    }, {
      "title": "501 — 1000 строк",
      "valueText": "32 коммита",
      "differenceText": "+6 коммитов"
    }, {
      "title": "101 — 500 строк",
      "valueText": "58 коммитов",
      "differenceText": "+16 коммитов"
    }, {
      "title": "1 — 100 строк",
      "valueText": "62 коммита",
      "differenceText": "+12 коммитов"
    }]
  }
}, {
  "alias": "activity",
  "data": {
    "title": "Коммиты, 1 неделя",
    "subtitle": "Спринт № 213",
    "data": {
      "mon": [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 3, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      "tue": [0, 0, 0, 0, 1, 0, 0, 0, 0, 5, 0, 4, 0, 0, 0, 0, 1, 0, 3, 0, 0, 2, 1, 0],
      "wed": [1, 0, 0, 0, 1, 0, 5, 0, 0, 4, 0, 0, 0, 5, 0, 2, 1, 0, 0, 0, 0, 0, 0, 1],
      "thu": [0, 1, 0, 1, 0, 0, 0, 0, 6, 0, 1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0],
      "fri": [0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 5, 0, 4, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0],
      "sat": [0, 0, 0, 0, 2, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      "sun": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
    }
  }
}, {
  "alias": "activity",
  "data": {
    "title": "Коммиты, 2 неделя",
    "subtitle": "Спринт № 213",
    "data": {
      "mon": [0, 1, 1, 1, 0, 0, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 2],
      "tue": [0, 1, 2, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "wed": [0, 0, 0, 0, 2, 0, 1, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 0, 0],
      "thu": [0, 0, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 1, 2, 0, 3, 0, 1, 1, 0, 0, 0],
      "fri": [0, 0, 0, 1, 1, 0, 2, 0, 4, 0, 0, 0, 2, 0, 3, 2, 0, 0, 0, 0, 1, 1, 0, 1],
      "sat": [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0],
      "sun": [0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    }
  }
}];
var _default = data;
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _data = _interopRequireDefault(require("../data"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

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
    return "\n            <li class=\"leaders__item\">\n              <div class=\"user\">\n                <div class=\"user__info\">\n                  <div class=\"user__photo\">\n                    <img\n                      srcset=\"\n                        assets/images/1x/".concat(user.avatar, " 64w,\n                        assets/images/2x/").concat(user.avatar, " 128w,\n                        assets/images/3x/").concat(user.avatar, " 192w,\n                        assets/images/4x/").concat(user.avatar, " 256w,\n                      \"\n                      sizes=\"\n                        (max-width: 567px) 64px,\n                        (max-width: 768px) 128px,\n                        (max-width: 1365px) 192px,\n                        256px\n                        \"\n                      src=\"assets/images/1x/").concat(user.avatar, "\"\n                      alt=\"").concat(user.avatar, "\"\n                    />\n                  ").concat(userIndex === 0 ? "<span class=\"user__photo user__photo__emoji\">".concat(emoji, "</span>") : '', " \n                  ").concat(userIndex === users.length - 1 ? "<span class=\"user__photo user__photo__emoji\">\uD83D\uDC4D</span>" : '', "\n                </div>\n                <div class=\"user__data\">\n                  <span class=\"user__name\">").concat(user.name, "</span>\n                  <span class=\"user__count\">").concat(user.valueText, "</span>\n                </div>\n              </div>\n              <div class=\"user__place user__place--").concat(userIndex + 1, "\">\n                <span class=\"user__place-number\">").concat(userIndex + 1, "</span>\n                ").concat(userIndex === 0 && selectedUserIndex && users[selectedUserIndex] ? "<div class=\"user user--selected\">\n                  <div class=\"user__info\">\n                    <div class=\"user__photo\">\n                      <img\n                        srcset=\"\n                          assets/images/1x/".concat(users[selectedUserIndex].avatar, " 64w,\n                          assets/images/2x/").concat(users[selectedUserIndex].avatar, " 128w,\n                          assets/images/3x/").concat(users[selectedUserIndex].avatar, " 192w,\n                          assets/images/4x/").concat(users[selectedUserIndex].avatar, " 256w,\n                        \"\n                        sizes=\"\n                          (max-width: 567px) 64px,\n                          (max-width: 768px) 128px,\n                          (max-width: 1365px) 192px,\n                          256px\n                          \"\n                        src=\"assets/images/1x/").concat(users[selectedUserIndex].avatar, "\"\n                        alt=\"").concat(users[selectedUserIndex].avatar, "\"\n                      />\n                      <span class=\"user__photo user__photo__emoji\" >\uD83D\uDC4D</span>\n                    </div>\n                    <div class=\"user__data\">\n                      <span class=\"user__name\">").concat(users[selectedUserIndex].name, "</span>\n                      <span class=\"user__count\">").concat(users[selectedUserIndex].valueText, "</span>\n                    </div>\n                  </div>\n                  <div class=\"user__place-number user__place-number--selected\">").concat(selectedUserIndex + 1, "</div>\n              </div>") : "", "\n              </div>\n            </div>\n          </li>\n          ");
  }).join(''), "\n        </ul>\n      </div>\n    </div>\n  </section>\n");
}

function showVote(_ref2) {
  var title = _ref2.title,
      subtitle = _ref2.subtitle,
      users = _ref2.users,
      selectedUserId = _ref2.selectedUserId;
  return "<section class=\"vote\">\n            <div class=\"container\">\n              <div class=\"wrapper\">\n                <div class=\"heading heading__container\">\n                  <h1 class=\"heading heading--primary\">".concat(title, "</h1>\n                  <h2 class=\"heading heading--secondary\">").concat(subtitle, "</h2>\n                </div>\n                <ul class=\"users\">\n                  ").concat(users.slice(0, 8).map(function (user, userIndex) {
    return "\n                    <li class=\"users__item\">\n                      <button class=\"users__button\">\n                        <div class=\"user\">\n                          <div class=\"user__info\">\n                            <div class=\"user__photo\">\n                              <img\n                                srcset=\"\n                                  assets/images/1x/".concat(user.avatar, "  64w,\n                                  assets/images/2x/").concat(user.avatar, " 128w,\n                                  assets/images/3x/").concat(user.avatar, " 192w,\n                                  assets/images/4x/").concat(user.avatar, " 256w\n                                \"\n                                sizes=\"\n                                (max-width: 567px) 64px,\n                                (max-width: 768px) 128px,\n                                (max-width: 1365px) 192px,\n                                256px\n                                \"\n                                src=\"assets/images/1x/").concat(user.avatar, "\"\n                                alt=\"").concat(user.avatar, "\"\n                              />\n                            </div>\n                          </div>\n                          <div class=\"user__data\">\n                            <span class=\"user__name\">").concat(user.name, "</span>\n                          </div>\n                        </div>\n                      </button>\n                    </li>");
  }).join(""), "\n                  </ul>\n                </div>\n              </div>\n          </section>");
}

window.renderTemplate = function (alias, data) {
  if (alias === "leaders") {
    return showLeaders(data);
  }

  if (alias === "vote") {
    return showVote(data);
  }
}; // document.body.innerHTML = renderTemplate("leaders", data[0].data)

},{"../data":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YS5qcyIsInNyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQU0sSUFBSSxHQUFHLENBQ1o7QUFDQyxXQUFTLFNBRFY7QUFFQyxVQUFRO0FBQ1AsYUFBUyx1QkFERjtBQUVQLGdCQUFZLGNBRkw7QUFHUCxhQUFTLElBSEY7QUFJUCxhQUFTLENBQ1I7QUFBRSxZQUFNLENBQVI7QUFBVyxjQUFRLGdCQUFuQjtBQUFxQyxnQkFBVSxPQUEvQztBQUF3RCxtQkFBYTtBQUFyRSxLQURRLEVBRVI7QUFBRSxZQUFNLENBQVI7QUFBVyxjQUFRLGlCQUFuQjtBQUFzQyxnQkFBVSxPQUFoRDtBQUF5RCxtQkFBYTtBQUF0RSxLQUZRLEVBR1I7QUFBRSxZQUFNLENBQVI7QUFBVyxjQUFRLG1CQUFuQjtBQUF3QyxnQkFBVSxPQUFsRDtBQUEyRCxtQkFBYTtBQUF4RSxLQUhRLEVBSVI7QUFBRSxZQUFNLENBQVI7QUFBVyxjQUFRLGtCQUFuQjtBQUF1QyxnQkFBVSxPQUFqRDtBQUEwRCxtQkFBYTtBQUF2RSxLQUpRLEVBS1I7QUFBRSxZQUFNLENBQVI7QUFBVyxjQUFRLG1CQUFuQjtBQUF3QyxnQkFBVSxPQUFsRDtBQUEyRCxtQkFBYTtBQUF4RSxLQUxRO0FBSkY7QUFGVCxDQURZLEVBZ0JaO0FBQ0MsV0FBUyxTQURWO0FBRUMsVUFBUTtBQUNQLGFBQVMsc0JBREY7QUFFUCxnQkFBWSxjQUZMO0FBR1AsYUFBUyxJQUhGO0FBSVAsYUFBUyxDQUNSO0FBQUUsWUFBTSxFQUFSO0FBQVksY0FBUSxrQkFBcEI7QUFBd0MsZ0JBQVUsUUFBbEQ7QUFBNEQsbUJBQWE7QUFBekUsS0FEUSxFQUVSO0FBQUUsWUFBTSxDQUFSO0FBQVcsY0FBUSxzQkFBbkI7QUFBMkMsZ0JBQVUsT0FBckQ7QUFBOEQsbUJBQWE7QUFBM0UsS0FGUSxFQUdSO0FBQUUsWUFB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SUFBSSxDQVZmLE1BQUEsRUFBQSw2REFBQSxFQUFBLE1BQUEsQ0FXVyxJQUFJLENBWGYsTUFBQSxFQUFBLDBZQUFBLEVBQUEsTUFBQSxDQW1CYyxJQUFJLENBbkJsQixNQUFBLEVBQUEsNENBQUEsRUFBQSxNQUFBLENBb0JILElBQUksQ0FwQkQsTUFBQSxFQUFBLDJOQUFBLEVBQUEsTUFBQSxDQXlCYSxJQUFJLENBekJqQixJQUFBLEVBQUEsdUlBQUEsQ0FBQTtBQUF0QixHQUFBLEVBQUEsSUFBQSxDQVJsQixFQVFrQixDQVJsQixFQUFBLCtGQUFBLENBQUE7QUEwQ0Q7O0FBR0QsTUFBTSxDQUFOLGNBQUEsR0FBd0IsVUFBQSxLQUFBLEVBQUEsSUFBQSxFQUF1QjtBQUM3QyxNQUFJLEtBQUssS0FBVCxTQUFBLEVBQXlCO0FBQ3ZCLFdBQU8sV0FBVyxDQUFsQixJQUFrQixDQUFsQjtBQUNEOztBQUVELE1BQUksS0FBSyxLQUFULE1BQUEsRUFBc0I7QUFDcEIsV0FBTyxRQUFRLENBQWYsSUFBZSxDQUFmO0FBQ0Q7QUFQSCxDQUFBLEMsQ0FVQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGRhdGEgPSBbXHJcblx0e1xyXG5cdFx0XCJhbGlhc1wiOiBcImxlYWRlcnNcIixcclxuXHRcdFwiZGF0YVwiOiB7XHJcblx0XHRcdFwidGl0bGVcIjogXCLQkdC+0LvRjNGI0LUg0LLRgdC10LPQviDQutC+0LzQvNC40YLQvtCyXCIsXHJcblx0XHRcdFwic3VidGl0bGVcIjogXCLQodC/0YDQuNC90YIg4oSWIDIxM1wiLFxyXG5cdFx0XHRcImVtb2ppXCI6IFwi8J+RkVwiLFxyXG5cdFx0XHRcInVzZXJzXCI6IFtcclxuXHRcdFx0XHR7IFwiaWRcIjogMywgXCJuYW1lXCI6IFwi0JTQsNGA0YzRjyDQmtC+0LLQsNC70LXQstCwXCIsIFwiYXZhdGFyXCI6IFwiMy5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIzMlwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDksIFwibmFtZVwiOiBcItCh0LXRgNCz0LXQuSDQkdC10YDQtdC20L3QvtC5XCIsIFwiYXZhdGFyXCI6IFwiOS5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIyN1wiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDcsIFwibmFtZVwiOiBcItCU0LzQuNGC0YDQuNC5INCQ0L3QtNGA0LjRj9C90L7QslwiLCBcImF2YXRhclwiOiBcIjcuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMjJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA2LCBcIm5hbWVcIjogXCLQkNC90LTRgNC10Lkg0JzQvtC60YDQvtGD0YHQvtCyXCIsIFwiYXZhdGFyXCI6IFwiNi5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIyMFwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDgsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQsNC90LTRgCDQmNCy0LDQvdC60L7QslwiLCBcImF2YXRhclwiOiBcIjguanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTlcIiB9XHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiYWxpYXNcIjogXCJsZWFkZXJzXCIsXHJcblx0XHRcImRhdGFcIjoge1xyXG5cdFx0XHRcInRpdGxlXCI6IFwi0KHQsNC80YvQuSDQsdC+0LvRjNGI0L7QuSDQutC+0LzQvNC40YJcIixcclxuXHRcdFx0XCJzdWJ0aXRsZVwiOiBcItCh0L/RgNC40L3RgiDihJYgMjEzXCIsXHJcblx0XHRcdFwiZW1vamlcIjogXCLwn5iuXCIsXHJcblx0XHRcdFwidXNlcnNcIjogW1xyXG5cdFx0XHRcdHsgXCJpZFwiOiAxMiwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdC10Lkg0K/RgNC+0YjQtdCy0LjRh1wiLCBcImF2YXRhclwiOiBcIjEyLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjQwMDEg0YHRgtGA0L7QutCwXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNSwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdCw0L3QtNGAINCd0LjQutC+0LvQsNC40YfQtdCyXCIsIFwiYXZhdGFyXCI6IFwiNS5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIzODQ1INGB0YLRgNC+0LpcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA4LCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0JjQstCw0L3QutC+0LJcIiwgXCJhdmF0YXJcIjogXCI4LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjM2NDAg0YHRgtGA0L7QulwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDEwLCBcIm5hbWVcIjogXCLQr9C90LAg0JHQtdGA0L3QuNC60L7QstCwXCIsIFwiYXZhdGFyXCI6IFwiMTAuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMzQ1MyDRgdGC0YDQvtC60LhcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA0LCBcIm5hbWVcIjogXCLQktCw0LTQuNC8INCf0LDRhtC10LJcIiwgXCJhdmF0YXJcIjogXCI0LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjI4NTIg0YHRgtGA0L7QutC4XCIgfVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSxcclxuXHR7XHJcblx0XHRcImFsaWFzXCI6IFwidm90ZVwiLFxyXG5cdFx0XCJkYXRhXCI6IHtcclxuXHRcdFx0XCJ0aXRsZVwiOiBcItCh0LDQvNGL0Lkg8J+UjiDQstC90LjQvNCw0YLQtdC70YzQvdGL0Lkg0YDQsNC30YDQsNCx0L7RgtGH0LjQulwiLFxyXG5cdFx0XHRcInN1YnRpdGxlXCI6IFwi0KHQv9GA0LjQvdGCIOKEliAyMTNcIixcclxuXHRcdFx0XCJlbW9qaVwiOiBcIvCflI5cIixcclxuXHRcdFx0XCJzZWxlY3RlZFVzZXJJZFwiOiA0LFxyXG5cdFx0XHRcInVzZXJzXCI6IFtcclxuXHRcdFx0XHR7IFwiaWRcIjogMSwgXCJuYW1lXCI6IFwi0JXQstCz0LXQvdC40Lkg0JTQtdC80LXQvdGC0YzQtdCyXCIsIFwiYXZhdGFyXCI6IFwiMS5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIyMiDQs9C+0LvQvtGB0LBcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA0LCBcIm5hbWVcIjogXCLQktCw0LTQuNC8INCf0LDRhtC10LJcIiwgXCJhdmF0YXJcIjogXCI0LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjE5INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMTAsIFwibmFtZVwiOiBcItCv0L3QsCDQkdC10YDQvdC40LrQvtCy0LBcIiwgXCJhdmF0YXJcIjogXCIxMC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxNyDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDEyLCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LXQuSDQr9GA0L7RiNC10LLQuNGHXCIsIFwiYXZhdGFyXCI6IFwiMTIuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTYg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAxMSwgXCJuYW1lXCI6IFwi0K7RgNC40Lkg0KTRgNC+0LvQvtCyXCIsIFwiYXZhdGFyXCI6IFwiMTEuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTEg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAyLCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0KjQu9C10LnQutC+XCIsIFwiYXZhdGFyXCI6IFwiMi5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxMCDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDUsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQsNC90LTRgCDQndC40LrQvtC70LDQuNGH0LXQslwiLCBcImF2YXRhclwiOiBcIjUuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiOSDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDYsIFwibmFtZVwiOiBcItCQ0L3QtNGA0LXQuSDQnNC+0LrRgNC+0YPRgdC+0LJcIiwgXCJhdmF0YXJcIjogXCI2LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjgg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA4LCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0JjQstCw0L3QutC+0LJcIiwgXCJhdmF0YXJcIjogXCI4LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjcg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA3LCBcIm5hbWVcIjogXCLQlNC80LjRgtGA0LjQuSDQkNC90LTRgNC40Y/QvdC+0LJcIiwgXCJhdmF0YXJcIjogXCI3LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjYg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAzLCBcIm5hbWVcIjogXCLQlNCw0YDRjNGPINCa0L7QstCw0LvQtdCy0LBcIiwgXCJhdmF0YXJcIjogXCIzLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjUg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA5LCBcIm5hbWVcIjogXCLQodC10YDQs9C10Lkg0JHQtdGA0LXQttC90L7QuVwiLCBcImF2YXRhclwiOiBcIjkuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiNCDQs9C+0LvQvtGB0LBcIiB9XHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiYWxpYXNcIjogXCJsZWFkZXJzXCIsXHJcblx0XHRcImRhdGFcIjoge1xyXG5cdFx0XHRcInRpdGxlXCI6IFwi0KHQsNC80YvQuSDwn5SOINCy0L3QuNC80LDRgtC10LvRjNC90YvQuSDRgNCw0LfRgNCw0LHQvtGC0YfQuNC6XCIsXHJcblx0XHRcdFwic3VidGl0bGVcIjogXCLQodC/0YDQuNC90YIg4oSWIDIxM1wiLFxyXG5cdFx0XHRcImVtb2ppXCI6IFwi8J+UjlwiLFxyXG5cdFx0XHRcInNlbGVjdGVkVXNlcklkXCI6IDExLFxyXG5cdFx0XHRcInVzZXJzXCI6IFtcclxuXHRcdFx0XHR7IFwiaWRcIjogMSwgXCJuYW1lXCI6IFwi0JXQstCz0LXQvdC40Lkg0JTQtdC80LXQvdGC0YzQtdCyXCIsIFwiYXZhdGFyXCI6IFwiMS5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIyMiDQs9C+0LvQvtGB0LBcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA0LCBcIm5hbWVcIjogXCLQktCw0LTQuNC8INCf0LDRhtC10LJcIiwgXCJhdmF0YXJcIjogXCI0LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjE5INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMTAsIFwibmFtZVwiOiBcItCv0L3QsCDQkdC10YDQvdC40LrQvtCy0LBcIiwgXCJhdmF0YXJcIjogXCIxMC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxNyDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDEyLCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LXQuSDQr9GA0L7RiNC10LLQuNGHXCIsIFwiYXZhdGFyXCI6IFwiMTIuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTYg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAxMSwgXCJuYW1lXCI6IFwi0K7RgNC40Lkg0KTRgNC+0LvQvtCyXCIsIFwiYXZhdGFyXCI6IFwiMTEuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTUg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAyLCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0KjQu9C10LnQutC+XCIsIFwiYXZhdGFyXCI6IFwiMi5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxNCDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDUsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQsNC90LTRgCDQndC40LrQvtC70LDQuNGH0LXQslwiLCBcImF2YXRhclwiOiBcIjUuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTIg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA2LCBcIm5hbWVcIjogXCLQkNC90LTRgNC10Lkg0JzQvtC60YDQvtGD0YHQvtCyXCIsIFwiYXZhdGFyXCI6IFwiNi5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI5INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogOCwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdCw0L3QtNGAINCY0LLQsNC90LrQvtCyXCIsIFwiYXZhdGFyXCI6IFwiOC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI4INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNywgXCJuYW1lXCI6IFwi0JTQvNC40YLRgNC40Lkg0JDQvdC00YDQuNGP0L3QvtCyXCIsIFwiYXZhdGFyXCI6IFwiNy5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI2INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMywgXCJuYW1lXCI6IFwi0JTQsNGA0YzRjyDQmtC+0LLQsNC70LXQstCwXCIsIFwiYXZhdGFyXCI6IFwiMy5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI1INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogOSwgXCJuYW1lXCI6IFwi0KHQtdGA0LPQtdC5INCR0LXRgNC10LbQvdC+0LlcIiwgXCJhdmF0YXJcIjogXCI5LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjQg0LPQvtC70L7RgdCwXCIgfVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSxcclxuXHR7XHJcblx0XHRcImFsaWFzXCI6IFwidm90ZVwiLFxyXG5cdFx0XCJkYXRhXCI6IHtcclxuXHRcdFx0XCJ0aXRsZVwiOiBcItCh0LDQvNGL0Lkg8J+RqiDQutC+0LzQsNC90LTQvdGL0Lkg0YDQsNC30YDQsNCx0L7RgtGH0LjQulwiLFxyXG5cdFx0XHRcInN1YnRpdGxlXCI6IFwi0KHQv9GA0LjQvdGCIOKEliAyMTNcIixcclxuXHRcdFx0XCJlbW9qaVwiOiBcIvCfkapcIixcclxuXHRcdFx0XCJvZmZzZXRcIjogOCxcclxuXHRcdFx0XCJ1c2Vyc1wiOiBbXHJcblx0XHRcdFx0eyBcImlkXCI6IDIsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQsNC90LTRgCDQqNC70LXQudC60L5cIiwgXCJhdmF0YXJcIjogXCIyLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjI0INCz0L7Qu9C+0YHQsFwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDMsIFwibmFtZVwiOiBcItCU0LDRgNGM0Y8g0JrQvtCy0LDQu9C10LLQsFwiLCBcImF2YXRhclwiOiBcIjMuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMjEg0LPQvtC70L7RgVwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDYsIFwibmFtZVwiOiBcItCQ0L3QtNGA0LXQuSDQnNC+0LrRgNC+0YPRgdC+0LJcIiwgXCJhdmF0YXJcIjogXCI2LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjE5INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNywgXCJuYW1lXCI6IFwi0JTQvNC40YLRgNC40Lkg0JDQvdC00YDQuNGP0L3QvtCyXCIsIFwiYXZhdGFyXCI6IFwiNy5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxOCDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDEsIFwibmFtZVwiOiBcItCV0LLQs9C10L3QuNC5INCU0LXQvNC10L3RgtGM0LXQslwiLCBcImF2YXRhclwiOiBcIjEuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTYg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA5LCBcIm5hbWVcIjogXCLQodC10YDQs9C10Lkg0JHQtdGA0LXQttC90L7QuVwiLCBcImF2YXRhclwiOiBcIjkuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTQg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA4LCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0JjQstCw0L3QutC+0LJcIiwgXCJhdmF0YXJcIjogXCI4LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjEzINCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMTEsIFwibmFtZVwiOiBcItCu0YDQuNC5INCk0YDQvtC70L7QslwiLCBcImF2YXRhclwiOiBcIjExLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjExINCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMTAsIFwibmFtZVwiOiBcItCv0L3QsCDQkdC10YDQvdC40LrQvtCy0LBcIiwgXCJhdmF0YXJcIjogXCIxMC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI5INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMTIsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQtdC5INCv0YDQvtGI0LXQstC40YdcIiwgXCJhdmF0YXJcIjogXCIxMi5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI3INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNSwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdCw0L3QtNGAINCd0LjQutC+0LvQsNC40YfQtdCyXCIsIFwiYXZhdGFyXCI6IFwiNS5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI2INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNCwgXCJuYW1lXCI6IFwi0JLQsNC00LjQvCDQn9Cw0YbQtdCyXCIsIFwiYXZhdGFyXCI6IFwiNC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI1INCz0L7Qu9C+0YHQvtCyXCIgfVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSxcclxuXHR7XHJcblx0XHRcImFsaWFzXCI6IFwibGVhZGVyc1wiLFxyXG5cdFx0XCJkYXRhXCI6IHtcclxuXHRcdFx0XCJ0aXRsZVwiOiBcItCh0LDQvNGL0Lkg8J+RqiDQutC+0LzQsNC90LTQvdGL0Lkg0YDQsNC30YDQsNCx0L7RgtGH0LjQulwiLFxyXG5cdFx0XHRcInN1YnRpdGxlXCI6IFwi0KHQv9GA0LjQvdGCIOKEliAyMTNcIixcclxuXHRcdFx0XCJlbW9qaVwiOiBcIvCfkapcIixcclxuXHRcdFx0XCJzZWxlY3RlZFVzZXJJZFwiOiA2LFxyXG5cdFx0XHRcInVzZXJzXCI6IFtcclxuXHRcdFx0XHR7IFwiaWRcIjogMiwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdCw0L3QtNGAINCo0LvQtdC50LrQvlwiLCBcImF2YXRhclwiOiBcIjIuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMjQg0LPQvtC70L7RgdCwXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMywgXCJuYW1lXCI6IFwi0JTQsNGA0YzRjyDQmtC+0LLQsNC70LXQstCwXCIsIFwiYXZhdGFyXCI6IFwiMy5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIyMSDQs9C+0LvQvtGBXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNiwgXCJuYW1lXCI6IFwi0JDQvdC00YDQtdC5INCc0L7QutGA0L7Rg9GB0L7QslwiLCBcImF2YXRhclwiOiBcIjYuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTkg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA3LCBcIm5hbWVcIjogXCLQlNC80LjRgtGA0LjQuSDQkNC90LTRgNC40Y/QvdC+0LJcIiwgXCJhdmF0YXJcIjogXCI3LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjE4INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMSwgXCJuYW1lXCI6IFwi0JXQstCz0LXQvdC40Lkg0JTQtdC80LXQvdGC0YzQtdCyXCIsIFwiYXZhdGFyXCI6IFwiMS5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxNiDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDksIFwibmFtZVwiOiBcItCh0LXRgNCz0LXQuSDQkdC10YDQtdC20L3QvtC5XCIsIFwiYXZhdGFyXCI6IFwiOS5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxNCDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDgsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQsNC90LTRgCDQmNCy0LDQvdC60L7QslwiLCBcImF2YXRhclwiOiBcIjguanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTMg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAxMSwgXCJuYW1lXCI6IFwi0K7RgNC40Lkg0KTRgNC+0LvQvtCyXCIsIFwiYXZhdGFyXCI6IFwiMTEuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTEg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAxMCwgXCJuYW1lXCI6IFwi0K/QvdCwINCR0LXRgNC90LjQutC+0LLQsFwiLCBcImF2YXRhclwiOiBcIjEwLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjkg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAxMiwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdC10Lkg0K/RgNC+0YjQtdCy0LjRh1wiLCBcImF2YXRhclwiOiBcIjEyLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjcg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA1LCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0J3QuNC60L7Qu9Cw0LjRh9C10LJcIiwgXCJhdmF0YXJcIjogXCI1LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjYg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA0LCBcIm5hbWVcIjogXCLQktCw0LTQuNC8INCf0LDRhtC10LJcIiwgXCJhdmF0YXJcIjogXCI0LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjUg0LPQvtC70L7RgdC+0LJcIiB9XHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiYWxpYXNcIjogXCJjaGFydFwiLFxyXG5cdFx0XCJkYXRhXCI6IHtcclxuXHRcdFx0XCJ0aXRsZVwiOiBcItCa0L7QvNC80LjRgtGLXCIsXHJcblx0XHRcdFwic3VidGl0bGVcIjogXCLQodC/0YDQuNC90YIg4oSWIDIxM1wiLFxyXG5cdFx0XHRcInZhbHVlc1wiOiBbXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjAzXCIsIFwidmFsdWVcIjogMTA4IH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjA0XCIsIFwidmFsdWVcIjogMTYwIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjA1XCIsIFwidmFsdWVcIjogMTI2IH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjA2XCIsIFwidmFsdWVcIjogMTM0IH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjA3XCIsIFwidmFsdWVcIjogMTEyIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjA4XCIsIFwidmFsdWVcIjogMTUyIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjA5XCIsIFwidmFsdWVcIjogMTI4IH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjEwXCIsIFwidmFsdWVcIjogMTY0IH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjExXCIsIFwidmFsdWVcIjogMTE4IH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjEyXCIsIFwidmFsdWVcIjogMTQwIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjEzXCIsIFwidmFsdWVcIjogMTgyLCBcImFjdGl2ZVwiOiB0cnVlIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjE0XCIsIFwidmFsdWVcIjogMCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxNVwiLCBcInZhbHVlXCI6IDAgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMTZcIiwgXCJ2YWx1ZVwiOiAwIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjE3XCIsIFwidmFsdWVcIjogMCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxOFwiLCBcInZhbHVlXCI6IDAgfVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInVzZXJzXCI6IFtcclxuXHRcdFx0XHR7IFwiaWRcIjogMywgXCJuYW1lXCI6IFwi0JTQsNGA0YzRjyDQmtC+0LLQsNC70LXQstCwXCIsIFwiYXZhdGFyXCI6IFwiMy5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIzMlwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDksIFwibmFtZVwiOiBcItCh0LXRgNCz0LXQuSDQkdC10YDQtdC20L3QvtC5XCIsIFwiYXZhdGFyXCI6IFwiOS5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIyN1wiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDcsIFwibmFtZVwiOiBcItCU0LzQuNGC0YDQuNC5INCQ0L3QtNGA0LjRj9C90L7QslwiLCBcImF2YXRhclwiOiBcIjcuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMjJcIiB9XHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiYWxpYXNcIjogXCJjaGFydFwiLFxyXG5cdFx0XCJkYXRhXCI6IHtcclxuXHRcdFx0XCJ0aXRsZVwiOiBcItCh0YLRgNC+0LrQuCDQutC+0LTQsFwiLFxyXG5cdFx0XHRcInN1YnRpdGxlXCI6IFwi0KHQv9GA0LjQvdGCIOKEliAyMTNcIixcclxuXHRcdFx0XCJ2YWx1ZXNcIjogW1xyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIwM1wiLCBcInZhbHVlXCI6IDQ3Nzk4IH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjA0XCIsIFwidmFsdWVcIjogNjg1OTAgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMDVcIiwgXCJ2YWx1ZVwiOiA1NTQ3MiB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIwNlwiLCBcInZhbHVlXCI6IDYzMDczIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjA3XCIsIFwidmFsdWVcIjogNTE5MTcgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMDhcIiwgXCJ2YWx1ZVwiOiA2NTg1MiB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIwOVwiLCBcInZhbHVlXCI6IDYwNjkzIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjEwXCIsIFwidmFsdWVcIjogNzA2MzEgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMTFcIiwgXCJ2YWx1ZVwiOiA1NzI5OSB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxMlwiLCBcInZhbHVlXCI6IDYyODM5IH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjEzXCIsIFwidmFsdWVcIjogNzQxNTYsIFwiYWN0aXZlXCI6IHRydWUgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMTRcIiwgXCJ2YWx1ZVwiOiAwIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjE1XCIsIFwidmFsdWVcIjogMCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxNlwiLCBcInZhbHVlXCI6IDAgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMTdcIiwgXCJ2YWx1ZVwiOiAwIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjE4XCIsIFwidmFsdWVcIjogMCB9XHJcblx0XHRcdF0sXHJcblx0XHRcdFwidXNlcnNcIjogW1xyXG5cdFx0XHRcdHsgXCJpZFwiOiAxMiwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdC10Lkg0K/RgNC+0YjQtdCy0LjRh1wiLCBcImF2YXRhclwiOiBcIjEyLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjg3MzlcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA4LCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0JjQstCw0L3QutC+0LJcIiwgXCJhdmF0YXJcIjogXCI4LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjc1MzhcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAxMCwgXCJuYW1lXCI6IFwi0K/QvdCwINCR0LXRgNC90LjQutC+0LLQsFwiLCBcImF2YXRhclwiOiBcIjEwLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjY4NDVcIiB9XHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiYWxpYXNcIjogXCJkaWFncmFtXCIsXHJcblx0XHRcImRhdGFcIjoge1xyXG5cdFx0XHRcInRpdGxlXCI6IFwi0KDQsNC30LzQtdGAINC60L7QvNC80LjRgtC+0LJcIixcclxuXHRcdFx0XCJzdWJ0aXRsZVwiOiBcItCh0L/RgNC40L3RgiDihJYgMjEzXCIsXHJcblx0XHRcdFwidG90YWxUZXh0XCI6IFwiMTgyINC60L7QvNC80LjRgtCwXCIsXHJcblx0XHRcdFwiZGlmZmVyZW5jZVRleHRcIjogXCIrNDIg0YEg0L/RgNC+0YjQu9C+0LPQviDRgdC/0YDQuNC90YLQsFwiLFxyXG5cdFx0XHRcImNhdGVnb3JpZXNcIjogW1xyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIj4gMTAwMSDRgdGC0YDQvtC60LhcIiwgXCJ2YWx1ZVRleHRcIjogXCIzMCDQutC+0LzQvNC40YLQvtCyXCIsIFwiZGlmZmVyZW5jZVRleHRcIjogXCIrOCDQutC+0LzQvNC40YLQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCI1MDEg4oCUIDEwMDAg0YHRgtGA0L7QulwiLCBcInZhbHVlVGV4dFwiOiBcIjMyINC60L7QvNC80LjRgtCwXCIsIFwiZGlmZmVyZW5jZVRleHRcIjogXCIrNiDQutC+0LzQvNC40YLQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIxMDEg4oCUIDUwMCDRgdGC0YDQvtC6XCIsIFwidmFsdWVUZXh0XCI6IFwiNTgg0LrQvtC80LzQuNGC0L7QslwiLCBcImRpZmZlcmVuY2VUZXh0XCI6IFwiKzE2INC60L7QvNC80LjRgtC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjEg4oCUIDEwMCDRgdGC0YDQvtC6XCIsIFwidmFsdWVUZXh0XCI6IFwiNjIg0LrQvtC80LzQuNGC0LBcIiwgXCJkaWZmZXJlbmNlVGV4dFwiOiBcIisxMiDQutC+0LzQvNC40YLQvtCyXCIgfVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSxcclxuXHR7XHJcblx0XHRcImFsaWFzXCI6IFwiYWN0aXZpdHlcIixcclxuXHRcdFwiZGF0YVwiOiB7XHJcblx0XHRcdFwidGl0bGVcIjogXCLQmtC+0LzQvNC40YLRiywgMSDQvdC10LTQtdC70Y9cIixcclxuXHRcdFx0XCJzdWJ0aXRsZVwiOiBcItCh0L/RgNC40L3RgiDihJYgMjEzXCIsXHJcblx0XHRcdFwiZGF0YVwiOiB7XHJcblx0XHRcdFx0XCJtb25cIjogWzAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDIsIDMsIDIsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG5cdFx0XHRcdFwidHVlXCI6IFswLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCA1LCAwLCA0LCAwLCAwLCAwLCAwLCAxLCAwLCAzLCAwLCAwLCAyLCAxLCAwXSxcclxuXHRcdFx0XHRcIndlZFwiOiBbMSwgMCwgMCwgMCwgMSwgMCwgNSwgMCwgMCwgNCwgMCwgMCwgMCwgNSwgMCwgMiwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcblx0XHRcdFx0XCJ0aHVcIjogWzAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDYsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDUsIDAsIDAsIDAsIDEsIDAsIDAsIDBdLFxyXG5cdFx0XHRcdFwiZnJpXCI6IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAzLCAwLCAwLCA1LCAwLCA0LCAwLCAwLCAzLCAwLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuXHRcdFx0XHRcInNhdFwiOiBbMCwgMCwgMCwgMCwgMiwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMF0sXHJcblx0XHRcdFx0XCJzdW5cIjogWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDMsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDBdXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiYWxpYXNcIjogXCJhY3Rpdml0eVwiLFxyXG5cdFx0XCJkYXRhXCI6IHtcclxuXHRcdFx0XCJ0aXRsZVwiOiBcItCa0L7QvNC80LjRgtGLLCAyINC90LXQtNC10LvRj1wiLFxyXG5cdFx0XHRcInN1YnRpdGxlXCI6IFwi0KHQv9GA0LjQvdGCIOKEliAyMTNcIixcclxuXHRcdFx0XCJkYXRhXCI6IHtcclxuXHRcdFx0XHRcIm1vblwiOiBbMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgNCwgMCwgMCwgMiwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMiwgMCwgMl0sXHJcblx0XHRcdFx0XCJ0dWVcIjogWzAsIDEsIDIsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG5cdFx0XHRcdFwid2VkXCI6IFswLCAwLCAwLCAwLCAyLCAwLCAxLCAyLCAwLCAzLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzLCAxLCAxLCAwLCAwXSxcclxuXHRcdFx0XHRcInRodVwiOiBbMCwgMCwgMiwgMCwgMCwgMCwgMCwgMSwgMiwgMCwgMCwgMCwgMCwgMCwgMSwgMiwgMCwgMywgMCwgMSwgMSwgMCwgMCwgMF0sXHJcblx0XHRcdFx0XCJmcmlcIjogWzAsIDAsIDAsIDEsIDEsIDAsIDIsIDAsIDQsIDAsIDAsIDAsIDIsIDAsIDMsIDIsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDFdLFxyXG5cdFx0XHRcdFwic2F0XCI6IFsxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAyLCAyLCAwLCAyLCAwLCAwXSxcclxuXHRcdFx0XHRcInN1blwiOiBbMCwgMCwgMCwgMCwgMiwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YSIsImltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dMZWFkZXJzKHsgdGl0bGUsIHN1YnRpdGxlLCB1c2VycywgZW1vamksIHNlbGVjdGVkVXNlcklkIH0pIHtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRVc2VySW5kZXggPSB1c2Vycy5maW5kSW5kZXgodXNlciA9PiB1c2VyLmlkID09PSBzZWxlY3RlZFVzZXJJZClcclxuXHJcbiAgcmV0dXJuIGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwibGVhZGVyc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkaW5nIGhlYWRpbmdfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkaW5nIGhlYWRpbmctLXByaW1hcnlcIj4ke3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRpbmcgaGVhZGluZy0tc2Vjb25kYXJ5XCI+JHtzdWJ0aXRsZX08L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJsZWFkZXJzX19saXN0XCI+XHJcbiAgICAgICAgICAgICR7dXNlcnMubWFwKCh1c2VyLCB1c2VySW5kZXgpID0+IGBcclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGVhZGVyc19faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcl9faW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcl9fcGhvdG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzL2ltYWdlcy8xeC8ke3VzZXIuYXZhdGFyfSA2NHcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cy9pbWFnZXMvMngvJHt1c2VyLmF2YXRhcn0gMTI4dyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzL2ltYWdlcy8zeC8ke3VzZXIuYXZhdGFyfSAxOTJ3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldHMvaW1hZ2VzLzR4LyR7dXNlci5hdmF0YXJ9IDI1NncsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZXM9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG1heC13aWR0aDogNTY3cHgpIDY0cHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChtYXgtd2lkdGg6IDc2OHB4KSAxMjhweCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG1heC13aWR0aDogMTM2NXB4KSAxOTJweCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjU2cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvMXgvJHt1c2VyLmF2YXRhcn1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiJHt1c2VyLmF2YXRhcn1cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICR7dXNlckluZGV4ID09PSAwID8gYDxzcGFuIGNsYXNzPVwidXNlcl9fcGhvdG8gdXNlcl9fcGhvdG9fX2Vtb2ppXCI+JHtlbW9qaX08L3NwYW4+YCA6ICcnfSBcclxuICAgICAgICAgICAgICAgICAgJHt1c2VySW5kZXggPT09IHVzZXJzLmxlbmd0aCAtIDEgPyBgPHNwYW4gY2xhc3M9XCJ1c2VyX19waG90byB1c2VyX19waG90b19fZW1vamlcIj7wn5GNPC9zcGFuPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJfX2RhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyX19uYW1lXCI+JHt1c2VyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVzZXJfX2NvdW50XCI+JHt1c2VyLnZhbHVlVGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcl9fcGxhY2UgdXNlcl9fcGxhY2UtLSR7dXNlckluZGV4ICsgMX1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidXNlcl9fcGxhY2UtbnVtYmVyXCI+JHt1c2VySW5kZXggKyAxfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICR7dXNlckluZGV4ID09PSAwICYmIHNlbGVjdGVkVXNlckluZGV4ICYmIHVzZXJzW3NlbGVjdGVkVXNlckluZGV4XSA/IGA8ZGl2IGNsYXNzPVwidXNlciB1c2VyLS1zZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcl9faW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyX19waG90b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHMvaW1hZ2VzLzF4LyR7dXNlcnNbc2VsZWN0ZWRVc2VySW5kZXhdLmF2YXRhcn0gNjR3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cy9pbWFnZXMvMngvJHt1c2Vyc1tzZWxlY3RlZFVzZXJJbmRleF0uYXZhdGFyfSAxMjh3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cy9pbWFnZXMvM3gvJHt1c2Vyc1tzZWxlY3RlZFVzZXJJbmRleF0uYXZhdGFyfSAxOTJ3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cy9pbWFnZXMvNHgvJHt1c2Vyc1tzZWxlY3RlZFVzZXJJbmRleF0uYXZhdGFyfSAyNTZ3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChtYXgtd2lkdGg6IDU2N3B4KSA2NHB4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChtYXgtd2lkdGg6IDc2OHB4KSAxMjhweCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAobWF4LXdpZHRoOiAxMzY1cHgpIDE5MnB4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDI1NnB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy8xeC8ke3VzZXJzW3NlbGVjdGVkVXNlckluZGV4XS5hdmF0YXJ9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiJHt1c2Vyc1tzZWxlY3RlZFVzZXJJbmRleF0uYXZhdGFyfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyX19waG90byB1c2VyX19waG90b19fZW1vamlcIiA+8J+RjTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcl9fZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyX19uYW1lXCI+JHt1c2Vyc1tzZWxlY3RlZFVzZXJJbmRleF0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVzZXJfX2NvdW50XCI+JHt1c2Vyc1tzZWxlY3RlZFVzZXJJbmRleF0udmFsdWVUZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyX19wbGFjZS1udW1iZXIgdXNlcl9fcGxhY2UtbnVtYmVyLS1zZWxlY3RlZFwiPiR7c2VsZWN0ZWRVc2VySW5kZXggKyAxfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PmAgOiBcIlwifVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICBgKS5qb2luKCcnKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvc2VjdGlvbj5cclxuYFxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Vm90ZSh7IHRpdGxlLCBzdWJ0aXRsZSwgdXNlcnMsIHNlbGVjdGVkVXNlcklkIH0pIHtcclxuICByZXR1cm4gYDxzZWN0aW9uIGNsYXNzPVwidm90ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkaW5nIGhlYWRpbmdfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkaW5nIGhlYWRpbmctLXByaW1hcnlcIj4ke3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRpbmcgaGVhZGluZy0tc2Vjb25kYXJ5XCI+JHtzdWJ0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1c2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAke3VzZXJzLnNsaWNlKDAsIDgpLm1hcCgodXNlciwgdXNlckluZGV4KSA9PiBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidXNlcnNfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1c2Vyc19fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJfX2luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyX19waG90b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0PVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHMvaW1hZ2VzLzF4LyR7dXNlci5hdmF0YXJ9ICA2NHcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHMvaW1hZ2VzLzJ4LyR7dXNlci5hdmF0YXJ9IDEyOHcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHMvaW1hZ2VzLzN4LyR7dXNlci5hdmF0YXJ9IDE5MncsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHMvaW1hZ2VzLzR4LyR7dXNlci5hdmF0YXJ9IDI1NndcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1heC13aWR0aDogNTY3cHgpIDY0cHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1heC13aWR0aDogNzY4cHgpIDEyOHB4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXgtd2lkdGg6IDEzNjVweCkgMTkycHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjU2cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvMXgvJHt1c2VyLmF2YXRhcn1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIiR7dXNlci5hdmF0YXJ9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyX19kYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVzZXJfX25hbWVcIj4ke3VzZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5gKS5qb2luKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+YFxyXG59XHJcblxyXG5cclxud2luZG93LnJlbmRlclRlbXBsYXRlID0gZnVuY3Rpb24gKGFsaWFzLCBkYXRhKSB7XHJcbiAgaWYgKGFsaWFzID09PSBcImxlYWRlcnNcIikge1xyXG4gICAgcmV0dXJuIHNob3dMZWFkZXJzKGRhdGEpXHJcbiAgfVxyXG5cclxuICBpZiAoYWxpYXMgPT09IFwidm90ZVwiKSB7XHJcbiAgICByZXR1cm4gc2hvd1ZvdGUoZGF0YSlcclxuICB9XHJcbn1cclxuXHJcbi8vIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gcmVuZGVyVGVtcGxhdGUoXCJsZWFkZXJzXCIsIGRhdGFbMF0uZGF0YSkiXX0=

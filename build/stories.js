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

var showLeaders = function showLeaders(_ref) {
  var data = _ref.data;
  return "\n  <section class=\"leaders\">\n    <div class=\"container\">\n      <div class=\"wrapper\">\n        <div class=\"heading heading__container\">\n          <h1 class=\"heading heading--primary\">".concat(data.title, "</h1>\n          <h2 class=\"heading heading--secondary\">").concat(data.subtitle, "</h2>\n        </div>\n        <ul class=\"leaders__list\">\n        ").concat(data.users.map(function (user, userIndex) {
    return "\n          <li class=\"leaders__item\">\n              <div class=\"person\">\n                <div class=\"person__info\">\n                  <div class=\"person__photo\">\n                    <img src=\"assets/images/1x/".concat(user.avatar, "\" alt=\"").concat(user.avatar, "\" />\n                    ").concat(userIndex === 0 ? "<span class=\"person__photo person__photo__emoji\">".concat(data.emoji, "</span>") : '', "\n                    ").concat(userIndex === data.users.length - 1 ? "<span class=\"person__photo person__photo__emoji\">\uD83D\uDC4D</span>" : '', "\n                  </div>\n                  <div class=\"person__data\">\n                    <span class=\"person__name\">").concat(user.name, "</span>\n                    <span class=\"person__count\">").concat(user.valueText, "</span>\n                  </div>\n                </div>\n                <div class=\"person__place person__place--").concat(userIndex + 1, "\">\n                  <span class=\"person__place-number\">").concat(userIndex + 1, "</span>\n                </div>\n              </div>\n            </li>\n            ");
  }).join(''), "\n        </ul>\n      </div>\n    </div>\n  </section>\n");
};

var renderTemplate = function renderTemplate(alias, data) {
  data.forEach(function (slide, index) {
    if (slide.alias === alias && index === 0) {
      document.body.innerHTML = showLeaders(slide);
    }
  });
};

renderTemplate("leaders", _data["default"]);

},{"../data":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YS5qcyIsInNyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQU0sSUFBSSxHQUFHLENBQ1o7QUFDQyxXQUFTLFNBRFY7QUFFQyxVQUFRO0FBQ1AsYUFBUyx1QkFERjtBQUVQLGdCQUFZLGNBRkw7QUFHUCxhQUFTLElBSEY7QUFJUCxhQUFTLENBQ1I7QUFBRSxZQUFNLENBQVI7QUFBVyxjQUFRLGdCQUFuQjtBQUFxQyxnQkFBVSxPQUEvQztBQUF3RCxtQkFBYTtBQUFyRSxLQURRLEVBRVI7QUFBRSxZQUFNLENBQVI7QUFBVyxjQUFRLGlCQUFuQjtBQUFzQyxnQkFBVSxPQUFoRDtBQUF5RCxtQkFBYTtBQUF0RSxLQUZRLEVBR1I7QUFBRSxZQUFNLENBQVI7QUFBVyxjQUFRLG1CQUFuQjtBQUF3QyxnQkFBVSxPQUFsRDtBQUEyRCxtQkFBYTtBQUF4RSxLQUhRLEVBSVI7QUFBRSxZQUFNLENBQVI7QUFBVyxjQUFRLGtCQUFuQjtBQUF1QyxnQkFBVSxPQUFqRDtBQUEwRCxtQkFBYTtBQUF2RSxLQUpRLEVBS1I7QUFBRSxZQUFNLENBQVI7QUFBVyxjQUFRLG1CQUFuQjtBQUF3QyxnQkFBVSxPQUFsRDtBQUEyRCxtQkFBYTtBQUF4RSxLQUxRO0FBSkY7QUFGVCxDQURZLEVBZ0JaO0FBQ0MsV0FBUyxTQURWO0FBRUMsVUFBUTtBQUNQLGFBQVMsc0JBREY7QUFFUCxnQkFBWSxjQUZMO0FBR1AsYUFBUyxJQUhGO0FBSVAsYUFBUyxDQUNSO0FBQUUsWUFBTSxFQUFSO0FBQVksY0FBUSxrQkFBcEI7QUFBd0MsZ0JBQVUsUUFBbEQ7QUFBNEQsbUJBQWE7QUFBekUsS0FEUSxFQUVSO0FBQUUsWUFBTSxDQUFSO0FBQVcsY0FBUSxzQkFBbkI7QUFBMkMsZ0JBQVUsT0FBckQ7QUFBOEQsbUJBQWE7QUFBM0UsS0FGUSxFQUdSO0FBQUUsWUFB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QUEsQ0FPSCxTQUFTLEtBQUssSUFBSSxDQUFKLEtBQUEsQ0FBQSxNQUFBLEdBQWQsQ0FBQSxHQUFBLHdFQUFBLEdBUEcsRUFBQSxFQUFBLCtIQUFBLEVBQUEsTUFBQSxDQVV3QixJQUFJLENBVjVCLElBQUEsRUFBQSw2REFBQSxFQUFBLE1BQUEsQ0FXeUIsSUFBSSxDQVg3QixTQUFBLEVBQUEsdUhBQUEsRUFBQSxNQUFBLENBY2tDLFNBQVMsR0FkM0MsQ0FBQSxFQUFBLDhEQUFBLEVBQUEsTUFBQSxDQWU4QixTQUFTLEdBZnZDLENBQUEsRUFBQSx3RkFBQSxDQUFBO0FBQWYsR0FBQSxFQUFBLElBQUEsQ0FUVSxFQVNWLENBVFUsRUFBQSwyREFBQSxDQUFBO0FBQXBCLENBQUE7O0FBbUNBLElBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWlCLENBQUEsS0FBQSxFQUFBLElBQUEsRUFBaUI7QUFDdEMsRUFBQSxJQUFJLENBQUosT0FBQSxDQUFhLFVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBa0I7QUFDN0IsUUFBSSxLQUFLLENBQUwsS0FBQSxLQUFBLEtBQUEsSUFBeUIsS0FBSyxLQUFsQyxDQUFBLEVBQTBDO0FBQ3hDLE1BQUEsUUFBUSxDQUFSLElBQUEsQ0FBQSxTQUFBLEdBQTBCLFdBQVcsQ0FBckMsS0FBcUMsQ0FBckM7QUFDRDtBQUhILEdBQUE7QUFERixDQUFBOztBQVFBLGNBQWMsQ0FBQSxTQUFBLEVBQVksS0FBQSxDQUExQixTQUEwQixDQUFaLENBQWQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBkYXRhID0gW1xyXG5cdHtcclxuXHRcdFwiYWxpYXNcIjogXCJsZWFkZXJzXCIsXHJcblx0XHRcImRhdGFcIjoge1xyXG5cdFx0XHRcInRpdGxlXCI6IFwi0JHQvtC70YzRiNC1INCy0YHQtdCz0L4g0LrQvtC80LzQuNGC0L7QslwiLFxyXG5cdFx0XHRcInN1YnRpdGxlXCI6IFwi0KHQv9GA0LjQvdGCIOKEliAyMTNcIixcclxuXHRcdFx0XCJlbW9qaVwiOiBcIvCfkZFcIixcclxuXHRcdFx0XCJ1c2Vyc1wiOiBbXHJcblx0XHRcdFx0eyBcImlkXCI6IDMsIFwibmFtZVwiOiBcItCU0LDRgNGM0Y8g0JrQvtCy0LDQu9C10LLQsFwiLCBcImF2YXRhclwiOiBcIjMuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMzJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA5LCBcIm5hbWVcIjogXCLQodC10YDQs9C10Lkg0JHQtdGA0LXQttC90L7QuVwiLCBcImF2YXRhclwiOiBcIjkuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMjdcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA3LCBcIm5hbWVcIjogXCLQlNC80LjRgtGA0LjQuSDQkNC90LTRgNC40Y/QvdC+0LJcIiwgXCJhdmF0YXJcIjogXCI3LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjIyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNiwgXCJuYW1lXCI6IFwi0JDQvdC00YDQtdC5INCc0L7QutGA0L7Rg9GB0L7QslwiLCBcImF2YXRhclwiOiBcIjYuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMjBcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA4LCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0JjQstCw0L3QutC+0LJcIiwgXCJhdmF0YXJcIjogXCI4LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjE5XCIgfVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSxcclxuXHR7XHJcblx0XHRcImFsaWFzXCI6IFwibGVhZGVyc1wiLFxyXG5cdFx0XCJkYXRhXCI6IHtcclxuXHRcdFx0XCJ0aXRsZVwiOiBcItCh0LDQvNGL0Lkg0LHQvtC70YzRiNC+0Lkg0LrQvtC80LzQuNGCXCIsXHJcblx0XHRcdFwic3VidGl0bGVcIjogXCLQodC/0YDQuNC90YIg4oSWIDIxM1wiLFxyXG5cdFx0XHRcImVtb2ppXCI6IFwi8J+YrlwiLFxyXG5cdFx0XHRcInVzZXJzXCI6IFtcclxuXHRcdFx0XHR7IFwiaWRcIjogMTIsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQtdC5INCv0YDQvtGI0LXQstC40YdcIiwgXCJhdmF0YXJcIjogXCIxMi5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI0MDAxINGB0YLRgNC+0LrQsFwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDUsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQsNC90LTRgCDQndC40LrQvtC70LDQuNGH0LXQslwiLCBcImF2YXRhclwiOiBcIjUuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMzg0NSDRgdGC0YDQvtC6XCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogOCwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdCw0L3QtNGAINCY0LLQsNC90LrQvtCyXCIsIFwiYXZhdGFyXCI6IFwiOC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIzNjQwINGB0YLRgNC+0LpcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAxMCwgXCJuYW1lXCI6IFwi0K/QvdCwINCR0LXRgNC90LjQutC+0LLQsFwiLCBcImF2YXRhclwiOiBcIjEwLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjM0NTMg0YHRgtGA0L7QutC4XCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNCwgXCJuYW1lXCI6IFwi0JLQsNC00LjQvCDQn9Cw0YbQtdCyXCIsIFwiYXZhdGFyXCI6IFwiNC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIyODUyINGB0YLRgNC+0LrQuFwiIH1cclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJhbGlhc1wiOiBcInZvdGVcIixcclxuXHRcdFwiZGF0YVwiOiB7XHJcblx0XHRcdFwidGl0bGVcIjogXCLQodCw0LzRi9C5IPCflI4g0LLQvdC40LzQsNGC0LXQu9GM0L3Ri9C5INGA0LDQt9GA0LDQsdC+0YLRh9C40LpcIixcclxuXHRcdFx0XCJzdWJ0aXRsZVwiOiBcItCh0L/RgNC40L3RgiDihJYgMjEzXCIsXHJcblx0XHRcdFwiZW1vamlcIjogXCLwn5SOXCIsXHJcblx0XHRcdFwic2VsZWN0ZWRVc2VySWRcIjogNCxcclxuXHRcdFx0XCJ1c2Vyc1wiOiBbXHJcblx0XHRcdFx0eyBcImlkXCI6IDEsIFwibmFtZVwiOiBcItCV0LLQs9C10L3QuNC5INCU0LXQvNC10L3RgtGM0LXQslwiLCBcImF2YXRhclwiOiBcIjEuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMjIg0LPQvtC70L7RgdCwXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNCwgXCJuYW1lXCI6IFwi0JLQsNC00LjQvCDQn9Cw0YbQtdCyXCIsIFwiYXZhdGFyXCI6IFwiNC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxOSDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDEwLCBcIm5hbWVcIjogXCLQr9C90LAg0JHQtdGA0L3QuNC60L7QstCwXCIsIFwiYXZhdGFyXCI6IFwiMTAuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTcg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAxMiwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdC10Lkg0K/RgNC+0YjQtdCy0LjRh1wiLCBcImF2YXRhclwiOiBcIjEyLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjE2INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMTEsIFwibmFtZVwiOiBcItCu0YDQuNC5INCk0YDQvtC70L7QslwiLCBcImF2YXRhclwiOiBcIjExLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjExINCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMiwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdCw0L3QtNGAINCo0LvQtdC50LrQvlwiLCBcImF2YXRhclwiOiBcIjIuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTAg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA1LCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0J3QuNC60L7Qu9Cw0LjRh9C10LJcIiwgXCJhdmF0YXJcIjogXCI1LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjkg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA2LCBcIm5hbWVcIjogXCLQkNC90LTRgNC10Lkg0JzQvtC60YDQvtGD0YHQvtCyXCIsIFwiYXZhdGFyXCI6IFwiNi5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI4INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogOCwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdCw0L3QtNGAINCY0LLQsNC90LrQvtCyXCIsIFwiYXZhdGFyXCI6IFwiOC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI3INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNywgXCJuYW1lXCI6IFwi0JTQvNC40YLRgNC40Lkg0JDQvdC00YDQuNGP0L3QvtCyXCIsIFwiYXZhdGFyXCI6IFwiNy5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI2INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMywgXCJuYW1lXCI6IFwi0JTQsNGA0YzRjyDQmtC+0LLQsNC70LXQstCwXCIsIFwiYXZhdGFyXCI6IFwiMy5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI1INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogOSwgXCJuYW1lXCI6IFwi0KHQtdGA0LPQtdC5INCR0LXRgNC10LbQvdC+0LlcIiwgXCJhdmF0YXJcIjogXCI5LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjQg0LPQvtC70L7RgdCwXCIgfVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSxcclxuXHR7XHJcblx0XHRcImFsaWFzXCI6IFwibGVhZGVyc1wiLFxyXG5cdFx0XCJkYXRhXCI6IHtcclxuXHRcdFx0XCJ0aXRsZVwiOiBcItCh0LDQvNGL0Lkg8J+UjiDQstC90LjQvNCw0YLQtdC70YzQvdGL0Lkg0YDQsNC30YDQsNCx0L7RgtGH0LjQulwiLFxyXG5cdFx0XHRcInN1YnRpdGxlXCI6IFwi0KHQv9GA0LjQvdGCIOKEliAyMTNcIixcclxuXHRcdFx0XCJlbW9qaVwiOiBcIvCflI5cIixcclxuXHRcdFx0XCJzZWxlY3RlZFVzZXJJZFwiOiAxMSxcclxuXHRcdFx0XCJ1c2Vyc1wiOiBbXHJcblx0XHRcdFx0eyBcImlkXCI6IDEsIFwibmFtZVwiOiBcItCV0LLQs9C10L3QuNC5INCU0LXQvNC10L3RgtGM0LXQslwiLCBcImF2YXRhclwiOiBcIjEuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMjIg0LPQvtC70L7RgdCwXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNCwgXCJuYW1lXCI6IFwi0JLQsNC00LjQvCDQn9Cw0YbQtdCyXCIsIFwiYXZhdGFyXCI6IFwiNC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxOSDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDEwLCBcIm5hbWVcIjogXCLQr9C90LAg0JHQtdGA0L3QuNC60L7QstCwXCIsIFwiYXZhdGFyXCI6IFwiMTAuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTcg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAxMiwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdC10Lkg0K/RgNC+0YjQtdCy0LjRh1wiLCBcImF2YXRhclwiOiBcIjEyLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjE2INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMTEsIFwibmFtZVwiOiBcItCu0YDQuNC5INCk0YDQvtC70L7QslwiLCBcImF2YXRhclwiOiBcIjExLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjE1INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMiwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdCw0L3QtNGAINCo0LvQtdC50LrQvlwiLCBcImF2YXRhclwiOiBcIjIuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTQg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA1LCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0J3QuNC60L7Qu9Cw0LjRh9C10LJcIiwgXCJhdmF0YXJcIjogXCI1LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjEyINCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNiwgXCJuYW1lXCI6IFwi0JDQvdC00YDQtdC5INCc0L7QutGA0L7Rg9GB0L7QslwiLCBcImF2YXRhclwiOiBcIjYuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiOSDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDgsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQsNC90LTRgCDQmNCy0LDQvdC60L7QslwiLCBcImF2YXRhclwiOiBcIjguanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiOCDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDcsIFwibmFtZVwiOiBcItCU0LzQuNGC0YDQuNC5INCQ0L3QtNGA0LjRj9C90L7QslwiLCBcImF2YXRhclwiOiBcIjcuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiNiDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDMsIFwibmFtZVwiOiBcItCU0LDRgNGM0Y8g0JrQvtCy0LDQu9C10LLQsFwiLCBcImF2YXRhclwiOiBcIjMuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiNSDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDksIFwibmFtZVwiOiBcItCh0LXRgNCz0LXQuSDQkdC10YDQtdC20L3QvtC5XCIsIFwiYXZhdGFyXCI6IFwiOS5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI0INCz0L7Qu9C+0YHQsFwiIH1cclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJhbGlhc1wiOiBcInZvdGVcIixcclxuXHRcdFwiZGF0YVwiOiB7XHJcblx0XHRcdFwidGl0bGVcIjogXCLQodCw0LzRi9C5IPCfkaog0LrQvtC80LDQvdC00L3Ri9C5INGA0LDQt9GA0LDQsdC+0YLRh9C40LpcIixcclxuXHRcdFx0XCJzdWJ0aXRsZVwiOiBcItCh0L/RgNC40L3RgiDihJYgMjEzXCIsXHJcblx0XHRcdFwiZW1vamlcIjogXCLwn5GqXCIsXHJcblx0XHRcdFwib2Zmc2V0XCI6IDgsXHJcblx0XHRcdFwidXNlcnNcIjogW1xyXG5cdFx0XHRcdHsgXCJpZFwiOiAyLCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0KjQu9C10LnQutC+XCIsIFwiYXZhdGFyXCI6IFwiMi5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIyNCDQs9C+0LvQvtGB0LBcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAzLCBcIm5hbWVcIjogXCLQlNCw0YDRjNGPINCa0L7QstCw0LvQtdCy0LBcIiwgXCJhdmF0YXJcIjogXCIzLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjIxINCz0L7Qu9C+0YFcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA2LCBcIm5hbWVcIjogXCLQkNC90LTRgNC10Lkg0JzQvtC60YDQvtGD0YHQvtCyXCIsIFwiYXZhdGFyXCI6IFwiNi5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxOSDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDcsIFwibmFtZVwiOiBcItCU0LzQuNGC0YDQuNC5INCQ0L3QtNGA0LjRj9C90L7QslwiLCBcImF2YXRhclwiOiBcIjcuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTgg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiAxLCBcIm5hbWVcIjogXCLQldCy0LPQtdC90LjQuSDQlNC10LzQtdC90YLRjNC10LJcIiwgXCJhdmF0YXJcIjogXCIxLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjE2INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogOSwgXCJuYW1lXCI6IFwi0KHQtdGA0LPQtdC5INCR0LXRgNC10LbQvdC+0LlcIiwgXCJhdmF0YXJcIjogXCI5LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjE0INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogOCwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdCw0L3QtNGAINCY0LLQsNC90LrQvtCyXCIsIFwiYXZhdGFyXCI6IFwiOC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxMyDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDExLCBcIm5hbWVcIjogXCLQrtGA0LjQuSDQpNGA0L7Qu9C+0LJcIiwgXCJhdmF0YXJcIjogXCIxMS5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxMSDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDEwLCBcIm5hbWVcIjogXCLQr9C90LAg0JHQtdGA0L3QuNC60L7QstCwXCIsIFwiYXZhdGFyXCI6IFwiMTAuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiOSDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDEyLCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LXQuSDQr9GA0L7RiNC10LLQuNGHXCIsIFwiYXZhdGFyXCI6IFwiMTIuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiNyDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDUsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQsNC90LTRgCDQndC40LrQvtC70LDQuNGH0LXQslwiLCBcImF2YXRhclwiOiBcIjUuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiNiDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDQsIFwibmFtZVwiOiBcItCS0LDQtNC40Lwg0J/QsNGG0LXQslwiLCBcImF2YXRhclwiOiBcIjQuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiNSDQs9C+0LvQvtGB0L7QslwiIH1cclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJhbGlhc1wiOiBcImxlYWRlcnNcIixcclxuXHRcdFwiZGF0YVwiOiB7XHJcblx0XHRcdFwidGl0bGVcIjogXCLQodCw0LzRi9C5IPCfkaog0LrQvtC80LDQvdC00L3Ri9C5INGA0LDQt9GA0LDQsdC+0YLRh9C40LpcIixcclxuXHRcdFx0XCJzdWJ0aXRsZVwiOiBcItCh0L/RgNC40L3RgiDihJYgMjEzXCIsXHJcblx0XHRcdFwiZW1vamlcIjogXCLwn5GqXCIsXHJcblx0XHRcdFwic2VsZWN0ZWRVc2VySWRcIjogNixcclxuXHRcdFx0XCJ1c2Vyc1wiOiBbXHJcblx0XHRcdFx0eyBcImlkXCI6IDIsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQsNC90LTRgCDQqNC70LXQudC60L5cIiwgXCJhdmF0YXJcIjogXCIyLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjI0INCz0L7Qu9C+0YHQsFwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDMsIFwibmFtZVwiOiBcItCU0LDRgNGM0Y8g0JrQvtCy0LDQu9C10LLQsFwiLCBcImF2YXRhclwiOiBcIjMuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMjEg0LPQvtC70L7RgVwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDYsIFwibmFtZVwiOiBcItCQ0L3QtNGA0LXQuSDQnNC+0LrRgNC+0YPRgdC+0LJcIiwgXCJhdmF0YXJcIjogXCI2LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjE5INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNywgXCJuYW1lXCI6IFwi0JTQvNC40YLRgNC40Lkg0JDQvdC00YDQuNGP0L3QvtCyXCIsIFwiYXZhdGFyXCI6IFwiNy5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCIxOCDQs9C+0LvQvtGB0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcImlkXCI6IDEsIFwibmFtZVwiOiBcItCV0LLQs9C10L3QuNC5INCU0LXQvNC10L3RgtGM0LXQslwiLCBcImF2YXRhclwiOiBcIjEuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTYg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA5LCBcIm5hbWVcIjogXCLQodC10YDQs9C10Lkg0JHQtdGA0LXQttC90L7QuVwiLCBcImF2YXRhclwiOiBcIjkuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMTQg0LPQvtC70L7RgdC+0LJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA4LCBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0JjQstCw0L3QutC+0LJcIiwgXCJhdmF0YXJcIjogXCI4LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjEzINCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMTEsIFwibmFtZVwiOiBcItCu0YDQuNC5INCk0YDQvtC70L7QslwiLCBcImF2YXRhclwiOiBcIjExLmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjExINCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMTAsIFwibmFtZVwiOiBcItCv0L3QsCDQkdC10YDQvdC40LrQvtCy0LBcIiwgXCJhdmF0YXJcIjogXCIxMC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI5INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMTIsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQtdC5INCv0YDQvtGI0LXQstC40YdcIiwgXCJhdmF0YXJcIjogXCIxMi5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI3INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNSwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdCw0L3QtNGAINCd0LjQutC+0LvQsNC40YfQtdCyXCIsIFwiYXZhdGFyXCI6IFwiNS5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI2INCz0L7Qu9C+0YHQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogNCwgXCJuYW1lXCI6IFwi0JLQsNC00LjQvCDQn9Cw0YbQtdCyXCIsIFwiYXZhdGFyXCI6IFwiNC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI1INCz0L7Qu9C+0YHQvtCyXCIgfVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSxcclxuXHR7XHJcblx0XHRcImFsaWFzXCI6IFwiY2hhcnRcIixcclxuXHRcdFwiZGF0YVwiOiB7XHJcblx0XHRcdFwidGl0bGVcIjogXCLQmtC+0LzQvNC40YLRi1wiLFxyXG5cdFx0XHRcInN1YnRpdGxlXCI6IFwi0KHQv9GA0LjQvdGCIOKEliAyMTNcIixcclxuXHRcdFx0XCJ2YWx1ZXNcIjogW1xyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIwM1wiLCBcInZhbHVlXCI6IDEwOCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIwNFwiLCBcInZhbHVlXCI6IDE2MCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIwNVwiLCBcInZhbHVlXCI6IDEyNiB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIwNlwiLCBcInZhbHVlXCI6IDEzNCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIwN1wiLCBcInZhbHVlXCI6IDExMiB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIwOFwiLCBcInZhbHVlXCI6IDE1MiB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIwOVwiLCBcInZhbHVlXCI6IDEyOCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxMFwiLCBcInZhbHVlXCI6IDE2NCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxMVwiLCBcInZhbHVlXCI6IDExOCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxMlwiLCBcInZhbHVlXCI6IDE0MCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxM1wiLCBcInZhbHVlXCI6IDE4MiwgXCJhY3RpdmVcIjogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxNFwiLCBcInZhbHVlXCI6IDAgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMTVcIiwgXCJ2YWx1ZVwiOiAwIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjE2XCIsIFwidmFsdWVcIjogMCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxN1wiLCBcInZhbHVlXCI6IDAgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMThcIiwgXCJ2YWx1ZVwiOiAwIH1cclxuXHRcdFx0XSxcclxuXHRcdFx0XCJ1c2Vyc1wiOiBbXHJcblx0XHRcdFx0eyBcImlkXCI6IDMsIFwibmFtZVwiOiBcItCU0LDRgNGM0Y8g0JrQvtCy0LDQu9C10LLQsFwiLCBcImF2YXRhclwiOiBcIjMuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMzJcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA5LCBcIm5hbWVcIjogXCLQodC10YDQs9C10Lkg0JHQtdGA0LXQttC90L7QuVwiLCBcImF2YXRhclwiOiBcIjkuanBnXCIsIFwidmFsdWVUZXh0XCI6IFwiMjdcIiB9LFxyXG5cdFx0XHRcdHsgXCJpZFwiOiA3LCBcIm5hbWVcIjogXCLQlNC80LjRgtGA0LjQuSDQkNC90LTRgNC40Y/QvdC+0LJcIiwgXCJhdmF0YXJcIjogXCI3LmpwZ1wiLCBcInZhbHVlVGV4dFwiOiBcIjIyXCIgfVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSxcclxuXHR7XHJcblx0XHRcImFsaWFzXCI6IFwiY2hhcnRcIixcclxuXHRcdFwiZGF0YVwiOiB7XHJcblx0XHRcdFwidGl0bGVcIjogXCLQodGC0YDQvtC60Lgg0LrQvtC00LBcIixcclxuXHRcdFx0XCJzdWJ0aXRsZVwiOiBcItCh0L/RgNC40L3RgiDihJYgMjEzXCIsXHJcblx0XHRcdFwidmFsdWVzXCI6IFtcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMDNcIiwgXCJ2YWx1ZVwiOiA0Nzc5OCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIwNFwiLCBcInZhbHVlXCI6IDY4NTkwIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjA1XCIsIFwidmFsdWVcIjogNTU0NzIgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMDZcIiwgXCJ2YWx1ZVwiOiA2MzA3MyB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIwN1wiLCBcInZhbHVlXCI6IDUxOTE3IH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjA4XCIsIFwidmFsdWVcIjogNjU4NTIgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMDlcIiwgXCJ2YWx1ZVwiOiA2MDY5MyB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxMFwiLCBcInZhbHVlXCI6IDcwNjMxIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjExXCIsIFwidmFsdWVcIjogNTcyOTkgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMTJcIiwgXCJ2YWx1ZVwiOiA2MjgzOSB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxM1wiLCBcInZhbHVlXCI6IDc0MTU2LCBcImFjdGl2ZVwiOiB0cnVlIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjE0XCIsIFwidmFsdWVcIjogMCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxNVwiLCBcInZhbHVlXCI6IDAgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIyMTZcIiwgXCJ2YWx1ZVwiOiAwIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMjE3XCIsIFwidmFsdWVcIjogMCB9LFxyXG5cdFx0XHRcdHsgXCJ0aXRsZVwiOiBcIjIxOFwiLCBcInZhbHVlXCI6IDAgfVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInVzZXJzXCI6IFtcclxuXHRcdFx0XHR7IFwiaWRcIjogMTIsIFwibmFtZVwiOiBcItCQ0LvQtdC60YHQtdC5INCv0YDQvtGI0LXQstC40YdcIiwgXCJhdmF0YXJcIjogXCIxMi5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI4NzM5XCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogOCwgXCJuYW1lXCI6IFwi0JDQu9C10LrRgdCw0L3QtNGAINCY0LLQsNC90LrQvtCyXCIsIFwiYXZhdGFyXCI6IFwiOC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI3NTM4XCIgfSxcclxuXHRcdFx0XHR7IFwiaWRcIjogMTAsIFwibmFtZVwiOiBcItCv0L3QsCDQkdC10YDQvdC40LrQvtCy0LBcIiwgXCJhdmF0YXJcIjogXCIxMC5qcGdcIiwgXCJ2YWx1ZVRleHRcIjogXCI2ODQ1XCIgfVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0fSxcclxuXHR7XHJcblx0XHRcImFsaWFzXCI6IFwiZGlhZ3JhbVwiLFxyXG5cdFx0XCJkYXRhXCI6IHtcclxuXHRcdFx0XCJ0aXRsZVwiOiBcItCg0LDQt9C80LXRgCDQutC+0LzQvNC40YLQvtCyXCIsXHJcblx0XHRcdFwic3VidGl0bGVcIjogXCLQodC/0YDQuNC90YIg4oSWIDIxM1wiLFxyXG5cdFx0XHRcInRvdGFsVGV4dFwiOiBcIjE4MiDQutC+0LzQvNC40YLQsFwiLFxyXG5cdFx0XHRcImRpZmZlcmVuY2VUZXh0XCI6IFwiKzQyINGBINC/0YDQvtGI0LvQvtCz0L4g0YHQv9GA0LjQvdGC0LBcIixcclxuXHRcdFx0XCJjYXRlZ29yaWVzXCI6IFtcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCI+IDEwMDEg0YHRgtGA0L7QutC4XCIsIFwidmFsdWVUZXh0XCI6IFwiMzAg0LrQvtC80LzQuNGC0L7QslwiLCBcImRpZmZlcmVuY2VUZXh0XCI6IFwiKzgg0LrQvtC80LzQuNGC0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiNTAxIOKAlCAxMDAwINGB0YLRgNC+0LpcIiwgXCJ2YWx1ZVRleHRcIjogXCIzMiDQutC+0LzQvNC40YLQsFwiLCBcImRpZmZlcmVuY2VUZXh0XCI6IFwiKzYg0LrQvtC80LzQuNGC0L7QslwiIH0sXHJcblx0XHRcdFx0eyBcInRpdGxlXCI6IFwiMTAxIOKAlCA1MDAg0YHRgtGA0L7QulwiLCBcInZhbHVlVGV4dFwiOiBcIjU4INC60L7QvNC80LjRgtC+0LJcIiwgXCJkaWZmZXJlbmNlVGV4dFwiOiBcIisxNiDQutC+0LzQvNC40YLQvtCyXCIgfSxcclxuXHRcdFx0XHR7IFwidGl0bGVcIjogXCIxIOKAlCAxMDAg0YHRgtGA0L7QulwiLCBcInZhbHVlVGV4dFwiOiBcIjYyINC60L7QvNC80LjRgtCwXCIsIFwiZGlmZmVyZW5jZVRleHRcIjogXCIrMTIg0LrQvtC80LzQuNGC0L7QslwiIH1cclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJhbGlhc1wiOiBcImFjdGl2aXR5XCIsXHJcblx0XHRcImRhdGFcIjoge1xyXG5cdFx0XHRcInRpdGxlXCI6IFwi0JrQvtC80LzQuNGC0YssIDEg0L3QtdC00LXQu9GPXCIsXHJcblx0XHRcdFwic3VidGl0bGVcIjogXCLQodC/0YDQuNC90YIg4oSWIDIxM1wiLFxyXG5cdFx0XHRcImRhdGFcIjoge1xyXG5cdFx0XHRcdFwibW9uXCI6IFswLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAyLCAzLCAyLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuXHRcdFx0XHRcInR1ZVwiOiBbMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgNSwgMCwgNCwgMCwgMCwgMCwgMCwgMSwgMCwgMywgMCwgMCwgMiwgMSwgMF0sXHJcblx0XHRcdFx0XCJ3ZWRcIjogWzEsIDAsIDAsIDAsIDEsIDAsIDUsIDAsIDAsIDQsIDAsIDAsIDAsIDUsIDAsIDIsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG5cdFx0XHRcdFwidGh1XCI6IFswLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCA2LCAwLCAxLCAwLCAwLCAxLCAwLCAwLCA1LCAwLCAwLCAwLCAxLCAwLCAwLCAwXSxcclxuXHRcdFx0XHRcImZyaVwiOiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMywgMCwgMCwgNSwgMCwgNCwgMCwgMCwgMywgMCwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcblx0XHRcdFx0XCJzYXRcIjogWzAsIDAsIDAsIDAsIDIsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDBdLFxyXG5cdFx0XHRcdFwic3VuXCI6IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAzLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwXVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHR7XHJcblx0XHRcImFsaWFzXCI6IFwiYWN0aXZpdHlcIixcclxuXHRcdFwiZGF0YVwiOiB7XHJcblx0XHRcdFwidGl0bGVcIjogXCLQmtC+0LzQvNC40YLRiywgMiDQvdC10LTQtdC70Y9cIixcclxuXHRcdFx0XCJzdWJ0aXRsZVwiOiBcItCh0L/RgNC40L3RgiDihJYgMjEzXCIsXHJcblx0XHRcdFwiZGF0YVwiOiB7XHJcblx0XHRcdFx0XCJtb25cIjogWzAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDQsIDAsIDAsIDIsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDIsIDAsIDJdLFxyXG5cdFx0XHRcdFwidHVlXCI6IFswLCAxLCAyLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCA1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuXHRcdFx0XHRcIndlZFwiOiBbMCwgMCwgMCwgMCwgMiwgMCwgMSwgMiwgMCwgMywgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMywgMSwgMSwgMCwgMF0sXHJcblx0XHRcdFx0XCJ0aHVcIjogWzAsIDAsIDIsIDAsIDAsIDAsIDAsIDEsIDIsIDAsIDAsIDAsIDAsIDAsIDEsIDIsIDAsIDMsIDAsIDEsIDEsIDAsIDAsIDBdLFxyXG5cdFx0XHRcdFwiZnJpXCI6IFswLCAwLCAwLCAxLCAxLCAwLCAyLCAwLCA0LCAwLCAwLCAwLCAyLCAwLCAzLCAyLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSxcclxuXHRcdFx0XHRcInNhdFwiOiBbMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMiwgMiwgMCwgMiwgMCwgMF0sXHJcblx0XHRcdFx0XCJzdW5cIjogWzAsIDAsIDAsIDAsIDIsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGEiLCJpbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhJztcclxuXHJcbmNvbnN0IHNob3dMZWFkZXJzID0gKHsgZGF0YSB9KSA9PiBgXHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJsZWFkZXJzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRpbmcgaGVhZGluZ19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkaW5nIGhlYWRpbmctLXByaW1hcnlcIj4ke2RhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRpbmcgaGVhZGluZy0tc2Vjb25kYXJ5XCI+JHtkYXRhLnN1YnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGVhZGVyc19fbGlzdFwiPlxyXG4gICAgICAgICR7ZGF0YS51c2Vycy5tYXAoKHVzZXIsIHVzZXJJbmRleCkgPT4gYFxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibGVhZGVyc19faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb25fX2luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBlcnNvbl9fcGhvdG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvMXgvJHt1c2VyLmF2YXRhcn1cIiBhbHQ9XCIke3VzZXIuYXZhdGFyfVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgJHt1c2VySW5kZXggPT09IDAgPyBgPHNwYW4gY2xhc3M9XCJwZXJzb25fX3Bob3RvIHBlcnNvbl9fcGhvdG9fX2Vtb2ppXCI+JHtkYXRhLmVtb2ppfTwvc3Bhbj5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgJHt1c2VySW5kZXggPT09IGRhdGEudXNlcnMubGVuZ3RoIC0gMSA/IGA8c3BhbiBjbGFzcz1cInBlcnNvbl9fcGhvdG8gcGVyc29uX19waG90b19fZW1vamlcIj7wn5GNPC9zcGFuPmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb25fX2RhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBlcnNvbl9fbmFtZVwiPiR7dXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBlcnNvbl9fY291bnRcIj4ke3VzZXIudmFsdWVUZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb25fX3BsYWNlIHBlcnNvbl9fcGxhY2UtLSR7dXNlckluZGV4ICsgMX1cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwZXJzb25fX3BsYWNlLW51bWJlclwiPiR7dXNlckluZGV4ICsgMX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgYCkuam9pbignJyl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L3NlY3Rpb24+XHJcbmBcclxuXHJcbmNvbnN0IHJlbmRlclRlbXBsYXRlID0gKGFsaWFzLCBkYXRhKSA9PiB7XHJcbiAgZGF0YS5mb3JFYWNoKChzbGlkZSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChzbGlkZS5hbGlhcyA9PT0gYWxpYXMgJiYgaW5kZXggPT09IDApIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBzaG93TGVhZGVycyhzbGlkZSlcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5yZW5kZXJUZW1wbGF0ZShcImxlYWRlcnNcIiwgZGF0YSkiXX0=

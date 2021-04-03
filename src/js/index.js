import data from '../data';


function showLeaders({ title, subtitle, users, emoji, selectedUserId }) {
  const selectedUserIndex = users.findIndex(user => user.id === selectedUserId)

  return `
    <section class="leaders">
      <div class="container">
        <div class="wrapper">
          <div class="heading heading__container">
            <h1 class="heading heading--primary">${title}</h1>
            <h2 class="heading heading--secondary">${subtitle}</h2>
          </div>
          <ul class="leaders__list">
            ${users.map((user, userIndex) => `
            <li class="leaders__item">
              <div class="user">
                <div class="user__info">
                  <div class="user__photo">
                    <img
                      srcset="
                        assets/images/1x/${user.avatar} 64w,
                        assets/images/2x/${user.avatar} 128w,
                        assets/images/3x/${user.avatar} 192w,
                        assets/images/4x/${user.avatar} 256w,
                      "
                      sizes="
                        (max-width: 567px) 64px,
                        (max-width: 768px) 128px,
                        (max-width: 1365px) 192px,
                        256px
                        "
                      src="assets/images/1x/${user.avatar}"
                      alt="${user.avatar}"
                    />
                  ${userIndex === 0 ? `<span class="user__photo user__photo__emoji">${emoji}</span>` : ''} 
                  ${userIndex === users.length - 1 ? `<span class="user__photo user__photo__emoji">👍</span>` : ''}
                </div>
                <div class="user__data">
                  <span class="user__name">${user.name}</span>
                  <span class="user__count">${user.valueText}</span>
                </div>
              </div>
              <div class="user__place user__place--${userIndex + 1}">
                <span class="user__place-number">${userIndex + 1}</span>
                ${userIndex === 0 && selectedUserIndex && users[selectedUserIndex] ? `
                <div 
                  data-action="leaders" 
                  data-params='{ \"alias\": \"leaders\", \"data\": { \"selectedUserId\": \"${selectedUserId}\" }}'
                  class="user user--selected data-">
                  <div class="user__info">
                    <div class="user__photo">
                      <img
                        srcset="
                          assets/images/1x/${users[selectedUserIndex].avatar} 64w,
                          assets/images/2x/${users[selectedUserIndex].avatar} 128w,
                          assets/images/3x/${users[selectedUserIndex].avatar} 192w,
                          assets/images/4x/${users[selectedUserIndex].avatar} 256w,
                        "
                        sizes="
                          (max-width: 567px) 64px,
                          (max-width: 768px) 128px,
                          (max-width: 1365px) 192px,
                          256px
                          "
                        src="assets/images/1x/${users[selectedUserIndex].avatar}"
                        alt="${users[selectedUserIndex].avatar}"
                      />
                      <span class="user__photo user__photo__emoji" >👍</span>
                    </div>
                    <div class="user__data">
                      <span class="user__name">${users[selectedUserIndex].name}</span>
                      <span class="user__count">${users[selectedUserIndex].valueText}</span>
                    </div>
                  </div>
                  <div class="user__place-number user__place-number--selected">${selectedUserIndex + 1}</div>
              </div>` : ""}
              </div>
            </div>
          </li>
          `).join('')}
        </ul>
      </div>
    </div>
  </section>
`
}

function showVote({ title, subtitle, users, offset }) {
  return `<section class="vote">
            <div class="container">
              <div class="wrapper">
                <div class="heading heading__container">
                  <h1 class="heading heading--primary">${title}</h1>
                  <h2 class="heading heading--secondary">${subtitle}</h2>
                </div>
                <ul class="vote__users">
                  ${users.map(({ id, name, avatar }) => {
    return `<li class="vote__users__item vote__users__item--${id}">
                      <button 
                        data-action="update" 
                        data-params="data-params='{ \"alias\": \"vote\", \"data\": { \"selectedUserId\": \"${selectedUserId}\" }}" 
                        class="vote__users__button vote__users__button--${id === selectedUserId ? "selected" : ""}">
                        <div class="vote__user">
                          <img srcset="
                          assets/images/1x/${avatar} 64w,
                          assets/images/2x/${avatar} 128w,
                          assets/images/3x/${avatar} 192w,
                          assets/images/4x/${avatar} 256w,
                        " sizes="
                          (max-width: 567px) 64px,
                          (max-width: 768px) 128px,
                          (max-width: 1365px) 192px,
                          256px" src="assets/images/1x/${avatar}" alt="${avatar}" />
                          <span class="vote__user__name">
                           ${name}
                          </span>
                          ${id === selectedUserId ? `<span class="vote__user__emoji">👍</span>` : ""}
                        </div>
                      </button>
                    </li>`}).join("")}
                    <li class="vote__users__item vote__users__item--13">
                      <button data-action="update" data-params='{ \"alias\": \"vote\", \"data\": { \"offset\": \"${offset}\" }}'  class="vote__users__wrapper">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"
                            fill="#FCFBF7" />
                        </svg>
                      </button>
                    </li>
                    <li class="vote__users__item vote__users__item--14">
                      <button data-action="update" data-params="{ \"alias\": \"vote\", \"data\": { \"offset\": \"${offset}\" }}" class="vote__users__wrapper">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"
                            fill="#FCFBF7" />
                        </svg>
                      </button>
                    </li>
                  </ul>
              </div>
          </section>`
}

function showChart({ title, subtitle, values, users }) {
  const maxValue = Math.max(...values.map(({ value }) => value));

  return `<section class="chart">
  <div class="container chart__container">
    <div class="heading heading__container">
      <h1 class="heading heading--primary">${title}</h1>
      <h2 class="heading heading--secondary">${subtitle}</h2>
    </div>
    <div class="chart__wrapper">
      <div class="chart__bars">
      ${values.splice(4, 9).map(({ title, value, active }) => {
    const percentage = (value / maxValue) * 100
    return `
        <div class="chart__item ${active ? "chart__item__bar--active" : ""}">
          ${value > 0 ? `<span class="chart__item__value">${value}</span>` : ""}
          <div class="chart__item__bar chart__item__bar--${~~percentage}"></div>
          <span class="chart__item__title">${title}</span>
        </div>
    `}).join('')
    }}
      </div>
      <ul class="chart__users">
      ${users.map(({ name, avatar, valueText }) => `
        <div class="user chart__user">
          <div class="user__info chart__user__info">
            <div class="user__photo chart__user__photo">
              <img
                srcset="
                  assets/images/1x/${avatar} 64w,
                  assets/images/2x/${avatar} 128w,
                  assets/images/3x/${avatar} 192w,
                  assets/images/4x/${avatar} 256w,
                "
                sizes="
                  (max-width: 567px) 64px,
                  (max-width: 768px) 128px,
                  (max-width: 1365px) 192px,
                  256px
                  "
                src="assets/images/1x/${avatar}"
                alt="${avatar}"
              />
          </div>
          <div class="user__data chart__user__data">
            <span class="user__name">${name}</span>
            <span class="user__count chart__user__count">${valueText}</span>
          </div>
        </div>
        </div>
      `).join("")}
        </ul>
    </div>
  </div>
</section>`
}

function showDiagram({ title, subtitle, totalText, differenceText, categories }) {
  return `
  <section class="diagram">
      <div class="container diagram__container">
        <div class="heading heading__container">
          <h1 class="heading heading--primary">${title}</h1>
          <h2 class="heading heading--secondary">${subtitle}</h2>
        </div>
        <div class="diagram__wrapper">
          <div class="donut-chart-block block">
            <div class="diagram__donut">
              <div class="diagram__donut__slice-outer diagram__donut__slice-outer--1">
                <div class="diagram__donut__slice-inner diagram__donut__slice-inner--1"></div>
              </div>
              <div class="diagram__donut__slice-outer diagram__donut__slice-outer--2">
                <div class="diagram__donut__slice-inner diagram__donut__slice-inner--2"></div>
              </div>
              <div class="diagram__donut__slice-outer diagram__donut__slice-outer--3">
                <div class="diagram__donut__slice-inner diagram__donut__slice-inner--3"></div>
              </div>
              <div class="diagram__donut__slice-outer diagram__donut__slice-outer--4">
                <div class="diagram__donut__slice-inner diagram__donut__slice-inner--4"></div>
              </div>
              <div class="diagram__donut__slice-center">
                <div class="diagram__donut__slice-center__wrapper">
                  <span class="diagram__donut__slice-center__commits">${totalText}</span>
                  <span class="diagram__donut__slice-center__plus">${differenceText}</span>
                </div>
              </div>
            </div>
          </div>
          <ul class="diagram__legend">
          ${categories.map(({ title, valueText, differenceText }, index) => {
    return `<li class="diagram__legend__item">
            <div class="diagram__legend__variants">
              <div class="diagram__legend__circle diagram__legend__circle--${index + 1}"></div>
              <span class="diagram__legend__text">${title}</span>
            </div>
            <div class="diagram__legend__value">
              <span class="diagram__legend__plus-commits">${differenceText.split(" ")[0]}</span>
              <span class="diagram__legend__commits">${valueText.split(" ")[0]}</span>
            </div>
          </li>`
  }).join("")}
          </ul>
        </div>
      </div>
    </section>
  `
}

function showActivity({ title, subtitle, data }) {

  const getValueByHour = (hour) => {
    if (hour === 1 || hour === 2) return "mid"
    if (hour === 3 || hour === 4) return "max"
    if (hour === 4 || hour === 5 || hour >= 6) return "extra"
    return "min"
  }

  return `<section class="activity">
  <div class="container activity__container">
    <div class="heading heading__container">
      <h1 class="heading heading--primary">${title}</h1>
      <h2 class="heading heading--secondary">${subtitle}</h2>
    </div>
    <div class="activity__wrapper">
    <div class="activity__visual">
    ${Object.keys(data).slice(0, 7).map(day => (
    `<div class="activity__visual__day">
      <div class="activity__visual__hour">
        ${data[day].map((hour, index) => (
      `<img srcset="
              assets/images/1x/${getValueByHour(hour)}-dark.png 34w,
              assets/images/2x/${getValueByHour(hour)}-dark.png 68w,
              assets/images/3x/${getValueByHour(hour)}-dark.png 102w,
              assets/images/4x/${getValueByHour(hour)}-dark.png 136w,
            "
            sizes="
              (max-width: 567px) 34px,
              (max-width: 768px) 68px,
              (max-width: 1365px) 102px,
              136px
            "
            class="
              activity__visual__hour__value activity__visual__hour__value__${index + 1} 
              activity__visual__hour__value__${index + 1}--${getValueByHour(hour)}
              "
            src="./assets/images/1x/${getValueByHour(hour)}-dark.png" alt="${day}_${hour}"
            />`)
    ).join("")}
      </div>
    </div>`
  )).join("")}
  </div>
  <div class="activity__legend">
    <div class="activity__legend__item">
      <div class="activity__legend__block activity__legend__block--center">
          <div class="activity__legend__block__hour"></div>
      </div>
      <span class="activity__legend__value activity__legend__value--one">1 час</span>
      <span class="activity__legend__value activity__legend__value--two">2 часа</span>
    </div>
    <div class="activity__legend__item">
      <div class="activity__legend__block activity__legend__block--1"></div>
      <span class="activity__legend__value">0</span>
    </div>
    <div class="activity__legend__item">
      <div class="activity__legend__block activity__legend__block--2"></div>
      <span class="activity__legend__value">1 — 2</span>
    </div>
    <div class="activity__legend__item">
      <div class="activity__legend__block activity__legend__block--3"></div>
      <span class="activity__legend__value">3 — 4</span>
    </div>
    <div class="activity__legend__item">
      <div class="activity__legend__block activity__legend__block--4"></div>
      <span class="activity__legend__value">5 — 6</span>
    </div>
  </div>
    </div>

  </div>
</section>`
}


window.renderTemplate = function (alias, data) {
  switch (alias) {
    case "leaders": return showLeaders(data);
    case 'vote': return showVote(data);
    case "chart": return showChart(data);
    case "diagram": return showDiagram(data);
    case "activity": return showActivity(data)
  }
}

document.body.innerHTML = window.renderTemplate("vote", data[2].data);
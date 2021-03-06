import data from '../data';

function showLeaders({ title, subtitle, users, emoji }) {
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
          <div class="person">
            <div class="person__info">
              <div class="person__photo">
                <img
                  srcset="
                    assets/images/1x/${user.avatar} 64w,
                    assets/images/2x/${user.avatar} 128w,
                    assets/images/3x/${user.avatar} 192w,
                    assets/images/4x/${user.avatar} 256w,
                  "
                  sizes="
                    (max-width: 767px) 64px,
                    (max-width: 992px) 128px,
                    (max-width: 1399px) 192px,
                    256px
                    "
                  src="assets/images/1x/${user.avatar}"
                  alt="${user.avatar}"
                />
                ${userIndex === 0 ? `<span
                  class="person__photo person__photo__emoji"
                  >${emoji}</span
                >` : ''} ${userIndex === users.length - 1 ? `<span
                  class="person__photo person__photo__emoji"
                  >👍</span
                >` : ''}
              </div>
              <div class="person__data">
                <span class="person__name">${user.name}</span>
                <span class="person__count">${user.valueText}</span>
              </div>
            </div>
            <div class="person__place person__place--${userIndex + 1}">
              <span class="person__place-number">${userIndex + 1}</span>
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


window.renderTemplate = function (alias, data) {
  if (alias === "leaders") {
    return showLeaders(data)
  }
}

document.body.innerHTML = renderTemplate("leaders", data[0].data)
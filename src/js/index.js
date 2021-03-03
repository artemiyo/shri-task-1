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
                    <img src="assets/images/1x/${user.avatar}" alt="${user.avatar}" />
                    ${userIndex === 0 ? `<span class="person__photo person__photo__emoji">${emoji}</span>` : ''}
                    ${userIndex === users.length - 1 ? `<span class="person__photo person__photo__emoji">👍</span>` : ''}
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
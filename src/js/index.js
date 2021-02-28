import data from '../data';

const showFirstSlide = ({ data }) => ` 
  <section class="leaders">
    <div class="container">
      <div class="wrapper">
        <div class="heading heading__container">
          <h1 class="heading heading--primary">${data.title}</h1>
          <h2 class="heading heading--secondary">${data.subtitle}</h2>
        </div>
        <ul class="leaders__list">
        ${data.users.map((user, userIndex) => `
          <li class="leaders__item">
              <div class="person">
                <div class="person__info">
                  <div class="person__photo">
                    <img src="assets/images/1x/${user.avatar}" alt="${user.avatar}" />
                    ${userIndex === 0 ? `<span class="person__photo person__photo__emoji">${data.emoji}</span>` : ''}
                    ${userIndex === data.users.length - 1 ? `<span class="person__photo person__photo__emoji">👍</span>` : ''}
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

const renderTemplate = (alias, data) => {
  data.forEach((slide, index) => {
    if (slide.alias === alias && index === 0) {
      document.body.innerHTML = showFirstSlide(slide)
    }
  })
}

console.log()

renderTemplate("leaders", data)
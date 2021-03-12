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
                ${userIndex === 0 && selectedUserIndex && users[selectedUserIndex] ? `<div class="user user--selected">
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

function showVote({ title, subtitle, users, selectedUserId }) {
  return `<section class="vote">
            <div class="container">
              <div class="wrapper">
                <div class="heading heading__container">
                  <h1 class="heading heading--primary">${title}</h1>
                  <h2 class="heading heading--secondary">${subtitle}</h2>
                </div>
                <ul class="users">
                  ${users.slice(0, 8).map((user, userIndex) => `
                    <li class="users__item">
                      <button class="users__button">
                        <div class="user">
                          <div class="user__info">
                            <div class="user__photo">
                              <img
                                srcset="
                                  assets/images/1x/${user.avatar}  64w,
                                  assets/images/2x/${user.avatar} 128w,
                                  assets/images/3x/${user.avatar} 192w,
                                  assets/images/4x/${user.avatar} 256w
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
                            </div>
                          </div>
                          <div class="user__data">
                            <span class="user__name">${user.name}</span>
                          </div>
                        </div>
                      </button>
                    </li>`).join("")}
                  </ul>
                </div>
              </div>
          </section>`
}


window.renderTemplate = function (alias, data) {
  if (alias === "leaders") {
    return showLeaders(data)
  }

  if (alias === "vote") {
    return showVote(data)
  }
}

// document.body.innerHTML = renderTemplate("leaders", data[0].data)
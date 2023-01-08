import placeholderImg from '../images/library/library-placeholder.jpg';

export function getUnauthorizedLibraryPlaceholder() {
  if (window.location.hash === '#ua') {
    return `
        <div class="placeholder">
        <img
          src="${placeholderImg}"
          alt="empty field"
          class="placeholder__img"
          width="600px"
          height="450px"
        />
        <p class="placeholder__text">
            Тут нічого немає... Авторизуйтесь щоб користуватися бібліотекою.
        </p>
        </div>
        `;
  } else {
    return `
        <div class="placeholder">
        <img
          src="${placeholderImg}"
          alt="empty field"
          class="placeholder__img"
          width="600px"
          height="450px"
        />
        <p class="placeholder__text">
            Nothing to see here... Try signing in to use your library.
        </p>
        </div>
        `;
  }
}

export function getEmptyColPlaceholder() {
  if (window.location.hash === '#ua') {
    return `
            <div class="placeholder">
            <img
              src="${placeholderImg}"
              alt="empty field"
              class="placeholder__img"
              width="600px"
              height="450px"
            />
            <p class="placeholder__text">
                Спробуйте додати фільми в вашу колекцію.
            </p>
            </div>
            `;
  } else {
    return `
            <div class="placeholder">
            <img
              src="${placeholderImg}"
              alt="empty field"
              class="placeholder__img"
              width="600px"
              height="450px"
            />
            <p class="placeholder__text">
                Try adding movies to your library.
            </p>
            </div>
            `;
  }
}

function a(a,t,e,d){Object.defineProperty(a,t,{get:e,set:d,enumerable:!0,configurable:!0})}function t(a){return a&&a.__esModule?a.default:a}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},d={},n={},l=e.parcelRequired7c6;null==l&&((l=function(a){if(a in d)return d[a].exports;if(a in n){var t=n[a];delete n[a];var e={id:a,exports:{}};return d[a]=e,t.call(e.exports,e,e.exports),e.exports}var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(a,t){n[a]=t},e.parcelRequired7c6=l),l.register("kyEFX",(function(t,e){var d,n;a(t.exports,"register",(function(){return d}),(function(a){return d=a})),a(t.exports,"resolve",(function(){return n}),(function(a){return n=a}));var l={};d=function(a){for(var t=Object.keys(a),e=0;e<t.length;e++)l[t[e]]=a[t[e]]},n=function(a){var t=l[a];if(null==t)throw new Error("Could not resolve bundle with id "+a);return t}})),l("kyEFX").register(JSON.parse('{"1zJhX":"library.fed339e4.js","kSZaG":"library-placeholder.e58e946c.jpg","eM9ss":"library.4ad6970f.js"}')),l("jw9fa"),l("bMZn5"),l("k601f");var o,r=l("ftYLF"),s=l("eWCmQ"),c=l("eyjy7"),i=l("bMZn5"),_=l("4iZdw"),u=l("krGWQ");function m(){return"#ua"===window.location.hash?`\n            <div class="placeholder">\n            <img\n              src="${t(o)}"\n              alt="empty field"\n              class="placeholder__img"\n              width="600px"\n              height="450px"\n            />\n            <p class="placeholder__text">\n                Спробуйте додати фільми в вашу колекцію.\n            </p>\n            </div>\n            `:`\n            <div class="placeholder">\n            <img\n              src="${t(o)}"\n              alt="empty field"\n              class="placeholder__img"\n              width="600px"\n              height="450px"\n            />\n            <p class="placeholder__text">\n                Try adding movies to your library.\n            </p>\n            </div>\n            `}o=new URL(l("kyEFX").resolve("kSZaG"),import.meta.url).toString();const b=document.querySelector(".watched-btn"),p=document.querySelector(".queue-btn"),h=document.querySelector(".gallery");let v;async function g(){i.auth.currentUser?(v="watched",b.classList.add("watched-btn_current"),p.classList.remove("queue-btn_current"),h.innerHTML="",(0,r.onSnapshot)((0,r.doc)(i.db,"users",i.auth.currentUser.uid),(a=>{const{watchedMovies:t}=a.data();let e;console.log(t),e="#ua"===window.location.hash?0===t.ua.length?m():t.ua.map(_.createMarkupElemetsGallery).join(""):0===t.en.length?m():t.en.map(_.createMarkupElemetsGallery).join(""),h.innerHTML=e}))):"#ua"===window.location.hash?t(s).Notify.failure("Будь ласка, авторизуйтесь"):t(s).Notify.failure("Please sign in")}b.addEventListener("click",g),p.addEventListener("click",(async function(){if(!i.auth.currentUser)return void("#ua"===window.location.hash?t(s).Notify.failure("Будь ласка, авторизуйтесь"):t(s).Notify.failure("Please sign in"));v="queue",b.classList.remove("watched-btn_current"),p.classList.add("queue-btn_current"),h.innerHTML="",(0,r.onSnapshot)((0,r.doc)(i.db,"users",i.auth.currentUser.uid),(a=>{const{queuedMovies:t}=a.data();let e;console.log(t),e="#ua"===window.location.hash?0===t.ua.length?m():t.ua.map(_.createMarkupElemetsGallery).join(""):0===t.en.length?m():t.en.map(_.createMarkupElemetsGallery).join(""),h.innerHTML=e}))})),(0,c.onAuthStateChanged)(i.auth,(a=>{a?(console.log("user logged in: ",a),i.authSignOut.parentElement.classList.remove("visually-hidden"),i.authFormOpen.parentElement.classList.add("visually-hidden"),g()):(console.log("user logged out"),i.authSignOut.parentElement.classList.add("visually-hidden"),i.authFormOpen.parentElement.classList.remove("visually-hidden"),h.innerHTML="#ua"===window.location.hash?`\n        <div class="placeholder">\n        <img\n          src="${t(o)}"\n          alt="empty field"\n          class="placeholder__img"\n          width="600px"\n          height="450px"\n        />\n        <p class="placeholder__text">\n            Тут нічого немає... Авторизуйтесь щоб користуватися бібліотекою.\n        </p>\n        </div>\n        `:`\n        <div class="placeholder">\n        <img\n          src="${t(o)}"\n          alt="empty field"\n          class="placeholder__img"\n          width="600px"\n          height="450px"\n        />\n        <p class="placeholder__text">\n            Nothing to see here... Try signing in to use your library.\n        </p>\n        </div>\n        `),u.refs.siteNav.classList.remove("visually-hidden")}));i=l("bMZn5"),r=l("ftYLF"),s=l("eWCmQ");function w(a){if("#ua"===window.location.hash){const{title:t,poster_path:e,genres:d,vote_average:n,vote_count:l,popularity:o,original_title:r,overview:s}=a;return`\n      <div class="modal">\n          <div class="modal-card">\n              <button class="modal__btn-close" data-modal-close>\n              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n              class="modal__icon-close"\n              width="24" height="24"\n              viewBox="0 0 24 24">\n              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>\n              </svg>\n              </button>\n              <div class="modal-card__images">\n                  <img\n                  class="modal-card__image"\n                  src="https://image.tmdb.org/t/p/w1280/${e}"\n                  alt="Title"\n                  />\n              </div>\n              <div class="modal-card__description">\n                  <h2 class="modal-card__title">${t}</h2>\n                  <table class="modal-card__table">\n                  <tbody>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Vote / Votes</td>\n                      <td class="modal-card__table-data"><span>${n}</span> / ${l}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Popularity</td>\n                      <td class="modal-card__table-data">${o}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Original Title</td>\n                      <td class="modal-card__table-data">${r}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Genre</td>\n                      <td class="modal-card__table-data">${d.map((a=>a.name)).join(", ")}</td>\n                      </tr>\n                  </tbody>\n                  </table>\n                  <p class="modal-card__about lng-about">КОРОТКИЙ ОПИС ФІЛЬМУ</p>\n                  <p class="modal-card__about-description">${s}</p>\n                  <div class="modal-card__btn">\n                    <button class="modal-card__btn-watched lng-watched modal-card__btn-watched_active" data-watched-remove>видалити з перегляду</button>\n                </div>\n              </div>\n          </div>\n      </div>\n  `}{const{title:t,poster_path:e,genres:d,vote_average:n,vote_count:l,popularity:o,original_title:r,overview:s}=a;return`\n      <div class="modal">\n          <div class="modal-card">\n              <button class="modal__btn-close" data-modal-close>\n              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n              class="modal__icon-close"\n              width="24" height="24"\n              viewBox="0 0 24 24">\n              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>\n              </svg>\n              </button>\n              <div class="modal-card__images">\n                  <img\n                  class="modal-card__image"\n                  src="https://image.tmdb.org/t/p/w1280/${e}"\n                  alt="Title"\n                  />\n              </div>\n              <div class="modal-card__description">\n                  <h2 class="modal-card__title">${t}</h2>\n                  <table class="modal-card__table">\n                  <tbody>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Vote / Votes</td>\n                      <td class="modal-card__table-data"><span>${n}</span> / ${l}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Popularity</td>\n                      <td class="modal-card__table-data">${o}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Original Title</td>\n                      <td class="modal-card__table-data">${r}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Genre</td>\n                      <td class="modal-card__table-data">${d.map((a=>a.name)).join(", ")}</td>\n                      </tr>\n                  </tbody>\n                  </table>\n                  <p class="modal-card__about lng-about">About</p>\n                  <p class="modal-card__about-description">${s}</p>\n                  <div class="modal-card__btn">\n                    <button class="modal-card__btn-watched lng-removewatched modal-card__btn-watched_active" data-watched-remove>remove from watched</button>\n                </div>\n              </div>\n          </div>\n      </div>\n  `}}function y(a){if("#ua"===window.location.hash){const{title:t,poster_path:e,genres:d,vote_average:n,vote_count:l,popularity:o,original_title:r,overview:s}=a;return`\n      <div class="modal">\n          <div class="modal-card">\n              <button class="modal__btn-close" data-modal-close>\n              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n              class="modal__icon-close"\n              width="24" height="24"\n              viewBox="0 0 24 24">\n              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>\n              </svg>\n              </button>\n              <div class="modal-card__images">\n                  <img\n                  class="modal-card__image"\n                  src="https://image.tmdb.org/t/p/w1280/${e}"\n                  alt="Title"\n                  />\n              </div>\n              <div class="modal-card__description">\n                  <h2 class="modal-card__title">${t}</h2>\n                  <table class="modal-card__table">\n                  <tbody>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Vote / Votes</td>\n                      <td class="modal-card__table-data"><span>${n}</span> / ${l}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Popularity</td>\n                      <td class="modal-card__table-data">${o}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Original Title</td>\n                      <td class="modal-card__table-data">${r}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Genre</td>\n                      <td class="modal-card__table-data">${d.map((a=>a.name)).join(", ")}</td>\n                      </tr>\n                  </tbody>\n                  </table>\n                  <p class="modal-card__about lng-about">КОРОТКИЙ ОПИС ФІЛЬМУ</p>\n                  <p class="modal-card__about-description">${s}</p>\n                  <div class="modal-card__btn">\n                    <button class="modal-card__btn-queue lng-queue modal-card__btn-queue_active" data-queue-remove>видалити з черги</button>\n                </div>\n              </div>\n          </div>\n      </div>\n  `}{const{title:t,poster_path:e,genres:d,vote_average:n,vote_count:l,popularity:o,original_title:r,overview:s}=a;return`\n      <div class="modal">\n          <div class="modal-card">\n              <button class="modal__btn-close" data-modal-close>\n              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n              class="modal__icon-close"\n              width="24" height="24"\n              viewBox="0 0 24 24">\n              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>\n              </svg>\n              </button>\n              <div class="modal-card__images">\n                  <img\n                  class="modal-card__image"\n                  src="https://image.tmdb.org/t/p/w1280/${e}"\n                  alt="Title"\n                  />\n              </div>\n              <div class="modal-card__description">\n                  <h2 class="modal-card__title">${t}</h2>\n                  <table class="modal-card__table">\n                  <tbody>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Vote / Votes</td>\n                      <td class="modal-card__table-data"><span>${n}</span> / ${l}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Popularity</td>\n                      <td class="modal-card__table-data">${o}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Original Title</td>\n                      <td class="modal-card__table-data">${r}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Genre</td>\n                      <td class="modal-card__table-data">${d.map((a=>a.name)).join(", ")}</td>\n                      </tr>\n                  </tbody>\n                  </table>\n                  <p class="modal-card__about lng-about">About</p>\n                  <p class="modal-card__about-description">${s}</p>\n                  <div class="modal-card__btn">\n                    <button class="modal-card__btn-queue lng-removequeued modal-card__btn-queue_active" data-queue-remove>remove from queue</button>\n                </div>\n              </div>\n          </div>\n      </div>\n  `}}let f,L,x,$;const E=document.querySelector(".backdrop"),k=document.querySelector("[data-modal]");function M(a){E.style.backgroundImage=`url("https://image.tmdb.org/t/p/original/${a.backdrop_path}`,E.style.backgroundSize="cover",E.style.backgroundPosition="50% 50%"}async function q(){const{queuedMovies:a}=await(0,r.getDoc)((0,r.doc)(i.db,"users",i.auth.currentUser.uid)).then((a=>a.data()));a.ua=a.ua.filter((a=>a.id!==$.id)),a.en=a.en.filter((a=>a.id!==$.id)),await(0,r.updateDoc)((0,r.doc)(i.db,"users",i.auth.currentUser.uid),{queuedMovies:a}).then((()=>{"#ua"===window.location.hash?t(s).Notify.success("Успішно видалено"):t(s).Notify.success("Removed successfully"),S()}))}async function T(){const{watchedMovies:a}=await(0,r.getDoc)((0,r.doc)(i.db,"users",i.auth.currentUser.uid)).then((a=>a.data()));a.ua=a.ua.filter((a=>a.id!==$.id)),a.en=a.en.filter((a=>a.id!==$.id)),await(0,r.updateDoc)((0,r.doc)(i.db,"users",i.auth.currentUser.uid),{watchedMovies:a}).then((()=>{"#ua"===window.location.hash?t(s).Notify.success("Успішно видалено"):t(s).Notify.success("Removed successfully"),S()}))}function S(){E.classList.add("is-hidden"),window.removeEventListener("keydown",N),x.removeEventListener("click",S),E.removeEventListener("click",j),f?f.removeEventListener("click",T):L.removeEventListener("click",q)}function N(a){"Escape"===a.code&&S()}function j(a){a.target===a.currentTarget&&S()}h.addEventListener("click",(async function(a){if(a.target===a.currentTarget)return;const e=a.target.closest(".photo-card"),d=Number(e.dataset.id);if("watched"===v)try{const{watchedMovies:a}=await(0,r.getDoc)((0,r.doc)(i.db,"users",i.auth.currentUser.uid)).then((a=>a.data()));$="#ua"===window.location.hash?a.ua.find((a=>a.id===d)):a.en.find((a=>a.id===d)),console.log($),M($),k.innerHTML=w($),f=document.querySelector("[data-watched-remove]"),f.addEventListener("click",T)}catch(a){t(s).Notify.failure(a.message)}else try{const{queuedMovies:a}=await(0,r.getDoc)((0,r.doc)(i.db,"users",i.auth.currentUser.uid)).then((a=>a.data()));$="#ua"===window.location.hash?a.ua.find((a=>a.id===d)):a.en.find((a=>a.id===d)),console.log($),M($),k.innerHTML=y($),L=document.querySelector("[data-queue-remove]"),L.addEventListener("click",q)}catch(a){t(s).Notify.failure(a.message)}x=document.querySelector("[data-modal-close]"),x.addEventListener("click",S),E.addEventListener("click",j),window.addEventListener("keydown",N),k.classList.remove("is-hidden")}));
//# sourceMappingURL=library.fed339e4.js.map

function a(a){return a&&a.__esModule?a.default:a}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},d={},n=t.parcelRequired7c6;null==n&&((n=function(a){if(a in e)return e[a].exports;if(a in d){var t=d[a];delete d[a];var n={id:a,exports:{}};return e[a]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(a,t){d[a]=t},t.parcelRequired7c6=n),n("jw9fa"),n("bMZn5"),n("k601f");var l=n("ftYLF"),o=n("eWCmQ"),s=n("eyjy7"),c=n("bMZn5"),r=n("4iZdw"),i=n("krGWQ");const _=document.querySelector(".watched-btn"),u=document.querySelector(".queue-btn"),m=document.querySelector(".gallery");let b;async function v(){c.auth.currentUser?(b="watched",_.classList.add("watched-btn_current"),u.classList.remove("queue-btn_current"),m.innerHTML="",(0,l.onSnapshot)((0,l.doc)(c.db,"users",c.auth.currentUser.uid),(a=>{const{watchedMovies:t}=a.data();let e;console.log(t),e="#ua"===window.location.hash?t.ua.map(r.createMarkupElemetsGallery).join(""):t.en.map(r.createMarkupElemetsGallery).join(""),m.innerHTML=e}))):"#ua"===window.location.hash?a(o).Notify.failure("Будь ласка, авторизуйтесь"):a(o).Notify.failure("Please sign in")}_.addEventListener("click",v),u.addEventListener("click",(async function(){if(!c.auth.currentUser)return void("#ua"===window.location.hash?a(o).Notify.failure("Будь ласка, авторизуйтесь"):a(o).Notify.failure("Please sign in"));b="queue",_.classList.remove("watched-btn_current"),u.classList.add("queue-btn_current"),m.innerHTML="",(0,l.onSnapshot)((0,l.doc)(c.db,"users",c.auth.currentUser.uid),(a=>{const{queuedMovies:t}=a.data();let e;console.log(t),e="#ua"===window.location.hash?t.ua.map(r.createMarkupElemetsGallery).join(""):t.en.map(r.createMarkupElemetsGallery).join(""),m.innerHTML=e}))})),(0,s.onAuthStateChanged)(c.auth,(a=>{a?(console.log("user logged in: ",a),c.authSignOut.parentElement.classList.remove("visually-hidden"),c.authFormOpen.parentElement.classList.add("visually-hidden"),v()):(console.log("user logged out"),c.authSignOut.parentElement.classList.add("visually-hidden"),c.authFormOpen.parentElement.classList.remove("visually-hidden")),i.refs.siteNav.classList.remove("visually-hidden")}));c=n("bMZn5"),l=n("ftYLF"),o=n("eWCmQ");function g(a){if("#ua"===window.location.hash){const{title:t,poster_path:e,genres:d,vote_average:n,vote_count:l,popularity:o,original_title:s,overview:c}=a;return`\n      <div class="modal">\n          <div class="modal-card">\n              <button class="modal__btn-close" data-modal-close>\n              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n              class="modal__icon-close"\n              width="24" height="24"\n              viewBox="0 0 24 24">\n              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>\n              </svg>\n              </button>\n              <div class="modal-card__images">\n                  <img\n                  class="modal-card__image"\n                  src="https://image.tmdb.org/t/p/w1280/${e}"\n                  alt="Title"\n                  />\n              </div>\n              <div class="modal-card__description">\n                  <h2 class="modal-card__title">${t}</h2>\n                  <table class="modal-card__table">\n                  <tbody>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Vote / Votes</td>\n                      <td class="modal-card__table-data"><span>${n}</span> / ${l}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Popularity</td>\n                      <td class="modal-card__table-data">${o}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Original Title</td>\n                      <td class="modal-card__table-data">${s}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Genre</td>\n                      <td class="modal-card__table-data">${d.map((a=>a.name)).join(", ")}</td>\n                      </tr>\n                  </tbody>\n                  </table>\n                  <p class="modal-card__about lng-about">КОРОТКИЙ ОПИС ФІЛЬМУ</p>\n                  <p class="modal-card__about-description">${c}</p>\n                  <div class="modal-card__btn">\n                    <button class="modal-card__btn-watched lng-watched modal-card__btn-watched_active" data-watched-remove>видалити з перегляду</button>\n                </div>\n              </div>\n          </div>\n      </div>\n  `}{const{title:t,poster_path:e,genres:d,vote_average:n,vote_count:l,popularity:o,original_title:s,overview:c}=a;return`\n      <div class="modal">\n          <div class="modal-card">\n              <button class="modal__btn-close" data-modal-close>\n              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n              class="modal__icon-close"\n              width="24" height="24"\n              viewBox="0 0 24 24">\n              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>\n              </svg>\n              </button>\n              <div class="modal-card__images">\n                  <img\n                  class="modal-card__image"\n                  src="https://image.tmdb.org/t/p/w1280/${e}"\n                  alt="Title"\n                  />\n              </div>\n              <div class="modal-card__description">\n                  <h2 class="modal-card__title">${t}</h2>\n                  <table class="modal-card__table">\n                  <tbody>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Vote / Votes</td>\n                      <td class="modal-card__table-data"><span>${n}</span> / ${l}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Popularity</td>\n                      <td class="modal-card__table-data">${o}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Original Title</td>\n                      <td class="modal-card__table-data">${s}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Genre</td>\n                      <td class="modal-card__table-data">${d.map((a=>a.name)).join(", ")}</td>\n                      </tr>\n                  </tbody>\n                  </table>\n                  <p class="modal-card__about lng-about">About</p>\n                  <p class="modal-card__about-description">${c}</p>\n                  <div class="modal-card__btn">\n                    <button class="modal-card__btn-watched lng-removewatched modal-card__btn-watched_active" data-watched-remove>remove from watched</button>\n                </div>\n              </div>\n          </div>\n      </div>\n  `}}function h(a){if("#ua"===window.location.hash){const{title:t,poster_path:e,genres:d,vote_average:n,vote_count:l,popularity:o,original_title:s,overview:c}=a;return`\n      <div class="modal">\n          <div class="modal-card">\n              <button class="modal__btn-close" data-modal-close>\n              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n              class="modal__icon-close"\n              width="24" height="24"\n              viewBox="0 0 24 24">\n              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>\n              </svg>\n              </button>\n              <div class="modal-card__images">\n                  <img\n                  class="modal-card__image"\n                  src="https://image.tmdb.org/t/p/w1280/${e}"\n                  alt="Title"\n                  />\n              </div>\n              <div class="modal-card__description">\n                  <h2 class="modal-card__title">${t}</h2>\n                  <table class="modal-card__table">\n                  <tbody>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Vote / Votes</td>\n                      <td class="modal-card__table-data"><span>${n}</span> / ${l}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Popularity</td>\n                      <td class="modal-card__table-data">${o}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Original Title</td>\n                      <td class="modal-card__table-data">${s}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Genre</td>\n                      <td class="modal-card__table-data">${d.map((a=>a.name)).join(", ")}</td>\n                      </tr>\n                  </tbody>\n                  </table>\n                  <p class="modal-card__about lng-about">КОРОТКИЙ ОПИС ФІЛЬМУ</p>\n                  <p class="modal-card__about-description">${c}</p>\n                  <div class="modal-card__btn">\n                    <button class="modal-card__btn-queue lng-queue modal-card__btn-queue_active" data-queue-remove>видалити з черги</button>\n                </div>\n              </div>\n          </div>\n      </div>\n  `}{const{title:t,poster_path:e,genres:d,vote_average:n,vote_count:l,popularity:o,original_title:s,overview:c}=a;return`\n      <div class="modal">\n          <div class="modal-card">\n              <button class="modal__btn-close" data-modal-close>\n              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n              class="modal__icon-close"\n              width="24" height="24"\n              viewBox="0 0 24 24">\n              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>\n              </svg>\n              </button>\n              <div class="modal-card__images">\n                  <img\n                  class="modal-card__image"\n                  src="https://image.tmdb.org/t/p/w1280/${e}"\n                  alt="Title"\n                  />\n              </div>\n              <div class="modal-card__description">\n                  <h2 class="modal-card__title">${t}</h2>\n                  <table class="modal-card__table">\n                  <tbody>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Vote / Votes</td>\n                      <td class="modal-card__table-data"><span>${n}</span> / ${l}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Popularity</td>\n                      <td class="modal-card__table-data">${o}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Original Title</td>\n                      <td class="modal-card__table-data">${s}</td>\n                      </tr>\n                      <tr class="modal-card__table-row">\n                      <td class="modal-card__table-data modal-card__table-data--grey">Genre</td>\n                      <td class="modal-card__table-data">${d.map((a=>a.name)).join(", ")}</td>\n                      </tr>\n                  </tbody>\n                  </table>\n                  <p class="modal-card__about lng-about">About</p>\n                  <p class="modal-card__about-description">${c}</p>\n                  <div class="modal-card__btn">\n                    <button class="modal-card__btn-queue lng-removequeued modal-card__btn-queue_active" data-queue-remove>remove from queue</button>\n                </div>\n              </div>\n          </div>\n      </div>\n  `}}var p=n("k601f");let w,y,L,f;const $=document.querySelector(".backdrop"),q=document.querySelector("[data-modal]");function M(a){$.style.backgroundImage=`url("https://image.tmdb.org/t/p/original/${a.backdrop_path}`,$.style.backgroundSize="cover",$.style.backgroundPosition="50% 50%"}async function k(){const{queuedMovies:t}=await(0,l.getDoc)((0,l.doc)(c.db,"users",c.auth.currentUser.uid)).then((a=>a.data()));t.ua=t.ua.filter((a=>a.id!==f.id)),t.en=t.en.filter((a=>a.id!==f.id)),await(0,l.updateDoc)((0,l.doc)(c.db,"users",c.auth.currentUser.uid),{queuedMovies:t}).then((()=>{"#ua"===window.location.hash?a(o).Notify.success("Успішно видалено"):a(o).Notify.success("Removed successfully"),E()}))}async function x(){const{watchedMovies:t}=await(0,l.getDoc)((0,l.doc)(c.db,"users",c.auth.currentUser.uid)).then((a=>a.data()));t.ua=t.ua.filter((a=>a.id!==f.id)),t.en=t.en.filter((a=>a.id!==f.id)),await(0,l.updateDoc)((0,l.doc)(c.db,"users",c.auth.currentUser.uid),{watchedMovies:t}).then((()=>{"#ua"===window.location.hash?a(o).Notify.success("Успішно видалено"):a(o).Notify.success("Removed successfully"),E()}))}function E(){$.classList.add("is-hidden"),window.removeEventListener("keydown",T),L.removeEventListener("click",E),$.removeEventListener("click",N),w?w.removeEventListener("click",x):y.removeEventListener("click",k)}function T(a){"Escape"===a.code&&E()}function N(a){a.target===a.currentTarget&&E()}m.addEventListener("click",(async function(t){if(t.target===t.currentTarget)return;const e=t.target.closest(".photo-card"),d=Number(e.dataset.id);if("watched"===b)try{const{watchedMovies:a}=await(0,l.getDoc)((0,l.doc)(c.db,"users",c.auth.currentUser.uid)).then((a=>a.data()));f="#ua"===window.location.hash?a.ua.find((a=>a.id===d)):a.en.find((a=>a.id===d)),console.log(f),M(f),q.innerHTML=g(f),w=document.querySelector("[data-watched-remove]"),w.addEventListener("click",x)}catch(t){a(o).Notify.failure(t.message)}else try{const{queuedMovies:a}=await(0,l.getDoc)((0,l.doc)(c.db,"users",c.auth.currentUser.uid)).then((a=>a.data()));f="#ua"===window.location.hash?a.ua.find((a=>a.id===d)):a.en.find((a=>a.id===d)),console.log(f),M(f),q.innerHTML=h(f),y=document.querySelector("[data-queue-remove]"),y.addEventListener("click",k)}catch(t){a(o).Notify.failure(t.message)}(0,p.changeLanguage)(),L=document.querySelector("[data-modal-close]"),L.addEventListener("click",E),$.addEventListener("click",N),window.addEventListener("keydown",T),q.classList.remove("is-hidden")}));
//# sourceMappingURL=library.535c29cb.js.map

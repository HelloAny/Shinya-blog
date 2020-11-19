import React from "react"
import gsap from "gsap"

import "./index.scss"

const User = ({ changeWrapper }) => {
  React.useLayoutEffect(() => {
    const tl = gsap.timeline()
    tl.from(".user", { duration: 1, y: -100, opacity: 0 })
  }, [])

  return (
    <main className="user">
      <section className="user__container">
        <section className="user__container-name">{"AMIKARA"}</section>
        <section className="user__container-profile">
          <section className="user__container-profile-circle">
            <svg viewBox="30 30 60 60">
              <circle cx="60" cy="60" r="25" ></circle>
            </svg>
          </section>
        </section>
        <section className="user__container-summary">{"支离东北风尘际，漂泊西南天地间。三峡楼台淹日月，五溪衣服共云山。羯胡事主终无赖，词客哀时且未还。庾信平生最萧瑟，暮年诗赋动江关。"}</section>
        <hr className="hr" />
        <section className="user__container-more">
          <section className="user__container-more-item">
            ABOUT ME
          </section>
          <section className="user__container-more-item">
            LINK
          </section>
          <section className="user__container-more-item">
            CONTRIBUTE
          </section>
          <section className="user__container-more-item">
            MORE
          </section>
        </section>
        {/* <section className="user__container-link">
          <span className="user__container-link-item">
            <a href="https://twitter.com/AmiKara2" rel="noopener noreferrer" target="_blank">
              <svg aria-labelledby="pageFooter-iconTwitter-title" role="img" width="14" height="14" viewBox="0 0 14 14">
                <title id="pageFooter-iconTwitter-title">twitter</title>
                <use xlinkHref="#icon_twitter">
                  <defs>
                    <svg id="icon_twitter" viewBox="0 0 14 14" fill="#65beb4"><path d="M13.98 2.27c-.51.25-1.07.42-1.65.49.59-.39 1.05-1 1.26-1.73-.55.36-1.17.62-1.82.76-.52-.61-1.26-.99-2.08-.99-1.58 0-2.87 1.4-2.87 3.13 0 .25.03.48.07.71C4.51 4.51 2.4 3.27.99 1.37c-.25.46-.39 1-.39 1.57 0 1.09.51 2.04 1.27 2.61-.47-.02-.91-.16-1.3-.39v.04c0 1.52.99 2.78 2.3 3.07-.23.07-.49.11-.75.11-.18 0-.36-.02-.54-.06.36 1.24 1.42 2.15 2.68 2.17-.98.84-2.22 1.34-3.56 1.34-.23 0-.46-.02-.68-.04 1.27.89 2.77 1.41 4.39 1.41 5.27 0 8.15-4.77 8.15-8.91 0-.14 0-.27-.01-.41a5.83 5.83 0 0 0 1.43-1.61z"></path></svg>
                  </defs>
                </use>
              </svg>
            </a>
          </span>
          <span className="user__container-link-item">
            <a href="https://www.instagram.com/amikara_/" rel="noopener noreferrer" target="_blank">
              <svg aria-labelledby="pageFooter-iconInstagram-title" role="img" width="14" height="14" viewBox="0 0 14 14">
                <title id="pageFooter-iconInstagram-title">instagram</title>
                <use xlinkHref="#icon_instagram">
                  <defs>
                    <svg id="icon_instagram" viewBox="0 0 14 14" fill="#65beb4"><path d="M7 1.26c1.87 0 2.09.01 2.83.04.68.03 1.05.15 1.3.24.33.13.56.28.8.52s.4.48.52.8c.1.25.21.62.24 1.3.03.74.04.96.04 2.83s-.01 2.09-.04 2.83c-.03.68-.15 1.05-.24 1.3-.13.33-.28.56-.52.8s-.48.4-.8.52c-.25.1-.62.21-1.3.24-.74.05-.96.06-2.83.06s-2.09-.01-2.83-.04c-.68-.03-1.05-.15-1.3-.24-.33-.13-.56-.28-.8-.52s-.4-.48-.52-.8c-.1-.25-.21-.62-.24-1.3-.04-.75-.05-.97-.05-2.84 0-1.87.01-2.09.04-2.83.03-.68.15-1.05.24-1.3.13-.33.28-.56.52-.8s.48-.4.8-.52c.25-.1.62-.21 1.3-.24.75-.04.97-.05 2.84-.05M7 0C5.1 0 4.86.01 4.11.04s-1.25.15-1.7.33c-.46.18-.85.42-1.24.8-.38.39-.62.78-.8 1.24-.17.45-.29.95-.33 1.7C.01 4.86 0 5.1 0 7c0 1.9.01 2.14.04 2.89s.15 1.25.33 1.7c.18.46.42.85.81 1.24.39.39.78.63 1.24.81.45.17.95.29 1.7.33.74.02.98.03 2.88.03s2.14-.01 2.89-.04 1.25-.15 1.7-.33c.46-.18.85-.42 1.24-.81.39-.39.63-.78.81-1.24.17-.45.29-.95.33-1.7.02-.74.03-.98.03-2.88s-.01-2.14-.04-2.89-.15-1.25-.33-1.7c-.18-.46-.42-.85-.81-1.24-.39-.39-.78-.63-1.24-.81-.45-.17-.95-.29-1.7-.33C9.14.01 8.9 0 7 0"></path><path d="M7 3.41A3.58 3.58 0 0 0 3.41 7c0 1.99 1.61 3.59 3.59 3.59 1.99 0 3.59-1.61 3.59-3.59 0-1.99-1.6-3.59-3.59-3.59m0 5.92C5.71 9.33 4.67 8.29 4.67 7S5.71 4.67 7 4.67 9.33 5.71 9.33 7 8.29 9.33 7 9.33M11.58 3.26c0 .46-.38.84-.84.84-.46 0-.84-.38-.84-.84 0-.46.38-.84.84-.84.46 0 .84.38.84.84"></path></svg>
                  </defs>
                </use>
              </svg>
            </a>
          </span>
          <span className="user__container-link-item">
            <a href="https://github.com/HelloAny" rel="noopener noreferrer" target="_blank">
              <svg aria-labelledby="pageFooter-iconGithub-title" role="img" width="14" height="14" viewBox="0 0 14 14">
                <title id="pageFooter-iconGithub-title">github</title>
                <use xlinkHref="#icon_github">
                  <defs>
                    <svg id="icon_github" fill="#65beb4" t="1598937161044" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4657" width="14" height="14"><path d="M402.262528 694.878208q0 22.85568-7.1424 46.854144t-24.569856 43.425792-41.42592 19.427328-41.42592-19.427328-24.569856-43.425792-7.1424-46.854144 7.1424-46.854144 24.569856-43.425792 41.42592-19.427328 41.42592 19.427328 24.569856 43.425792 7.1424 46.854144zm365.69088 0q0 22.85568-7.1424 46.854144t-24.569856 43.425792-41.42592 19.427328-41.42592-19.427328-24.569856-43.425792-7.1424-46.854144 7.1424-46.854144 24.569856-43.425792 41.42592-19.427328 41.42592 19.427328 24.569856 43.425792 7.1424 46.854144zm91.42272 0q0-68.56704-39.426048-116.563968t-106.850304-47.996928q-23.427072 0-111.42144 11.999232-40.568832 6.285312-89.708544 6.285312t-89.708544-6.285312q-86.851584-11.999232-111.42144-11.999232-67.424256 0-106.850304 47.996928t-39.426048 116.563968q0 50.282496 18.284544 87.708672t46.282752 58.853376 69.709824 34.28352 79.99488 16.856064 85.137408 3.999744l95.993856 0q46.854144 0 85.137408-3.999744t79.99488-16.856064 69.709824-34.28352 46.282752-58.853376 18.284544-87.708672zm127.991808-100.564992q0 118.278144-34.854912 189.130752-21.712896 43.997184-60.281856 75.995136t-80.566272 49.139712-97.13664 27.14112-97.993728 12.570624-95.422464 2.571264q-44.568576 0-81.137664-1.714176t-84.28032-7.1424-87.13728-17.14176-78.280704-29.426688-69.138432-46.282752-49.139712-65.71008q-35.426304-70.281216-35.426304-189.130752 0-135.419904 77.709312-226.271232-15.427584-46.854144-15.427584-97.13664 0-66.281472 29.140992-124.563456 61.710336 0 108.56448 22.569984t107.993088 70.566912q83.994624-19.99872 176.560128-19.99872 84.566016 0 159.98976 18.284544 59.99616-46.854144 106.850304-69.138432t107.993088-22.284288q29.140992 58.281984 29.140992 124.563456 0 49.711104-15.427584 95.993856 77.709312 91.42272 77.709312 227.414016z" p-id="4658"></path></svg>
                  </defs>
                </use>
              </svg>
            </a>
          </span>
        </section> */}
      </section>
    </main>
  )
}


export default User









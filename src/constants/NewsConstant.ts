import { Autoplay } from "swiper/modules";

export const SaraminHeaderStr = "어머, 이건 꼭 봐야돼! 채용 정보";
export const GithubHeaderStr = "매력적인 리포지토리";
export const BlogHeaderStr = "MZ세대를 홀린 인기 포스팅";

/** Swiper 설정 */
export const swiperSettings = {
  slidesPerView: 1,
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
};

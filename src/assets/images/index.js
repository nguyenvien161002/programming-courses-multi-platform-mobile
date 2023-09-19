import Logo from '~/assets/images/logo-mini.svg';
import Personal from '~/assets/images/social/personal.svg';
import Google from '~/assets/images/social/google.svg';
import Facebook from '~/assets/images/social/facebook.svg';
import Github from '~/assets/images/social/github.svg';
import CrownIconCourse from '~/assets/images/crown_icon_course.svg';

const images = {
    Logo,
    CrownIconCourse,
    searchIcon: require('~/assets/images/search-icon.svg'),
    hideousMeow: require('~/assets/images/hideous-meow.jpg'),
    meowMeow: require('~/assets/images/meow-meow.jpg'),
    silentMeow: require('~/assets/images/silent-meow.jpg'),
    eagerMeow: require('~/assets/images/eagere-meow.jpg'),
    f8Avatar: require('~/assets/images/f8_avatar.png'),
    crush: require('~/assets/images/crush.jpg'),
    plane: require('~/assets/images/plane.png'),
    crown: require('~/assets/images/crown.svg'),
    dmca: require('~/assets/images/dmca.png'),
    noAvatar: require('~/assets/images/fallback-no-avatar.jpg'),
    fbGroupCards: require('~/assets/images/fb-group-cards.png'),
    payments: {
        paypal: require('~/assets/images/payments/paypal.png'),
        cash: require('~/assets/images/payments/cash.png'),
        cancel: require('~/assets/images/payments/cancel.png'),
        bank: require('~/assets/images/payments/bank.png'),
    },
    social: {
        personal: Personal,
        google: Google,
        facebook: Facebook,
        github: Github,
    },
    banners: {
        stuAchi: require('~/assets/images/banners/banner_01_Student_Achievement.png'),
        reactjs: require('~/assets/images/banners/banner_02_ReactJS.png'),
        youtube: require('~/assets/images/banners/banner_03_Youtube.png'),
        facebook: require('~/assets/images/banners/banner_04_Facebook.png'),
        htmlCssPro: require('~/assets/images/banners/banner_05_HTML_CSS_pro.png'),
        htmlcssProTopic: require('~/assets/images/banners/banner_01_topic.png'),
        youtubeTopic: require('~/assets/images/banners/banner_02_topic.png'),
    },
    road: {
        frontEnd: require('~/assets/images/road/road-front-end.png'),
        backEnd: require('~/assets/images/road/road-back-end.png'),
    },
    courses: {
        jsBase: require('~/assets/images/courses/js-base.png'),
        jsAdvance: require('~/assets/images/courses/js-advance.png'),
        responsive: require('~/assets/images/courses/responsive.png'),
        nodeExpressJs: require('~/assets/images/courses/node-expressjs.png'),
        htmlCSS: require('~/assets/images/courses/html-css.png'),
        knowledgeBase: require('~/assets/images/courses/knowledge-base.png'),
    },
};

export default images;

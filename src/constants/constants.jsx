import {
  gericht,
  spoon,
  welcome,
  G,
  knife,
  menu,
  chef,
  quote,
  sign,
  logo,
  laurels,
  gallery04,
  gallery03,
  gallery02,
  gallery01,
  findus,
} from './images';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

//NavBar Constants
export const navBarConstants = {
  image: gericht,
  navLinks: ['Home', 'Pages', 'Contact Us', 'Blog', 'Landing'],
};

//Header Constants

export const headerConstants = {
  chase: 'Chase the new Flavour',
  mainHead: 'The key to Fine dining',
  spoon: spoon,
  subText:
    'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus',
  buttonContent: 'Explore Menu',
  welcome: welcome,
};

//AboutUs constants

export const aboutUsConstants = {
  gImage: G,
  about: 'About Us',
  history: 'Our History',
  aboutContent:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.',
  historyContent:
    'Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.',
  aboutButton: 'Know More',
  spoon: spoon,
  knife: knife,
};

//Menu constants

export const menuConstants = {
  menu: 'Menu that fits you palatte',
  title: 'Today’s Special',
  wineTitle: 'Wine & Beer',
  cocktails: 'Cocktails',
  menuImage: menu,
};

//chefConstants

export const chefConstants = {
  image: chef,
  topText: 'Chef’s Word',
  heading: 'What we believe in',
  colonImage: quote,
  text: 'auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.',
  name: 'Kevin Luo',
  designation: 'Chef & Founder',
  signature: sign,
};

//AwardConstants

export const laurelConstants = {
  img: logo,
  text: 'Awards & recognition',
  laurel: 'Our Laurels',
  image: laurels,
};

//galleryConstants

export const galleryConstants = {
  text: 'Instagram',
  title: 'Photo Gallery',
  subText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.',
  buttonContent: 'View More',
  images: [gallery04, gallery03, gallery02, gallery01],
};

//findUsConstants

export const findUsConstants = {
  text: 'Contact',
  title: 'Find Us',
  subText: 'Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG',
  subTitle: 'Opening Hours',
  time: ['Mon - Fri: 10:00 am - 02:00 am', 'Sat - Sun: 10:00 am - 03:00 am'],
  buttonContent: 'Visit Us',
  image: findus,
};

//newsletterConstants

export const newsletterConstants = {
  text: 'Newsletter',
  title: 'Subscribe to Our Newsletter',
  subText: 'And never miss latest Updates!',
  placeholder: 'Email Address',
  buttonContent: 'Subscribe',
};

export const footerConstants = {
  contact: {
    text: 'Contact Us',
    subText: '9 W 53rd St, New York, NY 10019, USA',
    phone: ['+1 212-344-1230', '+1 212-555-1230'],
  },
  middle: {
    title: 'GERICHT',
    subText:
      '"The best way to find yourself is to lose yourself in the service of others.”',
    icons: [FiFacebook, FiTwitter, FiInstagram],
  },
  workingHours: [
    { day: 'Monday-Friday:', time: '08:00 am -12:00 am' },
    { day: 'Saturday-Sunday:', time: '07:00am -11:00 pm' },
  ],
  copyRights: '2024 Gerícht. All Rights reserved.',
};

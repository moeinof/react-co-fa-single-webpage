import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import heroBg from "./images/main.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "خانه" },
  { id: 2, href: "#about", text: "درباره ما" },
  { id: 3, href: "#services", text: "خدمات ما" },
  { id: 4, href: "#featured", text: "تور" },
];
export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "bx bxl-instagram" },
  { id: 2, href: "https://www.twitter.com", icon: "bx bxl-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "bx bxl-steam" },
];

export const hero = {
  heading: "عنوان اصلی",
  body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
  img: heroBg,
  link: {
    href: "#featured",
    label: "مشاهده تورها",
  },
};

export const services = [
  {
    id: 1,
    icon: "bx bxl-typescript",
    title: "عنوان اول",
    text: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ",
  },
  {
    id: 2,
    icon: "bx bxl-steam",
    title: "عنوان دوم",
    text: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ",
  },
  {
    id: 3,
    icon: "bx bxl-python",
    title: "عنوان سوم",
    text: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "ماجراجویی در تبت",
    info: ` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون`,
    location: "چین",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "بهترین های اندونزی",
    info: ` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون`,
    location: "اندونزی",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "اکتشاف هنگ کنگ",
    info: ` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون`,
    location: "هنگ کنگ",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "هتل های گردشگری کنیا",
    info: ` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون`,
    location: "کنیا",
    duration: 20,
    cost: 3300,
  },
];

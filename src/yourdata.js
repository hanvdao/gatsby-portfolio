// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Han Dao",
  headerTagline: [
    //Line 1 For Header
    "An aspiring CS major",
    //Line 2 For Header
    "with a keen interest",
    //Line 3 For Header
    "for art and design",
  ],
  //   Header Paragraph
  headerParagraph:
    "currently looking for front-end internship opportunities and open for work and collaboration",

  //Contact Email
  contactEmail: "hanvdao@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Etch A Sketch", //Project Title - Add Your Project Title Here
      para: "An Etch A Sketch simulation made with HTML, CSS, and Javascript!", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/etch-a-sketch.png"),
      //Project URL - Add Your Project Url Here
      url: "https://hanvdao.github.io/etch-a-sketch/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Calculator", //Project Title - Add Your Project Title Here
      para: "A calculator app made using JavaScript, HTML, and CSS!", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/calculator.png"),
      //Project URL - Add Your Project Url Here
      url: "https://hanvdao.github.io/js-calculator/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Library", //Project Title - Add Your Project Title Here
      para: "A library platform that helps track your reading list.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/library.png"),
      //Project URL - Add Your Project Url Here
      url: "https://hanvdao.github.io/js-library/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Drum Kit", //Project Title - Add Your Project Title Here
      para: "A drum kit simulation made with HTML, CSS, and Javascript!", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/drum-kit.png"),
      //Project URL - Add Your Project Url Here
      url: "https://hanvdao.github.io/js-drum-kit/",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Glass Website", //Project Title - Add Your Project Title Here
      para:
        "A website template implemented with glassmorphism/frosted glass aesthetic", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/glass-website.png"),
      //Project URL - Add Your Project Url Here
      url: "https://hanvdao.github.io/glassmorphism/",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Rock Paper Scissors", //Project Title - Add Your Project Title Here
      para: "A Rock-Paper-Scissors game made with HTML, CSS, and Javascript!", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/rock-paper-scissors.png"),
      //Project URL - Add Your Project Url Here
      url: "https://hanvdao.github.io/rock-paper-scissors/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hi there! My name is Han Dao. I grew up in Saigon, Vietnam, and now I find myself 'halfway across the globe' as a high school senior. I am passionate about art and design and hope to combine them with my study in Computer Science and Math.",
  aboutParaTwo:
    "With a background in the Computer Science field and managing student-run organizations, I am currently interested in internship opportunities that will allow me to apply my programming, project management skills, and creative knowledge to the professional sphere.",
  aboutParaThree:
    "At Stanford University, I plan to major in Computer Science with a minor in Managemene Science & Engineering, hoping to gain insigts about the interface of Computer Science and Business.",
  aboutImage: "https://vistapointe.net/images/stick-man-1.jpg",
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para: "HTML3",
    },
    {
      id: 2,
      img: cssIcon,
      para: "CSS3",
    },
    {
      id: 3,
      img: jsIcon,
      para: "Javascript",
    },
    {
      id: 4,
      img: reactIcon,
      para: "React",
    },
    {
      id: 5,
      img: designIcon,
      para: "Graphic Design",
    },
    {
      id: 6,
      img: codeIcon,
      para: "Java",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Art Portfolio",
  promotionPara: "coming soon...",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Reach out to me at",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/chetanverma16" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com

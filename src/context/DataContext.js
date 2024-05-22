import { createContext, useContext } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const coursesDetails = [
    {
      id: 0,
      courseInfo: {
        courseName: "Web Design Fundamentals Course",
        courseDesc:
          "Welcome to our Web Design Fundamentals course! This comprehensive program will introduce you to the core concepts and techniques of web design. From structuring content with HTML to styling with CSS and ensuring responsiveness across devices, you'll gain the skills needed to create stunning websites. Below is an overview of the curriculum",
        sections: [
          {
            name: "Introduction to Web Design",
            lectures: [
              {
                lecName: "Understanding Web Design Principles",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Exploring Different Types of Websites",
                lecDuration: "45 Minutes",
              },
              {
                lecName: "The Importance of User Experience",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "HTML Basics",
            lectures: [
              {
                lecName: "Introduction to HTML Structure",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "HTML Elements and Tags",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Semantic HTML5",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "CSS Styling",
            lectures: [
              {
                lecName: "Introduction to CSS",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "CSS Selectors and Properties",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Styling Text and Images",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "Responsive Design",
            lectures: [
              {
                lecName: "Understanding Responsive Design Principles",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Media Queries and Flexible Layouts",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Mobile-First Design Approach",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "Typography and Layout",
            lectures: [
              {
                lecName: "Choosing Fonts for the Web",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Layout Design Techniques",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Grid Systems and Page Structure",
                lecDuration: "1 Hour",
              },
            ],
          },
        ],
      },
    },
    {
      id: 1,
      courseInfo: {
        courseName: "UI/UX Design Course",
        courseDesc:
          "Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum",
        sections: [
          {
            name: "Introduction to UI/UX Design",
            lectures: [
              {
                lecName: "Understanding UI/UX Design Principles",
                lecDuration: "45 Minutes",
              },
              {
                lecName: "Importance of User-Centered Design",
                lecDuration: "1 Hour",
              },
              {
                lecName: "The Role of UI/UX Design in Product Development",
                lecDuration: "45 Minutes",
              },
            ],
          },
          {
            name: "User Research and Analysis",
            lectures: [
              {
                lecName: "Conducting User Research and Interviews",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Analyzing User Needs and Behavior",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Creating User Personas and Scenarios",
                lecDuration: "45 Minutes",
              },
            ],
          },
          {
            name: "Wireframing and Prototyping",
            lectures: [
              {
                lecName: "Introduction to Wireframing Tools and Techniques",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Creating Low-Fidelity Wireframes",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Prototyping and Interactive Mockups",
                lecDuration: "45 Minutes",
              },
            ],
          },
          {
            name: "Visual Design and Branding",
            lectures: [
              {
                lecName: "Color Theory and Typography in UI Design",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Visual Hierarchy and Layout Design",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Creating a Strong Brand Identity",
                lecDuration: "45 Minutes",
              },
            ],
          },
          {
            name: "Usability Testing and Iteration",
            lectures: [
              {
                lecName: "Usability Testing Methods and Techniques",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Analyzing Usability Test Results",
                lecDuration: "45 Minutes",
              },
              {
                lecName: "Iterating and Improving UX Designs",
                lecDuration: "45 Minutes",
              },
            ],
          },
        ],
      },
    },
    {
      id: 2,
      courseInfo: {
        courseName: "Mobile App Development Course",
        courseDesc:
          "Welcome to our Mobile App Development course! This program will equip you with the knowledge and skills to build mobile applications for iOS and Android platforms. From designing user interfaces to implementing backend services, you'll learn the complete app development lifecycle. Below is an overview of the curriculum",
        sections: [
          {
            name: "Introduction to Mobile App Development",
            lectures: [
              {
                lecName: "Overview of Mobile Platforms and Ecosystem",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Understanding Mobile App Development Lifecycle",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Exploring Cross-Platform Development Tools",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "UI/UX Design for Mobile Apps",
            lectures: [
              {
                lecName: "Design Principles for Mobile User Interfaces",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Mobile Navigation Patterns and Gestures",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Responsive Design for Various Screen Sizes",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "iOS App Development with Swift",
            lectures: [
              {
                lecName: "Introduction to iOS App Development",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Swift Programming Language Basics",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Building User Interfaces with UIKit",
                lecDuration: "1.5 Hours",
              },
            ],
          },
          {
            name: "Android App Development with Kotlin",
            lectures: [
              {
                lecName: "Introduction to Android App Development",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Kotlin Language Fundamentals",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Working with Android Views and Layouts",
                lecDuration: "1.5 Hours",
              },
            ],
          },
          {
            name: "API Integration and Data Management",
            lectures: [
              {
                lecName: "Consuming RESTful APIs in Mobile Apps",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Handling User Authentication and Authorization",
                lecDuration: "1 Hour",
              },
            ],
          },
        ],
      },
    },
    {
      id: 3,
      courseInfo: {
        courseName: "Graphic Design for Beginners Course",
        courseDesc:
          "Welcome to our Graphic Design for Beginners course! This program is designed to introduce you to the fundamentals of graphic design. From understanding design principles to mastering essential design tools, you'll learn the basics needed to create visually appealing designs. Below is an overview of the curriculum",
        sections: [
          {
            name: "Introduction to Graphic Design",
            lectures: [
              {
                lecName: "Understanding Design Principles",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Exploring Graphic Design History",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Introduction to Design Software",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "Typography and Layout",
            lectures: [
              {
                lecName: "Basics of Typography",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Creating Effective Layouts",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Understanding Grid Systems",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "Color Theory and Composition",
            lectures: [
              {
                lecName: "Introduction to Color Theory",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Using Color in Design",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Composition Techniques",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "Logo Design and Branding",
            lectures: [
              {
                lecName: "Principles of Logo Design",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Creating Brand Identity",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Designing Marketing Collateral",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "Digital Illustration Basics",
            lectures: [
              {
                lecName: "Introduction to Digital Illustration Tools",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Creating Vector Graphics",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Understanding Image Formats",
                lecDuration: "1 Hour",
              },
            ],
          },
        ],
      },
    },
    {
      id: 4,
      courseInfo: {
        courseName: "Front-End Web Development Course",
        courseDesc:
          "Welcome to our Front-End Web Development course! This program will teach you the essential skills required to build interactive and responsive websites. From HTML and CSS basics to JavaScript programming and modern front-end frameworks, you'll learn everything you need to kickstart your career as a front-end developer. Below is an overview of the curriculum",
        sections: [
          {
            name: "Introduction to Web Development",
            lectures: [
              {
                lecName:
                  "Overview of Front-End, Back-End, and Full-Stack Development",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Understanding Client-Side vs. Server-Side",
                lecDuration: "1 Hour",
              },
              {
                lecName: "Setting Up Development Environment",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "HTML and CSS Basics",
            lectures: [
              {
                lecName: "Introduction to HTML Structure",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Styling with CSS",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Box Model and Layouts",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "JavaScript Fundamentals",
            lectures: [
              {
                lecName: "Introduction to JavaScript",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Working with Variables and Data Types",
                lecDuration: "1 Hour",
              },
              {
                lecName: "DOM Manipulation and Event Handling",
                lecDuration: "1.5 Hours",
              },
            ],
          },
          {
            name: "Responsive Web Design",
            lectures: [
              {
                lecName: "Understanding Responsive Design Principles",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Media Queries and Flexbox",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Introduction to CSS Grid",
                lecDuration: "1 Hour",
              },
            ],
          },
          {
            name: "Front-End Frameworks",
            lectures: [
              {
                lecName: "Introduction to Bootstrap",
                lecDuration: "1.5 Hours",
              },
              {
                lecName: "Working with React.js",
                lecDuration: "2 Hours",
              },
              {
                lecName: "Vue.js Fundamentals",
                lecDuration: "2 Hours",
              },
            ],
          },
        ],
      },
    },
  ];
  const CoursesInfo = [
    {
      id: 0,

      name: "Web Design Fundamentals",
      title:
        "Learn the fundamentals of web design, including HTML, CSS, andresponsive design principles. Develop the skills to create visuallyappealing and user-friendly websites.",
      duration: 4,
      level: "Beginner",
      owner: "john Smith",
      curriculum: [
        "Introduction to HTML",
        "Styling with CSS",
        "Introduction to Responsive Design",
        "Design Principles for Web",
        "Building a Basic Website",
      ],
      images: [
        "asstes/courses/Image (10).png",
        "asstes/courses/Image (11).png",
        "asstes/courses/Image (12).png",
      ],
      img: "asstes/courses/Image.png",
    },
    {
      id: 1,

      name: "UI/UX Design",
      title:
        "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
      duration: 6,
      level: "Intermediate",
      owner: "Emily Johnson",
      curriculum: [
        "Introduction to UI/UX Design",
        "User Research and Personas",
        "Wireframing and Prototyping",
        "Visual Design and Branding",
        "Usability Testing and Iteration",
      ],
      images: [
        "asstes/courses/Image (13).png",
        "asstes/courses/Image (14).png",
        "asstes/courses/Image (15).png",
      ],
      img: "asstes/courses/Image (1).png",
    },
    {
      id: 2,

      name: "Mobile App Development",
      title:
        "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
      duration: 8,
      level: "Intermediate",
      owner: "David Johnson",
      curriculum: [
        "Introduction to UI/UX Design",
        "User Research and Personas",
        "Wireframing and Prototyping",
        "Visual Design and Branding",
        "Usability Testing and Iteration",
      ],
      images: [
        "asstes/courses/Image (16).png",
        "asstes/courses/Image (17).png",
        "asstes/courses/Image (18).png",
      ],
      img: "asstes/courses/Image (2).png",
    },
    {
      id: 3,

      name: "Graphic Design for Beginners",
      title:
        "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
      duration: 10,
      level: "Beginner",
      owner: "Sraah Johnson",
      curriculum: [
        "Introduction to Graphic Design",
        "Typography and Color Theory ",
        "Layout Design and Composition",
        "Image Editing and Manipulation",
        "Designing for Print and Digital Media",
      ],
      images: [
        "asstes/courses/Image (19).png",
        "asstes/courses/Image (20).png",
        "asstes/courses/Image (21).png",
      ],
      img: "asstes/courses/Image (2).png",
    },
    {
      id: 4,

      name: "Front-End Web Development",
      title:
        "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
      duration: 10,
      level: "Intermediate",
      owner: "Michael Adam",
      curriculum: [
        "HTML Fundamentals",
        "CSS Styling and Layouts",
        "JavaScript Basics",
        "Building Responsive Websites",
        "Introduction to Bootstrap and React",
      ],
      images: [
        "asstes/courses/Image (22).png",
        "asstes/courses/Image (23).png",
        "asstes/courses/Image (24).png",
      ],
      img: "asstes/courses/Image (3).png",
    },
  ];

  const BenefitsData = [
    {
      title: "Flexible Learning Schedule",
      desc: "Fit your coursework around your existing commitments and obligations.",
    },
    {
      title: "Expert Instruction",
      desc: "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      title: "Diverse Course Offerings",
      desc: "Explore a wide range of design and development courses covering various topics.",
    },
    {
      title: "Updated Curriculum",
      desc: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      title: "Practical Projects and Assignments",
      desc: "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      title: "Interactive Learning Environment",
      desc: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];

  const testimonialsData = [
    {
      message:
        "The web design course provided a solid foundation for me. Theinstructors were knowledgeable and supportive, and the interactivelearning environment was engaging. I highly recommend it!",
      img: "asstes/testemonails/Image (6).png",
      owner: "Sarah L",
    },
    {
      message:
        "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      img: "asstes/testemonails/Image (7).png",
      owner: "Jason M",
    },
    {
      message:
        "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
      img: "asstes/testemonails/Image (8).png",
      owner: "Emily R",
    },
    {
      message:
        "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
      img: "asstes/testemonails/Image (9).png",
      owner: "Michael K",
    },
  ];

  const Monthlyplanes = {
    type: "month",
    planes: [
      [
        {
          title: "Access to selected free courses.",
          allowed: true,
        },
        {
          title: "Limited course materials and resources.",
          allowed: true,
        },
        {
          title: "Basic community support.",
          allowed: true,
        },
        {
          title: "No certification upon completion.",
          allowed: true,
        },
        {
          title: "Ad-supported platform.",
          allowed: true,
        },
        {
          title: "Access to exclusive Pro Plan community forums.",
          allowed: false,
        },
        {
          title: "Early access to new courses and updates.",
          allowed: false,
        },
      ],
      [
        {
          title: "Unlimited access to all courses.",
          allowed: true,
        },
        {
          title: "Unlimited course materials and resources.",
          allowed: true,
        },
        {
          title: "Priority support from instructors.",
          allowed: true,
        },
        {
          title: "Course completion certificates.",
          allowed: true,
        },
        {
          title: "Ad-free experience.",
          allowed: true,
        },
        {
          title: "Access to exclusive Pro Plan community forums.",
          allowed: true,
        },
        {
          title: "Early access to new courses and updates.",
          allowed: true,
        },
      ],
    ],
  };

  const yearlyplanes = {
    type: "year",
    planes: [
      [
        {
          title: "Access to selected free courses.",
          allowed: true,
        },
        {
          title: "Limited course materials and resources.",
          allowed: true,
        },
        {
          title: "Basic community support.",
          allowed: true,
        },
        {
          title: "No certification upon completion.",
          allowed: true,
        },
        {
          title: "Ad-supported platform.",
          allowed: true,
        },
        {
          title: "Access to exclusive Pro Plan community forums.",
          allowed: false,
        },
        {
          title: "Early access to new courses and updates.",
          allowed: false,
        },
      ],
      [
        {
          title: "Unlimited access to all courses.",
          allowed: true,
        },
        {
          title: "Unlimited course materials and resources.",
          allowed: true,
        },
        {
          title: "Priority support from instructors.",
          allowed: true,
        },
        {
          title: "Course completion certificates.",
          allowed: true,
        },
        {
          title: "Ad-free experience.",
          allowed: true,
        },
        {
          title: "Access to exclusive Pro Plan community forums.",
          allowed: true,
        },
        {
          title: "Early access to new courses and updates.",
          allowed: true,
        },
      ],
    ],
  };

  const questions = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneouslyand access them at your convenience.",
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer:
        "Instructors typically provide various forms of support, including answering questions in discussion forums, providing feedback on assignments, and hosting live sessions or office hours for additional clarification",
    },
    {
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
      answer:
        " It depends on the course. Some courses are self-paced, allowing you to start and finish at your own pace, while others have specific start and end dates, with structured deadlines for assignments and assessments.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Most courses have no specific prerequisites, but some advanced courses may recommend prior knowledge in related fields. Check the course descriptions for more information.",
    },
    {
      question: "Can I download the course materials for offline access?",
      answer:
        "Yes, many courses offer downloadable materials that you can access offline, allowing you to study even when you're not connected to the internet",
    },
  ];

  const aboutData = {
    achievments: {
      headTitle: "Achievments",
      headContent:
        "Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements",
      List: [
        {
          id: 0,
          IconPath:
            "M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z",
          title: "Trusted By Millions",
          mes: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
        },
        {
          id: 1,
          IconPath:
            "M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z",
          title: "Award-Winning Courses",
          mes: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
        },
        {
          id: 2,
          IconPath:
            "M74.6 373.2c41.7 36.1 108 82.5 166.1 73.7c6.1-.9 12.1-2.5 18-4.5c-9.2-12.3-17.3-24.4-24.2-35.4c-21.9-35-28.8-75.2-25.9-113.6c-20.6 4.1-39.2 13-54.7 25.4c-6.5 5.2-16.3 1.3-14.8-7c6.4-33.5 33-60.9 68.2-66.3c2.6-.4 5.3-.7 7.9-.8l19.4-131.3c2-13.8 8-32.7 25-45.9C278.2 53.2 310.5 37 363.2 32.2c-.8-.7-1.6-1.4-2.4-2.1C340.6 14.5 288.4-11.5 175.7 5.6S20.5 63 5.7 83.9C0 91.9-.8 102 .6 111.8L24.8 276.1c5.5 37.3 21.5 72.6 49.8 97.2zm87.7-219.6c4.4-3.1 10.8-2 11.8 3.3c.1 .5 .2 1.1 .3 1.6c3.2 21.8-11.6 42-33.1 45.3s-41.5-11.8-44.7-33.5c-.1-.5-.1-1.1-.2-1.6c-.6-5.4 5.2-8.4 10.3-6.7c9 3 18.8 3.9 28.7 2.4s19.1-5.3 26.8-10.8zM261.6 390c29.4 46.9 79.5 110.9 137.6 119.7s124.5-37.5 166.1-73.7c28.3-24.5 44.3-59.8 49.8-97.2l24.2-164.3c1.4-9.8 .6-19.9-5.1-27.9c-14.8-20.9-57.3-61.2-170-78.3S299.4 77.2 279.2 92.8c-7.8 6-11.5 15.4-12.9 25.2L242.1 282.3c-5.5 37.3-.4 75.8 19.6 107.7zM404.5 235.3c-7.7-5.5-16.8-9.3-26.8-10.8s-19.8-.6-28.7 2.4c-5.1 1.7-10.9-1.3-10.3-6.7c.1-.5 .1-1.1 .2-1.6c3.2-21.8 23.2-36.8 44.7-33.5s36.3 23.5 33.1 45.3c-.1 .5-.2 1.1-.3 1.6c-1 5.3-7.4 6.4-11.8 3.3zm136.2 15.5c-1 5.3-7.4 6.4-11.8 3.3c-7.7-5.5-16.8-9.3-26.8-10.8s-19.8-.6-28.7 2.4c-5.1 1.7-10.9-1.3-10.3-6.7c.1-.5 .1-1.1 .2-1.6c3.2-21.8 23.2-36.8 44.7-33.5s36.3 23.5 33.1 45.3c-.1 .5-.2 1.1-.3 1.6zM530 350.2c-19.6 44.7-66.8 72.5-116.8 64.9s-87.1-48.2-93-96.7c-1-8.3 8.9-12.1 15.2-6.7c23.9 20.8 53.6 35.3 87 40.3s66.1 .1 94.9-12.8c7.6-3.4 16 3.2 12.6 10.9z",
          title: "Positive Student Feedback",
          mes: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
        },
        {
          id: 3,
          IconPath:
            "M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z",
          title: "Industry Partnerships",
          mes: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
        },
      ],
    },
    goals: {
      headTitle: "Our Goals",
      headContent:
        "At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.Through our carefully crafted courses, we aim to",
      List: [
        {
          id: 0,
          IconPath:
            "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z",
          title: "Provide Practical Skills",
          mes: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
        },
        {
          id: 1,
          IconPath:
            "M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z",
          title: "Foster Creative Problem-Solving",
          mes: `We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.`,
        },
        {
          id: 2,
          IconPath:
            "M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z",
          title: "Promote Collaboration and Community",
          mes: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
        },
        {
          id: 3,
          IconPath:
            "M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z",
          title: "Stay Ahead of the Curve",
          mes: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
        },
      ],
    },
  };

  return (
    <DataContext.Provider
      value={{
        CoursesInfo,
        coursesDetails,
        BenefitsData,
        testimonialsData,
        Monthlyplanes,
        yearlyplanes,
        questions,
        aboutData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined) return;
  return context;
}

export { DataProvider, useData };

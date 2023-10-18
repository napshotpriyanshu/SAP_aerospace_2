import img1 from "../assets/images/whole.jpg"
import img2 from "../assets/images/laser.jpg"
import img3 from "../assets/images/test_rig.jpg"
import img4 from "../assets/images/cfd.png"
// import img5 from "../assets/images/fire-test.gif"


const experiences = [
    {
      title: "Single set of Combustor",
      company_name: "single set",
      icon: img1,
      iconBg: "#383E56",
      // date: "March 2020 - April 2021",
      points: [
        "Injector and liner assembly of 3D printed annular combustor",
        ],
    },
    {
      title: "Laser diagnostics experiments",
      company_name: "Laser diagnostics",
      icon: img2,
      iconBg: "#E6DEDD",
      // date: "Jan 2021 - Feb 2022",
      points: [
        "Flow patterns and spray characteristics are captured using Particle Image Velocimetry.",
      ],
    },
    {
      title: "Extensive Simulations",
      company_name: "Extensive Simulations",
      icon: img4,
      iconBg: "#383E56",
      // date: "Jan 2022 - Jan 2023",
      points: [
        // "",
       ],
    },
    // {
    //   title: "Atmospheric hot firing test",
    //   // company_name: "Meta",
    //   // icon: img5,
    //   iconBg: "#E6DEDD",
    //   // date: "Jan 2023 - Present",
    //   points: [
    //     "Atmospheric hot firing test of single set of combustor",
    //    ],
    // },

    {
      title: "Realistic engine testing facilities",
      // company_name: "Meta",
      icon: img3,
      iconBg: "#E6DEDD",
      // date: "Jan 2023 - Present",
      points: [
        // "Atmospheric hot firing test of single set of combustor",
       ],
    },
  ];


  const GalleryData = [
    {
        id:1,
        titile:"cfd",
        // image:"../assets/images/gallery/CFD/1.png"
    },
    {
        id:2,
        titile:"firing",
        // image:"../assets/images/gallery/firing/1.png"
    },
    {
        id:3,
        titile:"injector",
        // image:"../assets/images/gallery/firing/1.png"
    },
    {
        id:4,
        titile:"laser",
        image:img3
    },
    {
        id:5,
        titile:"test",
        image:img4
    },
  //   {
  //     id:6,
  //     titile:"test",
  //     image:img5
  // },
]


  export {experiences, GalleryData};
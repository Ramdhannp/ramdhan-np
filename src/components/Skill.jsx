import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/ramdhan-np/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/ramdhan-np/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/ramdhan-np/images/next-js.png',
      label: 'Next JS',
      desc: 'React Framework'
    },
    {
      imgSrc: '/ramdhan-np/images/bootstrap-logo-shadow.png',
      label: 'Bootstrap',
      desc: 'User Interface'
    },
    {
      imgSrc: '/ramdhan-np/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/ramdhan-np/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/ramdhan-np/images/github-logo.svg',
      label: 'Github',
      desc: 'Manage Projects'
    },
    {
      imgSrc: '/ramdhan-np/images/Typescript_logo_2020.svg',
      label: 'Typescript',
      desc: 'JavaScript Superset'
    },
    {
      imgSrc: '/ramdhan-np/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/ramdhan-np/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/ramdhan-np/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/ramdhan-np/images/react-native-1.svg',
      label: 'React Native',
      desc: 'Mobile App Framework'
    }
  ];

const Skill = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.

            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) => (
                        <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} classes='reveal-up'/>
                    ))
                }
            </div>

        </div>
      </section>
    </div>
  )
}

export default Skill

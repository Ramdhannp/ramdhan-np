import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/ramdhan-np/images/website-1.png',
      title: 'Top UP Game Web',
      tags: ['MERN Stack', 'Development'],
      projectLink: 'https://gamestore-l3oywhkbw-ramdhannps-projects.vercel.app/'
    },
    {
      imgSrc: '/ramdhan-np/images/website-2.png',
      title: 'Monitoring Dashboard',
      tags: ['React', 'Intership'],
      projectLink: 'https://ramdhannp.github.io/dashboard-monitoring-kerja-praktik/'
    },
    {
      imgSrc: '/ramdhan-np/images/website-3.jpg',
      title: 'My Old Web Potrolofio',
      tags: ['Next JS', 'Web Portofolio'],
      projectLink: 'https://ramdhan-portofolio.vercel.app/'
    }
];  

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portofolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {
                    works.map(({imgSrc, title, tags, projectLink}, key) => (
                        <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes='reveal-up'/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work

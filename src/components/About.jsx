const aboutItems = [
    // {
    //   label: 'Project done',
    //   number: 3
    // },
    // {
    //   label: 'Years of experience',
    //   number: 0
    // }
  ];

const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[70ch] reveal-up">
                I am ready to work as a Front-End Web Developer skilled in using React and Next.js to build modern, responsive web applications. I have the ability to work independently or as part of a team.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img src="/ramdhan-np/images/logo.jpeg" alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px] rounded-lg" />
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default About
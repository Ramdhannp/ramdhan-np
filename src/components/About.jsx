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
                I am ready to work as a Software Developer with expertise in the JavaScript ecosystem, able to work individually or collaborate with a team, work efficiently. I have internship experience as a Front-End Web Developer. I am a fast learner, stay up to date with technological developments, and have a strong curiosity. I am continuously seeking knowledge to grow and develop my skills in the IT field.
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

import { ButtonPrimary, ButtonOutline } from "./Button"

// React Module
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section
        id="home"
        className="pt-28 lg:pt-36"
    >
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img
                        src="/images/avatar.jpeg"
                        width={40}
                        height={40}
                        alt="Ramdhan Nugraha Pratama"
                        className="img-cover"
                        />
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2 className="text-intro mt-6">
                    <span id="typed-strings" className="text-4xl mb-1 block">
                        <Typewriter
                        options={{
                            strings: ['Hallo,', 'こんにちは,',"Hi,", '안녕하시네요,', 'مرحبا,'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </span> 
                    <span>
                        I am <span className="text-sky-300">Ramdhan
                    </span> 
                    </span>
                </h2>
                <h2 className="headline-1 max-w-[25ch] sm:max-w-[30ch] lg:max-w-[25ch] mt-4 mb-8 lg:mb-10">
                    Building Scalable Modern Websites for the Future
                </h2>

                <div className="flex items-center gap-3">
                    <ButtonPrimary label="Download CV" icon="download"/>
                    <ButtonOutline href='#about' label='Scroll down' icon='arrow_downward'/>
                </div>
            </div>
            <div className="hidden lg:block">
                <figure className="w-full max-w-[400px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-60% rounded-[60px] overflow-hidden">
                    <img src="/images/hero-banner.png" width={656} height={800} alt="Ramdhan Nugraha Pratama" className="w-full" />
                </figure>
            </div>
        </div>
      
    </section>
  )
}

export default Hero

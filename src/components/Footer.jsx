import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Projects',
      href: '#work'
    },
    // {
    //   label: 'Certificate',
    //   href: '#reviews'
    // },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Ramdhannp'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ramdhannp/'
    },

    {
      label: 'Instagram',
      href: 'https://www.instagram.com/ramdhannp'
    }
  ];

const Footer = () => {
  return (
    <div>
      <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">

                <div className="mb-10">
                    <h2 className="footer-line mb-8 lg:max-w-[12ch] reveal-up">
                        Let&apos;s work together today!
                    </h2>
                    <ButtonPrimary 
                        href='mailto:ramdhannp6@gmail.com'
                        label='start project'
                        icon='chevron_right'
                        classes='reveal-up'
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="reveal-up">Sitemap</p>
                        <ul>
                            {sitemap.map(({label, href}, key) => (
                                <li key={key}>
                                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>
                        <ul>
                            {socials.map(({label, href}, key) => (
                                <li key={key}>
                                    <a href={href} 
                                    target="_blank"
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            <div className="flex items-cemmter justify-between pt-10 mb-8 reveal-up">
                <a href="" className="">
                    <img src="/ramdhan-np/images/logo.jpeg" alt="logo" 
                    width={40}
                    height={40}
                    className="rounded-lg"
                    />
                </a>
                <p className="text-zinc-500 text-sm">
                    &copy; 2024 <span className="text-zinc-200">
                        ramdhannp
                    </span>
                </p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
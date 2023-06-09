import Link from "next/link"
import Image from 'next/image'
import mypic from '../assets/ece_icon.png'
import Login from './Login'
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme == 'dark') {
      return <MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme('light')} />
    } else {
      return <SunIcon className="w-7 h-7" role="button" onClick={() => setTheme('dark')} />
    }
  }

  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact Us", link: "/contact" },
  ]

  return <div>
    < nav className="md:flex md:items-center md:justify-between mx-auto py-3 md:px-8 px-2 bg-bleu dark:bg-gray-800" >
      < div className="flex items-center " >
        < Image src={mypic}
          width="100px"
          height="50px"
          alt="my-blog"
        />
        <span>
          {renderThemeChanger()}
        </span>
      </div >
      <ul className=" items-center md:space-x-20 md:flex dark:text-white">
        {
          Links.map((items) => (
            <div key={items.name}>
              <li>
                <h3 className="text-white rounded hover:text-black text-l"><Link href={items.link}>{items.name}</Link></h3>
              </li>
            </div>
          ))
        }
        <Login />
      </ul>
    </nav>
  </div>
}

export default Navbar

/* eslint-disable @next/next/no-img-element */
import { MainHost, Navs } from './constants'
import React from 'react'
import MobileMenu from './MobileMenu'
import Logo from '@/components/Logo'

const Header = ({ currentNav }) => {
  return (
    <header>
      <a
        className="h-12 flex items-center justify-center font-semibold"
        style={{
          background: 'linear-gradient(to right, rgb(198, 107, 255) 0%, rgb(245, 236, 254) 40%, rgb(255, 235, 59) 100%)'
        }}
        href="https://waytoagi.feishu.cn/wiki/QPe5w5g7UisbEkkow8XcDmOpn8e"
        target="_blank"
        rel="noreferrer"
      >直达「 通往AGI之路 」飞书知识库 →</a>
      <div className="bg-white mx-auto py-2.5 px-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href={MainHost} className="mr-3">
            {/* <img */}
            {/*   src="/logo-header.png" */}
            {/*   className="mr-3 h-8" */}
            {/*   alt="Flowbite React Logo" */}
            {/* /> */}
            <Logo class="h-14" />
          </a>

          <ul className="hidden md:flex gap-8 items-center ml-20">
            {Navs.map(nav => (
              <li key={nav.href}>
                <a
                  href={nav.href}
                  className={`flex items-center gap-1 text-base md:hover:text-primary-600 ${
                    nav.className || ''
                  } ${currentNav === nav.href ? 'md:text-primary-500' : ''}`}
                  // target={nav.href.startsWith("http") ? "_blank" : "_self"}
                >
                  {nav.name}
                  {/* {nav.href.startsWith("http") && (
                    <svg
                      width="13.5"
                      height="13.5"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"
                    >
                      <path
                        fill="currentColor"
                        d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                      ></path>
                    </svg>
                  )} */}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="hidden md:block"> */}
        {/*   <AgiButton /> */}
        {/* </div> */}
        <MobileMenu />
      </div>
    </header>
  )
}

export default React.memo(Header)

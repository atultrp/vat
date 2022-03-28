import React from 'react'
import { useState } from 'react'

const Header = () => {

  const [hamMenu, setHamMenu] = useState("hidden");

  const handleClickHamMenu = () => {
    hamMenu == "hidden" ? setHamMenu("block") : setHamMenu("hidden");
  }

  return (
    <>
      {/* <nav className="flex uppercase items-center justify-between lg:px-20 lg:py-5 shadow-lg">
                <div>
                    <h2 className='text-4xl font-bold custom-font'>Vat{">"}</h2>
                </div>
                <ul className='flex lg:space-x-8 '>
                    <li className=''>
                        <a href="#ico">
                            What is ICO
                        </a>
                    </li>
                    <li className=''>
                        <a href="#tokens">
                            Tokens
                        </a>
                    </li>
                    <li className=''>
                        <a href="#stake">
                            Stake
                        </a>
                    </li>
                    <li className=''>
                        <a href="#airdrop">
                            Airdrop
                        </a>
                    </li>
                    <li className=''>
                        <a href="#nft">
                            NFT
                        </a>
                    </li>
                    <li className=''>
                        <a href="#nftAirdrop">
                            NFT Airdrop
                        </a>
                    </li>
                    <li className=''>
                        <a href="#nftStake">
                            NFT Stake
                        </a>
                    </li>
                </ul>
            </nav> */}


      <nav class="bg-white shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">

              <a href="#" class="flex items-center py-4 px-2">
                {/* <img src="images/devwares-logo.png" alt="Logo" class="h-8 w-8 mr-2"/> */}
                <span class="font-semibold text-gray-500 text-lg">
                  Navigation
                </span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <a href="#"
                class="py-4 px-2 text-gray-500 border-b-4 border-purple-500 font-semibold">
                Home
              </a>
              <a href="#"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">
                Services
              </a>
              <a href="#"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">
                About
              </a>
              <a href="#"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">
                Contact Us
              </a>
            </div>

            <div class={`md:${hamMenu} flex items-center`} onClick={handleClickHamMenu}>
              <button class="outline-none menu-button">
                <svg class="w-6 h-6 text-gray-500" x-show="! showMenu" fill="none" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="2" viewBox="0 00 24 24" stroke="currentColor"><path d="m4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <div class="hidden mobile-menu">
              <ul class="">
                <li class="active">
                  <a href="nav.html"
                    class="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services"
                    class="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#About"
                    class="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#Contact Us"
                    class="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300">
                    Contact Us
                  </a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
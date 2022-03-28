import { useState } from 'react'

function NavLink({ to, children }) {
	return <a href={to} className={`px-4 uppercase py-2 hover:rounded-md hover:bg-gray-200 hover:duration-300`}>
		{children}
	</a>
}

function MobileNav({ open, setOpen }) {
	return (
		<div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
			<div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
				<a className="text-2xl font-semibold custom-font uppercase" href="/">Vat{">"}</a>
			</div>
			<div className="flex flex-col ml-4 uppercase">
				<a className="text-xl font-medium my-4" href="#ico" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
					What is ICO
				</a>
				<a className="text-xl font-normal my-4" href="#tokens" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
					Tokens
				</a>
				<a className="text-xl font-medium my-4" href="#stake" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
					Stake
				</a>
				<a className="text-xl font-normal my-4" href="#airdrop" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
					Airdrop
				</a>
				<a className="text-xl font-medium my-4" href="#nft" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
					NFT
				</a>
				<a className="text-xl font-normal my-4" href="#nftAirdrop" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
					NFT Airdrop
				</a>
				<a className="text-xl font-normal my-4" href="#nftStake" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
					NFT Stake
				</a>
			</div>
		</div>
	)
}

export default function Navbar() {

	const [open, setOpen] = useState(false)
	return (
		<nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
			<MobileNav open={open} setOpen={setOpen} />
			<div className="w-3/12 flex items-center">
				<a className="text-3xl font-semibold custom-font uppercase" href="/">Vat{">"}</a>
			</div>
			<div className="w-9/12 flex justify-end items-center">

				<div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
					setOpen(!open)
				}}>
					{/* hamburger button */}
					<span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
					<span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
					<span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
				</div>

				<div className="hidden md:flex">
					<NavLink to="#ico">
						What is ICO
					</NavLink>
					<NavLink to="#tokens">
						Tokens
					</NavLink>
					<NavLink to="#stake">
						Stake
					</NavLink>
					<NavLink to="#airdrop">
						Airdrop
					</NavLink>
					<NavLink to="#nft">
						NFT
					</NavLink>
					<NavLink to="#nftAirdrop">
						NFT Airdrop
					</NavLink>
					<NavLink to="#nftStake">
						NFT Stake
					</NavLink>
				</div>
			</div>
		</nav>
	)
}
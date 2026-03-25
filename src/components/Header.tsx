import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {PLANETS} from '../constants/planets';
import {PLANETS_BG_COLORS} from '../constants/planets-styles';
import ChevronIcon from '../assets/icon-chevron.svg';
import BurgerIcon from '../assets/icon-hamburger.svg';

export default function Header() {
	const [headerHeight, setHeaderHeight] = useState<number>(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	const onLinkClick = () => {
		if (isMobileMenuOpen) setIsMobileMenuOpen(false);
	};

	return (
		<header className='z-50'>
			<nav
				aria-label='Main Planet Navigation'
				className='flex flex-row md:flex-col lg:flex-row justify-between items-center gap-8 px-6 md:px-10 py-4 lg:px-8 md:py-8 lg:py-6 border-b border-b-neutral-0/20'
				ref={headerRef}>
				<strong className='text-preset-4 text-neutral-0'>THE PLANETS</strong>
				<ul className='hidden md:flex flex-row gap-10 items-center'>
					{PLANETS.map((planet) => (
						<li key={planet.id} className='relative group'>
							<Link
								to={`/${planet.id}`}
								className='text-preset-10-bold text-neutral-0 uppercase opacity-75'>
								{planet.name}
							</Link>
							<span
								className={`absolute left-0 right-0 -top-7 h-1 ${PLANETS_BG_COLORS[planet.id]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
							/>
						</li>
					))}
				</ul>
				<button
					className='md:hidden'
					onClick={toggleMobileMenu}
					aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
					<img src={BurgerIcon} alt='Burger icon' />
				</button>
				<ul
					className='absolute inset-x-0 bottom-0 flex flex-col py-11 bg-navy-950'
					style={{top: headerHeight, display: isMobileMenuOpen ? 'flex' : 'none'}}>
					{PLANETS.map((planet, index) => (
						<>
							<li
								key={planet.id}
								className='flex flex-row items-center gap-6 px-6 py-5 hover:bg-neutral-400/20'>
								<div
									className={`w-5 h-5 rounded-full ${PLANETS_BG_COLORS[planet.id]}`}
								/>
								<Link
									to={`/${planet.id}`}
									className='text-preset-7 text-neutral-0 uppercase flex-1'
									onClick={onLinkClick}>
									{planet.name}
								</Link>
								<img src={ChevronIcon} alt='Chevron icon' />
							</li>
							{index < PLANETS.length - 1 && (
								<div className='w-full h-px bg-neutral-0/10' />
							)}
						</>
					))}
				</ul>
			</nav>
		</header>
	);
}

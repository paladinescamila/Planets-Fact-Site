import MercuryOverview from '../assets/planet-mercury.svg';
import MercuryStructure from '../assets/planet-mercury-internal.svg';
import MercuryGeology from '../assets/geology-mercury.png';

import VenusOverview from '../assets/planet-venus.svg';
import VenusStructure from '../assets/planet-venus-internal.svg';
import VenusGeology from '../assets/geology-venus.png';

import EarthOverview from '../assets/planet-earth.svg';
import EarthStructure from '../assets/planet-earth-internal.svg';
import EarthGeology from '../assets/geology-earth.png';

import MarsOverview from '../assets/planet-mars.svg';
import MarsStructure from '../assets/planet-mars-internal.svg';
import MarsGeology from '../assets/geology-mars.png';

import JupiterOverview from '../assets/planet-jupiter.svg';
import JupiterStructure from '../assets/planet-jupiter-internal.svg';
import JupiterGeology from '../assets/geology-jupiter.png';

import SaturnOverview from '../assets/planet-saturn.svg';
import SaturnStructure from '../assets/planet-saturn-internal.svg';
import SaturnGeology from '../assets/geology-saturn.png';

import UranusOverview from '../assets/planet-uranus.svg';
import UranusStructure from '../assets/planet-uranus-internal.svg';
import UranusGeology from '../assets/geology-uranus.png';

import NeptuneOverview from '../assets/planet-neptune.svg';
import NeptuneStructure from '../assets/planet-neptune-internal.svg';
import NeptuneGeology from '../assets/geology-neptune.png';

export const PLANETS_IMAGES: Record<
	PlanetID,
	{overview: string; structure: string; geology: string}
> = {
	mercury: {overview: MercuryOverview, structure: MercuryStructure, geology: MercuryGeology},
	venus: {overview: VenusOverview, structure: VenusStructure, geology: VenusGeology},
	earth: {overview: EarthOverview, structure: EarthStructure, geology: EarthGeology},
	mars: {overview: MarsOverview, structure: MarsStructure, geology: MarsGeology},
	jupiter: {overview: JupiterOverview, structure: JupiterStructure, geology: JupiterGeology},
	saturn: {overview: SaturnOverview, structure: SaturnStructure, geology: SaturnGeology},
	uranus: {overview: UranusOverview, structure: UranusStructure, geology: UranusGeology},
	neptune: {overview: NeptuneOverview, structure: NeptuneStructure, geology: NeptuneGeology},
};

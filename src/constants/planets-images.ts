import MercuryOverview from '../assets/img/planet-mercury.svg';
import MercuryStructure from '../assets/img/planet-mercury-internal.svg';
import MercuryGeology from '../assets/img/geology-mercury.png';

import VenusOverview from '../assets/img/planet-venus.svg';
import VenusStructure from '../assets/img/planet-venus-internal.svg';
import VenusGeology from '../assets/img/geology-venus.png';

import EarthOverview from '../assets/img/planet-earth.svg';
import EarthStructure from '../assets/img/planet-earth-internal.svg';
import EarthGeology from '../assets/img/geology-earth.png';

import MarsOverview from '../assets/img/planet-mars.svg';
import MarsStructure from '../assets/img/planet-mars-internal.svg';
import MarsGeology from '../assets/img/geology-mars.png';

import JupiterOverview from '../assets/img/planet-jupiter.svg';
import JupiterStructure from '../assets/img/planet-jupiter-internal.svg';
import JupiterGeology from '../assets/img/geology-jupiter.png';

import SaturnOverview from '../assets/img/planet-saturn.svg';
import SaturnStructure from '../assets/img/planet-saturn-internal.svg';
import SaturnGeology from '../assets/img/geology-saturn.png';

import UranusOverview from '../assets/img/planet-uranus.svg';
import UranusStructure from '../assets/img/planet-uranus-internal.svg';
import UranusGeology from '../assets/img/geology-uranus.png';

import NeptuneOverview from '../assets/img/planet-neptune.svg';
import NeptuneStructure from '../assets/img/planet-neptune-internal.svg';
import NeptuneGeology from '../assets/img/geology-neptune.png';

export const PLANETS_IMAGES: Record<PlanetID, ModesMap<string>> = {
	mercury: {overview: MercuryOverview, structure: MercuryStructure, geology: MercuryGeology},
	venus: {overview: VenusOverview, structure: VenusStructure, geology: VenusGeology},
	earth: {overview: EarthOverview, structure: EarthStructure, geology: EarthGeology},
	mars: {overview: MarsOverview, structure: MarsStructure, geology: MarsGeology},
	jupiter: {overview: JupiterOverview, structure: JupiterStructure, geology: JupiterGeology},
	saturn: {overview: SaturnOverview, structure: SaturnStructure, geology: SaturnGeology},
	uranus: {overview: UranusOverview, structure: UranusStructure, geology: UranusGeology},
	neptune: {overview: NeptuneOverview, structure: NeptuneStructure, geology: NeptuneGeology},
};

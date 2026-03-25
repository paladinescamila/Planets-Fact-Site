type Mode = 'overview' | 'structure' | 'geology';

type ModesMap<T> = {[K in Mode]: T};

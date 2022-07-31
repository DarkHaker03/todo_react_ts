import { Event, Store } from "effector";

export const mountLocalStorageEffecttor = (state: Store<any>, name: string, setState: Event<any>) => {
	const stateData = state.getState()

	if (localStorage.getItem(name) === null) {
		localStorage.setItem(name, JSON.stringify(stateData));
	} else {
		setState(JSON.parse(localStorage.getItem(name) || ''));
	}

}
import { Event, Store } from "effector";
import { mountLocalStorage } from "./mountLocalStorage";

export const mountLocalStorageEffecttor = (state: Store<any>, name: string, setState: Event<any>) => {

	const stateData = state.getState()

	mountLocalStorage(stateData, name, setState)

}
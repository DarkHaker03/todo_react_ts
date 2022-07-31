export const mountLocalStorage = (state: any, name: string, setState: any) => {

	if (localStorage.getItem(name) === null) {
		localStorage.setItem(name, JSON.stringify(state));
	} else {
		setState(JSON.parse(localStorage.getItem(name) || ''));
	}

}
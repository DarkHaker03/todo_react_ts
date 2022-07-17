import { useCallback, useState } from 'react';

export const useSelect = () => {
	const [selectedOption, setSelectedOption] = useState<string[]>([]);
	const onChangeSelectedOption = useCallback((value: string) => {
		if (!selectedOption.some(x => x === value))
			setSelectedOption([...selectedOption, value]);
		else setSelectedOption(selectedOption.filter(x => x !== value));
	}, [selectedOption]);
	return [selectedOption, setSelectedOption, onChangeSelectedOption] as const
}
import { forward } from "effector";
import { $selectedItemId, selectItemId } from "..";

$selectedItemId
	.on(selectItemId, (_, newState) => newState)


// forward({
// 	from: selectItemId,
// 	to: $selectedItemId
// })
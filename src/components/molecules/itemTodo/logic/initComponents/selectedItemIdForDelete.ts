import { $selectedItemIdForDelete, selectItemForDelete } from "..";

$selectedItemIdForDelete
	.on(selectItemForDelete, (_, state) => state)
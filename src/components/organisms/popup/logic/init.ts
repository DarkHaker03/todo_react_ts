import { $confirm, setConfirm } from ".";

$confirm
	.on(setConfirm, (_, state) => state)

import { observable } from 'mobx';

const store = observable({
	blocks: [],
});

export function blocks() {
	return store.blocks;
}
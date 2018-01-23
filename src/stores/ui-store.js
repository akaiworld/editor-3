import { observable } from 'mobx';

const store = observable({
	layout: '',
});

export function layout(state){
	if(state !== undefined){
		store.layout = state;
	}
	return store.layout;
}
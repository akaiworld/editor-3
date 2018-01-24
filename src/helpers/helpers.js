
// mixins.reverse() -> right overrids left
// first from left is super
export function Mixins(...mixins) {
	return mixins.reverse().reduce((c, mixin) => mixin(c), class EmptySuperClass { });
}
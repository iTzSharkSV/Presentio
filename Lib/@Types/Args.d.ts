/**
 * All possible return values of Argo
 * @example
 * ```ts
 * import Argo from '...'
 * ---------
 * Argo().help && console.log('help');
 * ```
 */
interface iArgs {
	help: boolean;
	version: boolean;
}

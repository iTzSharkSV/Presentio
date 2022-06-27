import '../Modules/Clrs';

/**
 * Handle errors globally
 * @param {Error} err
 * @example
 * ```ts
 * import handleErrors from '...'
 * ---------
 * process.on('uncaughtException', (err) => {
 *   handleErrors(err);
 * });
 * ```
 */
function handleErrors(err: Error): void {
	// prettier-ignore
	console.log(
        '\n %s\n\n %s', 
        ' ERROR '.paint('black', 'red'), 
        err.message
    );
}

export { handleErrors as default };

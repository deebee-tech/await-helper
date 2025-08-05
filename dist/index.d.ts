/** Encapsulating class for all await-helpers.  All methods
 * below this are static so there does not need to be any
 * references to constructors.  This class is meant to be
 * used as a utility class for all helper methods dealing with
 * async-await.  This class is not meant to be instantiated.
 */
declare class AwaitHelper {
    /** Backport an "async-await-style" to promise-style.  This is useful
     * for async calls that tend to swallow errors and get lost in the
     * promise chain.  This method will throw the error if there is one.
     */
    static execute: <T>(promise: Promise<T>) => Promise<T>;
    /** Execute a promise with retry logic.  This will retry the promise
     * up to maxRetries times, waiting interval milliseconds between retries.
     * If the promise resolves, it returns the resolved value. If it fails
     * after all retries, it throws the last error.
     */
    static executeWithRetry: <T>(promise: Promise<T>, currentRetryCount?: number, maxRetries?: number, interval?: number) => Promise<T>;
    /** Sleep for a specified number of milliseconds.
     */
    private static sleep;
}

export { AwaitHelper as default };

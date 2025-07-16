/** Encapsulating class for all await-helpers.  All methods
 * below this are static so there does not need to be any
 * references to constructors.  This class is meant to be
 * used as a utility class for all helper methods dealing with
 * async-await.  This class is not meant to be instantiated.
 */
export default class AwaitHelper {
   /** Backport an "async-await-style" to promise-style.  This is useful
    * for async calls that tend to swallow errors and get lost in the
    * promise chain.  This method will throw the error if there is one.
    */
   // deno-lint-ignore require-await
   public static execute = async <T>(promise: Promise<T>): Promise<T> => {
      return promise
         .then<T>((data: T) => data)
         .catch((error: Error) => {
            throw error;
         });
   };
}

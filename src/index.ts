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
   public static execute = async <T>(promise: Promise<T>): Promise<T> => {
      return promise
         .then<T>((data: T) => data)
         .catch((error: Error) => {
            throw error;
         });
   };

   /** Execute a promise with retry logic.  This will retry the promise
    * up to maxRetries times, waiting interval milliseconds between retries.
    * If the promise resolves, it returns the resolved value. If it fails
    * after all retries, it throws the last error.
    */
   public static executeWithRetry = async <T>(
      promise: Promise<T>,
      currentRetryCount?: number,
      maxRetries?: number,
      interval?: number,
   ): Promise<T> => {
      if (!currentRetryCount || typeof currentRetryCount !== "number") {
         currentRetryCount = 0; // Default current retry count
      }

      if (!maxRetries || typeof maxRetries !== "number") {
         maxRetries = 3; // Default retry count
      }

      if (!interval || typeof interval !== "number") {
         interval = 1000; // Default retry interval
      }

      let retries = currentRetryCount;

      return promise
         .then<T>((data: T) => data)
         .catch(async (error: Error) => {
            if (retries < maxRetries) {
               retries++;
               await AwaitHelper.sleep(interval);
               return AwaitHelper.executeWithRetry<T>(promise, retries, maxRetries, interval);
            } else {
               throw error;
            }
         });
   };

   /** Sleep for a specified number of milliseconds.
    */
   private static sleep = async (ms: number) => {
      return new Promise((resolve) => {
         setTimeout(resolve, ms);
      });
   };
}

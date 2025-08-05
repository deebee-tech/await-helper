var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const _AwaitHelper = class _AwaitHelper {
};
/** Backport an "async-await-style" to promise-style.  This is useful
 * for async calls that tend to swallow errors and get lost in the
 * promise chain.  This method will throw the error if there is one.
 */
__publicField(_AwaitHelper, "execute", async (promise) => {
  return promise.then((data) => data).catch((error) => {
    throw error;
  });
});
/** Execute a promise with retry logic.  This will retry the promise
 * up to maxRetries times, waiting interval milliseconds between retries.
 * If the promise resolves, it returns the resolved value. If it fails
 * after all retries, it throws the last error.
 */
__publicField(_AwaitHelper, "executeWithRetry", async (promise, currentRetryCount, maxRetries, interval) => {
  if (!currentRetryCount || typeof currentRetryCount !== "number") {
    currentRetryCount = 0;
  }
  if (!maxRetries || typeof maxRetries !== "number") {
    maxRetries = 3;
  }
  if (!interval || typeof interval !== "number") {
    interval = 1e3;
  }
  let retries = currentRetryCount;
  return promise.then((data) => data).catch(async (error) => {
    if (retries < maxRetries) {
      retries++;
      await _AwaitHelper.sleep(interval);
      return _AwaitHelper.executeWithRetry(promise, retries, maxRetries, interval);
    } else {
      throw error;
    }
  });
});
/** Sleep for a specified number of milliseconds.  This is useful
 * for delaying execution in async-await code.
 */
__publicField(_AwaitHelper, "sleep", async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
});
let AwaitHelper = _AwaitHelper;

export { AwaitHelper as default };
//# sourceMappingURL=index.js.map

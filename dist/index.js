var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
class AwaitHelper {
}
/** Backport an "async-await-style" to promise-style.  This is useful
 * for async calls that tend to swallow errors and get lost in the
 * promise chain.  This method will throw the error if there is one.
 */
// deno-lint-ignore require-await
__publicField(AwaitHelper, "execute", async (promise) => {
  return promise.then((data) => data).catch((error) => {
    throw error;
  });
});

export { AwaitHelper as default };
//# sourceMappingURL=index.js.map

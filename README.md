# Await Helper

This is a collection of static helpers that encapsulate anything to do with
async-await.

For example...the "execute" method is useful when dealing with an async call
that has the tendency to swallow errors and the errors get lost in the promise
chain:

```typescript
const value: string = await promiseMethod();
```

The await-helper provides the functionality:

```typescript
import AwaitHelper from "@deebeetech/await-helper";

const value: string = await AwaitHelper.execute<string>(promiseMethod());
```

This will convert the async-await into a promise in order to capture any
potential errors thrown by the original method.

For a full list of functions, see the [jsr.io documentation](https://jsr.io/@deebeetech/await-helper/doc/~/AwaitHelper)

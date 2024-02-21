# NetlifyFormQuery

Collection of backend helper functions to make querying Netlify Forms easier.

Basic Example:

```
const formId: string = <FormID>;
const apiToken: string = <ApiToken>;

const myFunc = async () => {
    const formQuery = new NetlifyFormQuery(apiToken, formId);
    const res = await formQuery.getSubmissions();
    console.log(res);
}
```

Licensed by GPL-3.0

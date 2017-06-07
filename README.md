# query-string-params
Creates a url with query params and creates and object/list of params using the URL.

## Install
$ npm i --save query-string-params

## Usage
```
import {propertyToUrl, urlToProperty, urlToList} 
from "query-string-params";

console.log(location.search);

/* '?foo=xyz&bar=abc' */

const parsed = urlToProperty(location.search);

console.log(parsed);

/* {{foo: [xyz]}, {bar: [abc]}} */

parsed.foo = [xyz];

parsed.fruits = [abc];
```
## API
#### .urlToProperty(string)
Parses a query string into an object and location.search can be passed directly.

The returned object is inherits from Object.prototype.

Extract a query string from a URL that can be passed into the function and 
returns an object in the form of properties with corresponding array values.

For example,  
```
/* '?foo=bar&fruits=apple' */

const parsed = urlToProperty(location.search);

console.log(parsed);

/* {{foo: [bar]}, {fruits: [apple]}} */

parsed.foo = [bar];

parsed.fruits = [apple];

```
#### .propertyToUrl(properties)

Converts an object with properties into a string URL which can be passed to 
the history API using push/replace or using Link, Redirect etc.
The returned object is of type string.

For example,  
```
/* {{foo:[abc, xyz]}, {bar: [xxx, yyy]}} */

const parsed = propertyToUrl(location.search);

console.log(parsed);

/* 'foo=abc,xyz&bar=xxx,yyy' */

```

#### .urlToList(string)
Parses a query string into an object and location.search can be passed directly.

Extract a query string from a URL that can be passed into the function and 
returns an array in the form of properties with corresponding array values.

For example,  
```
/* '?foo=xyz&bar=abc' */

const parsed = urlToArray(location.search);

console.log(parsed);

/* [{foo: [xyz]}, {bar: [abc]}] */

parsed[0] = {foo: [xyz];

parsed[1] = {fruits: [abc]};

```
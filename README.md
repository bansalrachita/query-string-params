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
```
For example,  

/* location.search = 'foo=bar&fruits=apple' */

const property = urlToProperty(location.search);

console.log(property);

/* {{foo: [xyz]}, {bar: [abc]}} */

property.foo = [xyz];

property.bar = [abc];

```

#### .urlToList(string)
Parses a query string into an object and location.search can be passed directly.

Extract a query string from a URL that can be passed into the function and 
returns an array in the form of properties with corresponding array values.
```
For example,  

/* location.search = '?foo=xyz&bar=abc' */

const list = urlToArray(location.search);

console.log(list);

/* [{foo: [xyz]}, {bar: [abc]}] */

list[0] = {foo: [xyz];

list[1] = {bar: [abc]};

```
#### .propertyToUrl(properties)

Converts an object with properties into a string URL which can be passed to 
the history API using push/replace or using Link, Redirect etc.
The returned object is of type string.
```
For example,  

/* {{foo:[abc, xyz]}, {bar: [xxx, yyy]}} */

let queryString = propertyToUrl(location.search);

queryString += "?" + propertyToUrl(params);

console.log(queryString);

/* 'foo=abc,xyz&bar=xxx,yyy' */

```

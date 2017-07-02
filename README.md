# query-string-params
This is a utility for developers using React Router 4 for developing 
their web application. React Router 4 provides a prop called location same as
found in the hisotry API which has a property called search. It's a string 
parameter and gets a value when the URL gets attached with query parameters. 
This property is useful to code your URL logic and allows for custom URL 
with query params. This utility creates a URL with query parameters 
separated by ampersand. It can convert the URL in an object/list of values 
from query string. It allows you to pass "&" in query params and encodes 
alphanumeric special character with escape character (URI 
encoding UTF-8).

## Install
```
$ npm i --save query-string-params

```

## Usage
```
import {propertyToUrl, urlToProperty, urlToList} 
from "query-string-params";

console.log(location.search); /* '?foo=xyz&bar=abc' */

const parsed = urlToProperty(location.search);

console.log(parsed); /* {{foo: [xyz]}, {bar: [abc]}} */

console.log(parsed.foo) /* [xyz] */;

console.log(parsed.bar) /* [abc] */;

```
## API

#### .urlToProperty(string)
Parses a query string into an object and location.search can be passed directly.
Returned object is inherits from Object.prototype.
Extract a query string from a URL that can be passed into the function and 
returns an object in the form of properties with corresponding array values.
```
For example,  

/* location.search = 'foo=xyz&bar=abc' */

const property = urlToProperty(location.search);

console.log(property); /* {{foo: [xyz]}, {bar: [abc]}} */

 console.log(property.foo) /* [xyz] */;

console.log(property.bar) /* [abc] */;

```

#### .urlToList(string)
Parses a query string into an object and location.search can be passed directly.
Extract a query string from a URL that can be passed into the function and 
returns an array in the form of properties with corresponding array values.
```
For example,  

/* location.search = '?foo=xyz&bar=abc' */

const list = urlToArray(location.search);

console.log(list); /* [{foo: [xyz]}, {bar: [abc]}] */

console.log(list[0]) /* {foo: [xyz] */;

console.log(list[1]) /* {bar: [abc]} */;

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

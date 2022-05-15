---
title: How to get the zero value in Go
date: '2022-05-15T00:00:00.000Z'
description: Getting the zero value in Go can be useful and the generics feature makes it easy.
tech: ['go', 'generics', 'reflect']
---

Getting the zero value in Go is useful especially when validating if some data is empty.

Previously this could only be done with the `reflect` package but with the introduction of generics in Go `1.18` this can be done with a simple function which takes a type argument and creates a zero value of that type.

```js
package main

import "fmt"

func zero[T any]() T {
	var zero T
	return zero
}

func main() {
	fmt.Println(zero[int]())                    // 0
	fmt.Println(zero[[]string]())               // []
	fmt.Println(zero[struct{ name float64 }]()) // {0}
}
```

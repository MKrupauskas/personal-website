---
title: How to format time in Go
date: '2021-09-25T00:00:00.000Z'
description: Formatting time in go can be quite tricky, luckily there is a handy library called go-humanize that makes formatting time much easier.
tech: ['go', 'humanize']
---

Formatting time in go can be quite tricky, luckily there is a handy library called `go-humanize` that makes formatting time much easier.

Add the library to your project with the command below.

```sh
go install github.com/dustin/go-humanize
```

Use the library by passing a time instace to the `humanize.Time` function. The output will be a nicely formatted date string in the form of `7 {unit} ago`. See the example snippet below to learn about the usage.

```js
package main

import (
	"fmt"
	"time"

	"github.com/dustin/go-humanize"
)

func main() {
	t := time.Now()
	fmt.Println(humanize.Time(t))
}

```

# Sources

- [go package documentation](https://pkg.go.dev/github.com/dustin/go-humanize)
- [library repository](https://github.com/dustin/go-humanize)

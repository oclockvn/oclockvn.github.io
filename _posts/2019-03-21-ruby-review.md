---
title: "Ruby review"
tags: ["ruby"]
author: Quang Phan
description: ruby sum up
---

### Ruby REPL Read-Eval-Print-Loop

turn your cmd into ruby interactive

```
irb
```

> TIP: last executed statement was saved in `_` (underscore) variable

### Scope

<script src="https://gist.github.com/oclockvn/b07865b3f8a9ee246ad7c25d2fcb3cb0.js"></script>

### String

<script src="https://gist.github.com/oclockvn/3411abf60ec7524be712fcbd7eb315ad.js"></script>

### Symbols

> Similar to enum in .NET

```rb
sim = :a_simple
```

### Constant

```rb
CONSTANT_STARTS_WITH_UPPERCASE_LETTER = "A"
This_is_still_valid = true
```

### Array

<script src="https://gist.github.com/oclockvn/411eb24c6f8cb06d2d7a9662e2af2e60.js"></script>

### Regex

```rb
"Hello" =~ /e/ #=> 1 
```

### Hash

> .NET Dictionary

<script src="https://gist.github.com/oclockvn/727a0e35c9c4c65ed625987b0e007b46.js"></script>

### Methods

> method name should be in convention

<script src="https://gist.github.com/oclockvn/6c2eccf43ea055f7b5c59820b1cc4709.js"></script>

### Class

<script src="https://gist.github.com/oclockvn/7a2de1bf798fe6bb1b366e0eb4a6f09c.js"></script>

### Class accessor (attributes)

<script src="https://gist.github.com/oclockvn/0ef729c096deb48e23253c103c716260.js"></script>

### Inheritance

<script src="https://gist.github.com/oclockvn/ce2e0a78f03a0804c7a92dea559a794e.js"></script>

### Modules

> Think about namespace in .NET

<script src="https://gist.github.com/oclockvn/f147de44f4d2cfdb1d8281919ef6d1cf.js"></script>

- Module cannot be instantiated  
- Cannot inherit or be derived from  
- Can contains classes, methods, attributes and sub modules

### Conditional statement

<script src="https://gist.github.com/oclockvn/303cd734c47f873ce181829c5912aeec.js"></script>

### Loop and iterator

> built-in loop: `for`, `while` and `until`

```rb
lang = ["c#", "ruby", "js", "java"]

#for
for x in lang
  puts x
end

#while
@x = 5
while @x > 0
  @x -= 1
end

#until
until @x > 10
  @x += 1
end
```

> Iterator: `each`, `times`, `upto` and `downto`

```rb
#each
lang.each do |x|
  puts x
end

#or
lang.each { |x| puts x }

#times
3.times do |x|
  puts "#{x} time"
end
```

### Exception handling

```rb
begin
  x = 1 / 0
rescue ZeroDivisionError
  puts "Div by 0"
rescue Exception => e
  puts e.message
ensure
  puts "finally"
end

#raise exception
begin
  raise "throw an exception"
rescue
end
```

**Define custom exception**

```rb
class CustomException < StandardException
  attr_reader :msg

  def initialize(msg)
    @msg = msg
  end
end

raise CustomException.new("custom error")
```
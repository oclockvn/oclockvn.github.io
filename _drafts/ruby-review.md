---
title: "Ruby review"
tags: ["ruby"]
---

### Ruby REPL Read-Eval-Printloop

turn your cmd into ruby interactive

```
irb
```

> TIP: last executed statement was saved in `_` (underscore) variable

### Scope

```rb
class Scope

#starts with $
$global_scope = "/app" #available anywhere

#starts with @@
@@same_class_scope = 1 #available across class instances

def local_scope
  #local variable starts with lowercase or underscore _
  loval_var = 10 #only available to this method
end

def class_scope
  #class variable starts with @
  @name = 'Ruby' #available to this class
end

def set_scope(num)
  @@same_class_scope = num
end

def print_scope
  puts @@same_class_scope
end

end

s1 = Scope.new
s2 = Scope.new

s1.print_scope #=> 1
s2.set_scope(2) #all instances of Scope class will update scope

s1.print_scope #=> 2
s2.print_scope #=> 2
```

### String

```rb
s1 = "Hello"
s2 = "World"

s3 = "#{s1} Ruby #{s2}" #=> "Hello Ruby World"
s1.length #=> 5
s1[2] #=> l
s1.split 'e' #=> ["H", "llo"]

s1.downcase #=> "hello"
s1.upcase #=> "HELLO"
'hELLo'.capitalize #=> "Hello"
```

### Symbols

> Similar to enum in .NET

```rb
sim = :a_simple
```

### Array

```rb
lang = ['english', 'vietnamese', 'french', 'japanese']

#adding item
lang.push("chinese")
lang << "chinese"
lang[4] = "chinese"

#select item

res = lang.select do |l|
  l =~ /h/ #search the character 'h' in l
end

res = lang.select { |x| x =~ /h/ } #same as above

res.grep(/h/) #same as above

#=> ["english", "french"]

#delete item
lang.delete('chinese')
lang.delete_at(3)
```

### Regex

```rb
"Hello" =~ /e/ #=> 1 
```

### Hash

> .NET Dictionary

```rb
obj = Hash.new
#or
obj = {
    "old_syntax" => 'value 1',
    :old_syntax_too => "value 2",
    new_syntax: "value 3"
}

obj[:assign_sym] = 123

#get value
obj[:new_syntax] #=> "value 3"
```

### Methods

> method name should be in convention

```rb
def is_even?(val) #method name ends with `?`
  val % 2 == 0
end

def add_val!(x, y) #method name ends with `!`
  x + y #return at last statement
end

is_even? 2 #no need the `()`
a = 0;
a.add_val!(1, 2) #a = 3 (auto assign)
```

### Class

```rb
class People
  def initialize(name, age)
    @name = name
    @age = age
  end

  def say
    puts "Hello, I'm #{@name}, #{@age} yrs old"
  end

  def self.static_method #static method self.method_name
    puts "I'm static"
  end

  def to_s #override base Object class
    return "#{@name} #{@age} yrs old"
  end
end

p = People.new('dev', 18)
p.say #=> "Hello, I'm dev, 18 yrs old"
p.to_s #=> "dev 18 yrs old"
People.static_method #=> "I'm static"

```
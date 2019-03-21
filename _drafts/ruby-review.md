---
title: "Ruby review"
tags: ["ruby"]
---

### Ruby REPL Read-Eval-Print-Loop

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

### Constant

```rb
CONSTANT_STARTS_WITH_UPPERCASE_LETTER = "A"
This_is_still_valid = true
```

### Array

```rb
lang = ['english', 'vietnamese', 'french', 'japanese'] # = Array.new

lang.length #=> 4
lang.size #=> 4

lang.first #=> "english"
lang.last #=> "japanese"

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
def is_even?(val) #method name ends with `?` return boolean
  val % 2 == 0
end

def add_val(x, y)
  x + y #return at last statement
end

is_even? 2 #no need the `()`
a = add_val(1, 2) #a = 3
```

### Class

```rb
class People #class name must starts with uppercase letter
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

### Class accessor (attributes)

```rb
class Student

  def id #getter
    @id
  end

  def id=(value) #setter
    @id = value
  end
end

class Employee
  attr_accessor :id
  attr_reader :name
  attr_writer :age

  def hello
    puts "Hello I'm #{@name}" #use @
    puts "I'm #{self.age} yrs old" #use self.
  end
end
```

### Inheritance

```rb
class People
  #public by default
  def say
  end

  protected #all below are protected (until private)
  def say_child
  end

  private #all below are private
  def say_secret
  end
end

class Worker < People #inherit by < symbol
  #can invoke say and say_child
end
```

### Modules

> Think about namespace in .NET

```rb
module Worker #define a module
  def chop
    puts "timber"
  end

  class VNWorker
    
  end
end

class Engineer < Worker::VNWorker #access class inside module
  include Worker
end

en = Engineer.new
en.chop #=> "timber"
```

- Module cannot be instantiated  
- Cannot inherit or be derived from  
- Can contains classes, methods, attributes and sub modules

### Conditional statement

```rb
#if else unless
ruby_is_awesome = true

if ruby_is_awesome
  puts "Ruby is awesome"
end

puts "Ruby is awesome" if ruby_is_awesome

unless ruby_is_awesome == false
  puts "Wassup"
end

#case
lang :ruby

case lang
  when :ruby then puts "Oh well"
  when :dotnet then puts "Uhh uh"
    else puts "Nah"
end
```

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
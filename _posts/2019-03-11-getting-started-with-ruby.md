---
title: "Getting started with Ruby"
tags: ['ruby']
author: Quang Phan
description: getting started with ruby
---

### Basic data type

```rb
# Number
s = 1
s.class => Integer

# String
s = 'a string'
s2 = "#{s} interpolation"

s3 = <<-s
multiple line string
line 2
s

# BAM method
s3 = s3.upcase
s3.upcase!

# Sym
s = :simple

# Hash (Dictionary) https://ruby-doc.org/core-2.5.1/Hash.html

a = {
    :key1 => "value1",
    key2: "value2"
}

a[:key1]

# Array https://ruby-doc.org/core-2.5.1/Array.html
arr = [1, 2, 3, 4]
```

### Method

```rb
def method_name(arg1 = 'default', age:, name:)
  puts ('hello ' + arg1)
end

# call
method_name('defaualt', 18, 'dev')
```

### OOP

```rb
class People
  def base_med
  end
end

class Student < People

  A_CONSTANT = 1

  attr_accessor pub # get or set

   def initialize(a)
     @a = a # global in class
   end

   def test
     # access a
     puts 'test ' + a
   end

   def A # getter
     @a
   end   

   def a=(val:)
     @a = val
   end

   def self.kinda_static_med
   end

   # override
   def base_med
   end

   protected
   def prod_met
   end

   private
   def pri_met
   end
end

student = Student.new('John')
student.pri_met
student.send(:pri_met) # dynamic call

Student::A_CONSTANT # => 1

Student.kinda_static_med
```
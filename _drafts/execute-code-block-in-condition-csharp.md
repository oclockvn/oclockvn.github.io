### Some examples that code is executed in debug mode only

1. Execute a block of code

```cs
void SomeMethod()
{
  // normal code
  
  #if DEBUG
  // code that executes in debug only
  #endif
  
  // another normal code
}
```

2. Execute a method

```cs
void Main()
{
  Log();
}

[Conditional("DEBUG")] // this method is called in debug only
void Log()
{}
```

3. Debug method

Use `Debug` for debug output

```cs
void Log(string msg)
{
  Debug.WriteLine(msg); // write to debug output only
}
```

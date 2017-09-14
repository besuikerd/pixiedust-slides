module counter

config
  backend: PixieDust
  target: webpack

model
  entity Counter {
    value: Int = 0 (default)
  }
  
  entity Add {
    value: Int = lhs.value + rhs.value
    equation: View = span { lhs.value " + " rhs.value " = " value }
  }
  
  relation Add.lhs 1 <-> Counter.inverseLhs
  relation Add.rhs 1 <-> Counter.inverseRhs

imports
  ../../components/CodeBlock {
    component CodeBlock(language: String, code: String)
  }  
  
view
  component Counter(c: Counter) {
    action increment(by: Int) {
      c {
        value = value + by
      }
    }
    div{
      button[onClick=increment(1)] { "+" }
      span  { c.value }
      button[onClick=increment(-1)] { "-" }
    }
  }
  
  component Add(add: Add) {
    @Counter(add.lhs)
    @Counter(add.rhs)
    add.equation
  }
  
  component Main(add: Add){
    @Add(add)
    div{
      @CodeBlock("html", @Add(add) as String)
    }
  }

data
  add: Add {
    lhs = c1 {}
    rhs = c2 {}
  }  
  
execute
  @Main(add)
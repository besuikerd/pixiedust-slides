module ice

config
  backend: PixieDust
  target: webpack

model
  entity Counter {
    value: Int = 0 (default)
  }
  
  entity Add {
    value: Int = lhs.value + rhs.value
  }
  
  relation Add.lhs 1 <-> Counter.inverseLhs
  relation Add.rhs 1 <-> Counter.inverseRhs
  

imports
  pixiedust/components/native/inputs {
    component IntInput(ref value: Int)
  }
  
view
  component Counter(c: Counter) {
    action increment(by: Int) {
      c {
        value = value + by
      }
    }
  }
  
  component Add(add: Add) {
    action reset(){
      add {
        lhs { value = 0 }
        rhs { value = 0 }
      }
    }
    div {button[onClick=reset()]{ "Reset" }}
    div {@IntInput(add.lhs.value)  "+" } 
    div {@IntInput(add.rhs.value)  "=" } 
    div {add.value}
  }

data
  add: Add {
    lhs = c1 {}
    rhs = c2 {}
  }  
  
execute
  @Add(add)
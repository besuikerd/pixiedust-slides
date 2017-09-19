model
  entity Counter {
    value: Int = 0 (default)

    view : String =
      "<div><button>+</button><span>${value}</span><button>-</button></div>"
  }

  entity Add {
    value: Int = lhs.value + rhs.value

    equation: String = "${lhs.value} + ${rhs.value} = ${value}"

    view : String =
      "<div>${lhs.view} ${rhs.view} <span>${equation}</span></div>"
  }

  relation Add.lhs 1 <-> Counter.inverseLhs
  relation Add.rhs 1 <-> Counter.inverseRhs
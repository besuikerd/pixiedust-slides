Foo:
      foo1 => {id: foo1, attr: 12}
      foo2 => {id: foo2, attr: 16, dv: 20}

Foo.dv:
      foo1 => 42

Foo.der:
      foo1 => 13
      foo2 => 17

Bar:
      bar1 => {id: bar1}

Foo.bar:
      foo1 => bar1
      foo2 => bar1

Bar.foos:
      bar1 => [foo1, foo2]
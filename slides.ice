module slides

config
  backend: PixieDust
  target: webpack

imports
  ./components/inputs {
    component KeyboardListener(onArrowLeft: Action[]?, onArrowRight: Action[]?)
    component Trigger(action: Action[]?)
  }
  
  ./examples/main{
    component TodoExample()
    component TodoWithData()
    component Todo2()
    component Todo3()
    component Todo4()
    component Todo5()
    component Todo6()
    component Todo7()
    component Todo8()
    component Todo9()
    component Todo10()
    component TodoExampleDup()
    component CounterExample()
    component TaskListExample()
    component IncomeTaxExample()
    component IncomeTaxNoSummaryExample()
    component AddExample()
    component SlidesExample()
    component GradesExample()
  }
  
  ./components/CodeBlock as CodeBlock {
    component CodeBlock(language: String, code: String)
    component CodeBlockFetch(language: String, url: String, className: String)
  }

model
  entity SlideShow{
    totalSlides: Int = current.slideNumber + current.slidesLeft <+ 0
    
    slideNumbersVisible: Int = 30 (default)
    showFooter: Boolean = false (default)
  }

  entity Slide {
    title: String
    content: View?
    
    slideNumber : Int = previous.slideNumber + 1 <+ 1
    slidesLeft: Int = 1 + next.slidesLeft <+ 0
    
    prevVisible : Int = 
      min(
        max(
          (slideshow.slideNumbersVisible /. 2)
          ++ max(0 ++ (slideshow.slideNumbersVisible - (allNext.count())))
        ) 
        ++ (allPrevious.count())
      )
    nextVisible : Int = slideshow.slideNumbersVisible - prevVisible - 1
  }
  
  relation SlideShow.current ? <-> Slide.inverseCurrent
  relation Slide.next ? <-> ? Slide.previous
  
  
  relation Slide.slideshow 1 <-> * SlideShow.slides
  
  relation Slide.allNext0 = this ++ next.allNext0 <+ this <-> Slide.inverseAllNext0
  relation Slide.allPrevious0 = previous.allPrevious0 ++ this <+ this <-> Slide.inverseAllPrevious0
  
  relation Slide.allPrevious = allPrevious0 \ this <-> Slide.inverseAllPrevious
  relation Slide.allNext =  allNext0 \ this <-> Slide.inverseAllNext
  
  relation Slide.selectPrevious = 
    allPrevious.orderBy(s => s.slideNumber * -1).first(prevVisible).orderBy(s => s.slideNumber)
      <-> Slide.inverseSelectPrevious
      
  relation Slide.selectNext = 
    allNext.orderBy(s => s.slideNumber).first(nextVisible)
      <-> Slide.inverseSelectNext
  
  
view
  component Main(slideshow: SlideShow) {
    if(slideshow.current.count() == 0)
      @Init(slideshow)
    else
      (for(current in slideshow.current) @Slide(current))
  }

  component Init(slideshow: SlideShow){
    action init(){
      intro: Slide {
        slideshow = slideshow
        title = "PixieDust: Declarative incremental user interfaces for IceDust"
        content = @Center {
          @FixedWidth(800) {
            @TodoWithData()
          }
        }
      }      
      slideshow { current = intro }
      
      ui : Slide {
        slideshow = slideshow
        previous = intro
        title = "UI Pattern"
        content = @TwoColumn(
          @FixedWidthImage("images/ui.svg", 600)
        , no value
        )
      }
      
      uiExtended : Slide {
        slideshow = slideshow
        previous = ui
        title = "UI Pattern"
        content = @TwoColumn(
          @FixedWidthImage("images/ui-extended.svg", 600)
        , no value
        )
      }
      
      uiExtended2 : Slide {
        slideshow = slideshow
        previous = uiExtended
        title = "UI Pattern"
        content = @TwoColumn( 
          @FixedWidthImage("images/ui-extended.svg", 600)
        , @List {
            li { "Incremental Rendering" }
            li { "Composable views" }
            li { "User input handling" }
            li { "(Incremental) derived values" }
            li { "Bidirectional mapping between data and view" }
            li { "Undo/redo (time travelling)" }
          }
        )
      }
      
      todo: Slide {
        slideshow = slideshow
        previous = uiExtended2
        title = "Todo"
        content = @Center {
          @FixedWidth(800){
            @TodoExample()
          }
        }
      }
      
      
      todoRedux: Slide {
        slideshow = slideshow
        previous = todo
        title = "Todo.js"
        content = @FiveColumn(
          @CodeBlockFetchTiny("js", "sources/todo/redux/reducer.js")
        , @CodeBlockFetchTiny("js", "sources/todo/redux/view1.js")
        , @CodeBlockFetchTiny("js", "sources/todo/redux/view2.js")
        , @CodeBlockFetchTiny("js", "sources/todo/redux/view3.js")
        , @CodeBlockFetchTiny("js", "sources/todo/redux/view4.js")
        )
      }
      

      
      todo1 : Slide {
        slideshow = slideshow
        previous = todoRedux
        title = "Todo.pix"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo1.pix")
        , no value
        )
      }
      todo2 : Slide {
        slideshow = slideshow
        previous = todo1
        title = "Todo.pix"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo2.pix")
        , @Todo2()
        )
      }
      
      todo3 : Slide {
        slideshow = slideshow
        previous = todo2
        title = "Todo.pix"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo3.pix")
        , @Todo3()
        )
      }
      
      todo4 : Slide {
        slideshow = slideshow
        previous = todo3
        title = "Todo.pix"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo4.pix")
        , @Todo4()
        )
      }
      
      todo5 : Slide {
        slideshow = slideshow
        previous = todo4
        title = "Todo.pix"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo5.pix")
        , @Todo5()
        )
      }
      
      todo6 : Slide {
        slideshow = slideshow
        previous = todo5
        title = "Todo.pix"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo6.pix")
        , @Todo6()
        )
      }
      
      todo7 : Slide {
        slideshow = slideshow
        previous = todo6
        title = "Todo.pix"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo7.pix")
        , @Todo7()
        )
      }
      
      todo8 : Slide {
        slideshow = slideshow
        previous = todo7
        title = "Todo.pix"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo8.pix")
        , @Todo8()
        )
      }
      
      todo9 : Slide {
        slideshow = slideshow
        previous = todo8
        title = "Todo.pix"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo9.pix")
        , @Todo9()
        )
      }
      
      todo10 : Slide {
        slideshow = slideshow
        previous = todo9
        title = "Todo.pix"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo10.pix")
        , @Todo10()
        )
      }
      
      immutable1: Slide {
        slideshow = slideshow
        previous = todo10
        title = "Model"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "sources/runtime/entitymapping.pix")
        , no value
        )
      }
      
      immutable2: Slide {
        slideshow = slideshow
        previous = immutable1
        title = "Model"
        content = @TwoColumn(
          div {
            @CodeBlockFetch("pix", "sources/runtime/entitymapping.pix")
            @FixedWidthImage("images/foo.svg", 700)
          }
        , no value
        )
      }
      
      immutable3: Slide {
        slideshow = slideshow
        previous = immutable2
        title = "Model"
        content = @TwoColumn(
          div {
            @CodeBlockFetch("pix", "sources/runtime/entitymapping.pix")
            @FixedWidthImage("images/foo.svg", 700)
          }
        , @CodeBlockFetch("js", "sources/runtime/entitymapping.js")
        )
      }
      
      getter: Slide {
        slideshow = slideshow
        previous = immutable3
        title = "Getter"
        content = @TwoColumn(
          div {
            @CodeBlockFetch("pix", "sources/runtime/entitymapping.pix")
            @FixedWidthImage("images/foo.svg", 700)
          }
        , @CodeBlockFetch("js", "sources/runtime/getter.js")
        )
      }
      
      calculate: Slide {
        slideshow = slideshow
        previous = getter
        title = "Calculate"
        content = @TwoColumn(
          div {
            @CodeBlockFetch("pix", "sources/runtime/entitymapping.pix")
            @FixedWidthImage("images/foo.svg", 700)
          }
        , @CodeBlockFetch("js", "sources/runtime/calculate.js")
        )
      }
      
      setter: Slide {
        slideshow = slideshow
        previous = calculate
        title = "Setter"
        content = @TwoColumn(
          div {
            @CodeBlockFetch("pix", "sources/runtime/entitymapping.pix")
            @FixedWidthImage("images/foo.svg", 700)
          }
        , @CodeBlockFetch("js", "sources/runtime/setter.js")
        )
      }
      
      invalidate: Slide {
        slideshow = slideshow
        previous = setter
        title = "Invalidate"
        content = @TwoColumn(
          div {
            @CodeBlockFetch("pix", "sources/runtime/entitymapping.pix")
            @FixedWidthImage("images/foo.svg", 700)
          }
        , @CodeBlockFetch("js", "sources/runtime/invalidate.js")
        )
      }
      
      reducer1 : Slide {
        slideshow = slideshow
        previous = invalidate
        title = "Actions"
        content = @Center{
          @FixedWidthImage("images/reducer1.svg", 600)
        }
      }
      
      reducer2 : Slide {
        slideshow = slideshow
        previous = reducer1
        title = "Actions"
        content = @Center{
          @FixedWidthImage("images/reducer2.svg", 600)
        }
      }
      
      reducer3 : Slide {
        slideshow = slideshow
        previous = reducer2
        title = "Actions"
        content = @Center{
          @FixedWidthImage("images/reducer3.svg", 600)
        }
      }
      
      store1 : Slide {
        slideshow = slideshow
        previous = reducer3
        title = "Store"
        content = @TwoColumn(
          @FixedWidthImage("images/store1.svg", 600)
        , @CodeBlockFetch("ts", "sources/runtime/store.ts")
        )
      }
      
      store2: Slide {
        slideshow = slideshow
        previous = store1
        title = "Store"
        content = @TwoColumn(
          @FixedWidthImage("images/store2.svg", 600)
        , @CodeBlockFetch("ts", "sources/runtime/store.ts")
        )
      }
      
      store3: Slide {
        slideshow = slideshow
        previous = store2
        title = "Store"
        content = @TwoColumn(
          @FixedWidthImage("images/store3.svg", 600)
        , @CodeBlockFetch("ts", "sources/runtime/store.ts")
        )
      }
      
      actions: Slide{
        slideshow = slideshow
        previous = store3
        title = "Action types in PixieDust"
        content = 
          @TwoColumn( 
            @CodeBlockFetch("pix", "sources/add.pix")
          , div{
              @AddExample()
            }
          )
      }
      
      actions2: Slide{
        slideshow = slideshow
        previous = actions
        title = "Action types in PixieDust"
        content = 
          @TwoColumn( 
            @CodeBlockFetch("pix", "sources/add.pix")
          , div{
              @AddExample()
              
              @VSpace()
              
              h3 { "Update field (bidirectional mappings)" } 
              @CodeBlock("js", "{\"type\": \"setEntity_field\", \"id\": someId, \"value\": someValue}")
              
              h3 { "Component actions" }
              @CodeBlock("js", "{\"type\": \"Component_action\", \"props\": [...], \"args\": [...]}")
          
              h3 { "Cache updates while rendering" }
              @CodeBlock("js", "{\"type\": \"cacheUpdate[Component]\", \"updatedState\": state}")
            }
          )
      }
      
      lazy: Slide{
        slideshow = slideshow
        previous = actions2
        title = "Lazy rendering"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "sources/grades.pix")
        , @GradesExample()
        )
      }
      
      component1 : Slide {
        slideshow = slideshow
        previous = lazy
        title = "Component"
        content = @TwoColumn(
          div {
            @CodeBlockFetch("ts", "sources/runtime/component.ts")
          }
        , no value
        )
      }
      
      component2 : Slide {
        slideshow = slideshow
        previous = component1
        title = "Component"
        content = @TwoColumn(
          div {
            @CodeBlockFetch("ts", "sources/runtime/component.ts")
            @CodeBlockFetch("pix", "sources/runtime/component.pix")
          }
        , no value
        )
      }
      
      component3 : Slide {
        slideshow = slideshow
        previous = component2
        title = "Component"
        content = @TwoColumn(
          div {
            @CodeBlockFetch("ts", "sources/runtime/component.ts")
            @CodeBlockFetch("pix", "sources/runtime/component.pix")
            @CodeBlockFetch("ts", "sources/runtime/ReactComponent.ts")
          }
        , no value
        )
      }
      
      component4 : Slide {
        slideshow = slideshow
        previous = component3
        title = "Component"
        content = @TwoColumn(
          div {
            @CodeBlockFetch("ts", "sources/runtime/component.ts")
            @CodeBlockFetch("pix", "sources/runtime/component.pix")
            @CodeBlockFetch("ts", "sources/runtime/ReactComponent.ts")
          }
        , @CodeBlockFetch("ts", "sources/runtime/Lifted.ts")
        )
      }
      
      conclusion: Slide {
        slideshow = slideshow
        previous = component4
        title = "PixieDust"
        content = @Center{
          @FixedWidth(800){
            @TodoWithData()
          }
        }
      }
      
      slideshow1 : Slide {
        slideshow = slideshow
        previous = conclusion
        title = "Slideshow"
        content = @CodeBlockFetch("pix", "sources/slideshow/slideshow_model.pix")
      }
      
      slideshow2 : Slide {
        slideshow = slideshow
        previous = slideshow1
        title = "Slideshow"
        content = @CodeBlockFetch("pix", "sources/slideshow/slideshow_model2.pix")
      }
      
      slideshow3 : Slide {
        slideshow = slideshow
        previous = slideshow2
        title = "Slideshow"
        content = @CodeBlockFetch("pix", "sources/slideshow/slideshow_slide.pix")
      }
      
      slideshow4 : Slide {
        slideshow = slideshow
        previous = slideshow3
        title = "Slideshow"
        content = @CodeBlockFetch("pix", "sources/slideshow/slideshow_footer.pix")
      }
      
      slidesExamples: Slide {
        slideshow = slideshow
        previous = slideshow4
        title = "Slideshow"
        content = @CodeBlockFetch("pix", "sources/slideshow/slideshow_examples.pix")
      }
      
      slidesInSlides: Slide {
        slideshow = slideshow
        previous = slidesExamples
        title = "Slideshow"
        content = @TwoColumn(
          @SlidesExample()
        , @SlidesExample()
        )
      }
      
      grades: Slide {
        slideshow = slideshow
        previous = slidesInSlides
        title = "Grades"
        content = @TwoColumn(
          @CodeBlockFetchSmall("pix", "examples/grades/grades.ice")
        , @GradesExample()
        )
      }
      
      vdom: Slide {
        slideshow = slideshow
        previous = grades
        title = "Virtual DOM"
        content = @FixedWidthImage("images/vdom.svg", 1600)
      }
      
    }
    @Trigger(init)
  }
  
  component SlideFooter(slide: Slide) {
    action setCurrent(c: Slide?) { slide.slideshow { current = c } }
    action nextSlide(){ slide.slideshow { current = current.next } }
    action previousSlide(){ slide.slideshow { current = current.previous } }
    
    @KeyboardListener(
      if(slide.previous.count() != 0) previousSlide,
      if(slide.next.count() != 0) nextSlide
    )
    
    if(slide.slideshow.showFooter)
      footer[className="slide-footer"] {
        div[className="slide-count"]{
          span { slide.slideNumber "/" slide.slideshow.totalSlides }
        }
        div[className="slide-selector"]{
          button[className="pure-button", disabled=slide.previous.count() == 0, onClick=setCurrent(slide.previous)]{ "<" }  
          for(s in slide.selectPrevious) 
            button[className="slide-selector-item pure-button", title=s.title, onClick=setCurrent(s)]{ s.slideNumber }
          span[className="slide-selector-item pure-button pure-button-primary", title=slide.title] { slide.slideNumber }
          for(s in slide.selectNext) 
            button[className="slide-selector-item pure-button", title=s.title, onClick=setCurrent(s)]{ s.slideNumber }
          button[className="pure-button", disabled=slide.next.count() == 0, onClick=setCurrent(slide.next)]{ ">" }
        }
      }
  }
  
  component CodeBlockFetch(language: String, url: String){
    @CodeBlock.CodeBlockFetch(language, url, "font-normal")
  }
  
  component CodeBlockFetchSmall(language: String, url: String){
    @CodeBlock.CodeBlockFetch(language, url, "font-small")
  }
  
  component CodeBlockFetchTiny(language: String, url: String){
    @CodeBlock.CodeBlockFetch(language, url, "font-tiny")
  }
  
  component Slide(slide: Slide){
    div[className="slide"] {
      @SlideHeader(slide)
      div[className="slide-content"]{
        @VSpace()
        slide.content
      }
      @SlideFooter(slide)
    }
  }
  
  component SlideHeader(slide: Slide) {
    action toggleFooter(){
      slide.slideshow {
        showFooter = !showFooter
      }
    }
  
    div [className="slide-header", onClick=toggleFooter()]{
      h1 { slide.title }
      hr{}
    }
  }
  
  component TwoColumn(left: View?, right: View?){
    div[className="pure-g"]{
      div[className="pure-u-1-2"]{
        left
      }
      div[className="pure-u-1-2"]{
        right
      }
    }
  }
  
  component WideTwoColumn(left: View?, right: View?){
    div[className="pure-g"]{
      div[className="pure-u-2-3"]{
        left
      }
      div[className="pure-u-1-3"]{
        right
      }
    }
  }
  
  component ThreeColumn(left: View?, middle: View?, right: View?){
    div[className="pure-g"]{
      div[className="pure-u-1-3"]{
        left
      }
      div[className="pure-u-1-3"]{
        middle
      }
      div[className="pure-u-1-3"]{
        right
      }
    }
  }
  
  component FourColumn(v1: View, v2: View?, v3: View?, v4: View?){
    div[className="pure-g"]{
      div[className="pure-u-1-4"]{
        v1
      }
      div[className="pure-u-1-4"]{
        v2
      }
      div[className="pure-u-1-4"]{
        v3
      }
      div[className="pure-u-1-4"]{
        v4
      }
    }
  }
  
  component FiveColumn(v1: View, v2: View?, v3: View?, v4: View?, v5: View?){
    div[className="pure-g"]{
      div[className="pure-u-1-5"]{
        v1
      }
      div[className="pure-u-1-5"]{
        v2
      }
      div[className="pure-u-1-5"]{
        v3
      }
      div[className="pure-u-1-5"]{
        v4
      }
      div[className="pure-u-1-5"]{
        v5
      }
    }
  }
  
  component FixedWidth(width: Int) {
    div[style={width=width}] {
      children
    }
  }
  
  
  component Center(){
    div[style={
      display="flex"
    , maxWidth="90%"
    , maxHeight="90%"
    , justifyContent="space-around"
    }]{
      div[style={minWidth="0"}] {
        children
      }
    }
  }
  
  component VSpace(){
    br[style={height="50x=px"}]
  }
  
  component Block(){
    div[style={
      padding = "30px 0 30px 0"
    }]{
      div{
        children
      }
      
    }
  }
  
  component FixedWidthImage(src: String, width: Int){
    img[
      src=src
    , style={
      width="${width}px"
    }
    ]
  }
  
  component Image(src: String){
    img[
      src=src
    , style={maxWidth="100%", height="auto"}
    ]
  }
  
  component List(){
    ul[className="slide-list"]{
      children
    }
  }
  
data
  slideshow: SlideShow{}
  
execute
  @Main(slideshow)
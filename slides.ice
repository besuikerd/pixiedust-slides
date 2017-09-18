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
    component TodoDocked()
    component TodoExampleDup()
    component CounterExample()
    component TaskListExample()
    component IncomeTaxExample()
    component IncomeTaxNoSummaryExample()
    component AddExample()
    component SlidesExample()
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
        content = div {
          
        }
      }      
      slideshow { current = intro }
      
      ui : Slide {
        slideshow = slideshow
        previous = intro
        title = "UI Pattern"
        content = @TwoColumn(
          no value
        , @FixedWidthImage("/images/ui.svg", 600)
        )
      }
      
      uiExtended : Slide {
        slideshow = slideshow
        previous = ui
        title = "UI Pattern"
        content = @TwoColumn(
          no value
        , @FixedWidthImage("/images/ui-extended.svg", 600)
        )
      }
      
      uiExtended2 : Slide {
        slideshow = slideshow
        previous = uiExtended
        title = "UI Pattern"
        content = @TwoColumn(
          @List {
            li { "Incremental Rendering" }
            li { "Composable views" }
            li { "User input handling" }
            li { "(Incremental) derived values" }
            li { "Bidirectional mapping between data and view" }
            li { "Undo/redo (time travelling)" }
          }
        , @FixedWidthImage("/images/ui-extended.svg", 600)
        )
      }
      
      todo: Slide {
        slideshow = slideshow
        previous = uiExtended2
        title = "Todo"
        content = @TodoExample()
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
        title = "Todo"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo1.pix")
        , @TodoExample()
        )
      }
      
      todo2 : Slide {
        slideshow = slideshow
        previous = todo1
        title = "Todo"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo2.pix")
        , @TodoExample()
        )
      }
      
      todo3 : Slide {
        slideshow = slideshow
        previous = todo2
        title = "Todo"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo3.pix")
        , @TodoExample()
        )
      }
      
      todo4 : Slide {
        slideshow = slideshow
        previous = todo3
        title = "Todo"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo4.pix")
        , @TodoExample()
        )
      }
      
      todo5 : Slide {
        slideshow = slideshow
        previous = todo4
        title = "Todo"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo5.pix")
        , @TodoExample()
        )
      }
      
      todo6 : Slide {
        slideshow = slideshow
        previous = todo5
        title = "Todo"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo6.pix")
        , @TodoExample()
        )
      }
      
      todo7 : Slide {
        slideshow = slideshow
        previous = todo6
        title = "Todo"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo7.pix")
        , @TodoExample()
        )
      }
      
      todo8 : Slide {
        slideshow = slideshow
        previous = todo7
        title = "Todo"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo8.pix")
        , @TodoExample()
        )
      }
      
      todo9 : Slide {
        slideshow = slideshow
        previous = todo8
        title = "Todo"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo9.pix")
        , @TodoExample()
        )
      }
      
      todo10 : Slide {
        slideshow = slideshow
        previous = todo9
        title = "Todo"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo10.pix")
        , @TodoExample()
        )
      }
      
      todo11 : Slide {
        slideshow = slideshow
        previous = todo10
        title = "Todo"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo11.pix")
        , @TodoExample()
        )
      }
      
      todo12 : Slide {
        slideshow = slideshow
        previous = todo11
        title = "Todo"
        content = @WideTwoColumn(
          @CodeBlockFetch("pix", "sources/todo/todo12.pix")
        , @TodoExample()
        )
      }
      
      store1: Slide {
        slideshow = slideshow
        previous = todo9
        title = "Store"
        content = div{
          @CodeBlock("haskell", "type Reducer state action = (state, action) -> state")
          @CodeBlockFetch("javascript", "sources/store.js")
        }
      }
      
      store2: Slide {
        slideshow = slideshow
        previous = store1
        title = "Store"
        content = @Center { @FixedWidthImage("images/store0.svg", 800) }
      }
      
      store3: Slide {
        slideshow = slideshow
        previous = store2
        title = "Store"
        content = @Center { @FixedWidthImage("images/store1.svg", 800) }
      }
      
      store4: Slide {
        slideshow = slideshow
        previous = store3
        title = "Store"
        content = @Center { @FixedWidthImage("images/store2.svg", 800) }
      }
      
      store5: Slide {
        slideshow = slideshow
        previous = store4
        title = "Store"
        content = @Center { @FixedWidthImage("images/store3.svg", 800) }
      }
      
      store6: Slide {
        slideshow = slideshow
        previous = store5
        title = "Store"
        content = @Center { @FixedWidthImage("images/store4.svg", 800) }
      }
      
      actions: Slide{
        slideshow = slideshow
        previous = store6
        title = "Action types in PixieDust"
        content = 
          @TwoColumn( 
            @CodeBlockFetch("pix", "/sources/add.pix")
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
            @CodeBlockFetch("pix", "/sources/add.pix")
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
      
      
      incometax1: Slide{
        slideshow = slideshow
        previous = actions2
        title = "Lazy rendering"
        content = @TwoColumn(
          @CodeBlockFetchSmall("pix", "/sources/incometax.pix")
        , @IncomeTaxExample()
        )
      }
      
      incometax2: Slide{
        slideshow = slideshow
        previous = incometax1
        title = "Lazy rendering"
        content = @TwoColumn(
          @CodeBlockFetchSmall("pix", "/sources/incometax.pix")
        , @IncomeTaxNoSummaryExample()
        )
      }
      
//      vdom: Slide {
//        slideshow = slideshow
//        previous = actions2
//        title = "Virtual DOM"
//        content = @FixedWidthImage("images/vdom.svg", 1600)
//      }
      
      
      
      
//      dataEncapsulation: Slide {
//        slideshow = slideshow
//        previous = scopegraphVisualizer4
//        title = "Encapsulation of data"
//        content = div [className="pure-g"]{
//          div[className="pure-u-2-3"] {
//            @TwoColumn(
//              @TodoExample()
//            , @TodoExample()
//            )
//          }
//          
//          div[className="pure-u-1-3"] {
//            @TodoExampleDup()
//          }
//        }
//      }
      
      
//      slides: Slide {
//        slideshow = slideshow
//        previous = intro
//        title = "Slides"
//        content = @TwoColumn(
//          @SlidesExample()
//        , @SlidesExample()
//        )
//      }
      
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
  
  
  component Center(){
    div[style={
      display="flex"
    , width="100%"
    , height="100%"
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
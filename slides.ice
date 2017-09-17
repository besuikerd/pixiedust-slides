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
  
  ./components/CodeBlock {
    component CodeBlock(language: String, code: String)
    component CodeBlockFetch(language: String, url: String)
  }

model
  entity SlideShow{
    totalSlides: Int = current.slideNumber + current.slidesLeft <+ 0
  }

  entity Slide {
    title: String
    content: View?
    
    slideNumber : Int = previous.slideNumber + 1 <+ 1
    slidesLeft: Int = 1 + next.slidesLeft <+ 0
  }
  
  relation SlideShow.current ? <-> Slide.inverseCurrent
  relation Slide.next ? <-> ? Slide.previous
  
  
  relation Slide.slideshow 1 <-> * SlideShow.slides
  
  relation Slide.allPrevious = previous.allPrevious ++ this <+ this <-> Slide.inverseAllPrevious
  relation Slide.allNext = this ++ next.allNext <+ this <-> Slide.inverseAllNext
  
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
        content = @Center { @FixedWidthImage("/images/ui.svg", 1000) }
      }
      
      uiMVC : Slide {
        slideshow = slideshow
        previous = ui
        title = "UI Pattern"
        content = @Center { @FixedWidthImage("/images/ui-mvc.svg", 1000) }
      }
      
      uiMVVM : Slide {
        slideshow = slideshow
        previous = uiMVC
        title = "UI Pattern"
        content = @Center { @FixedWidthImage("/images/ui-mvvm.svg", 1000) }
      }
      
      uiFlux: Slide {
        slideshow = slideshow
        previous = uiMVVM
        title = "UI Pattern"
        content = @Center { @FixedWidthImage("/images/ui-flux.svg", 1000) }
      }
      
      uiElm: Slide {
        slideshow = slideshow
        previous = uiMVVM
        title = "UI Pattern"
        content = @Center { @FixedWidthImage("/images/ui-elm.svg", 1000) }
      }
      
      uiProperties : Slide {
        slideshow = slideshow
        previous = uiElm
        title = "UI Framework properties"
        content =
          @List {
            li { "Incremental Rendering" }
            li { "Composable views" }
            li { "User input handling" }
            li { "(Incremental) derived values" }
            li { "Bidirectional mapping between data and view" }
            li { "Undo/redo (time travelling)" }
          }
      }
      
      scopegraphVisualizer : Slide {
        slideshow = slideshow
        previous = uiProperties
        title = "Scopegraph Visualizer"
        content = 
        iframe[
          src="scopegraph-visualizer/index.html"
        , style = {
            width = "100%"
          , height = "100%"
          }
        ]
      }
      
      scopegraphVisualizer2 : Slide {
        slideshow = slideshow
        previous = scopegraphVisualizer
        title = "Scopegraph Visualizer"
        content = @ThreeColumn(
          div{
            h2{ "Actions" }
            @CodeBlockFetch("js", "sources/scopegraph/scopegraph-action.js")
          }
        , no value
        , no value
        )
      }
      
      scopegraphVisualizer3 : Slide {
        slideshow = slideshow
        previous = scopegraphVisualizer2
        title = "Scopegraph Visualizer"
        content = @ThreeColumn(
          div{
            h2{ "Actions" }
            @CodeBlockFetch("js", "sources/scopegraph/scopegraph-action.js")
          }
        , div{
            h2{ "Reducer" }
            @CodeBlockFetch("js", "sources/scopegraph/scopegraph-reducer.js")
          }
        , no value
        )
      }
      
      scopegraphVisualizer4 : Slide {
        slideshow = slideshow
        previous = scopegraphVisualizer3
        title = "Scopegraph Visualizer"
        content = @ThreeColumn(
          div{
            h2{ "Actions" }
            @CodeBlockFetch("js", "sources/scopegraph/scopegraph-action.js")
          }
        , div{
            h2{ "Reducer" }
            @CodeBlockFetch("js", "sources/scopegraph/scopegraph-reducer.js")
          }
        , div{
            h2{ "Derived Values" }
            @CodeBlockFetch("js", "sources/scopegraph/scopegraph-selectors.js")
          }
        )
      }
      
      derivedValues : Slide {
        slideshow = slideshow
        previous = scopegraphVisualizer4
        title = "Derived values"
        content = div[className="pure-g"]{
          div[className="pure-u-1-3"]{
            @CodeBlockFetch("pix", "sources/derived-value.ice")
          }
          div[className="pure-u-2-3"]{
            h2 { "Reselect" }
            @CodeBlockFetch("js", "sources/derived-value.js")
            
            h2 { "MobX" }
            @CodeBlockFetch("js", "sources/derived-value-mobx.js")
          }
        }
      }
      
      counter1: Slide {
        slideshow = slideshow
        previous = derivedValues
        title = "Counter Example"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "sources/counter_model.ice")
        , no value
        )
      }
            
      counter2: Slide {
        slideshow = slideshow
        previous = counter1
        title = "Counter Example"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "sources/counter_model.ice")
        , div {
            @CounterExample()
          }
        )
      }
      
      counter3: Slide {
        slideshow = slideshow
        previous = counter2
        title = "Counter Example"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "sources/counter_model.ice")
        , div {
            @CounterExample()
            @Block {
              @Image("/images/ui-no-interaction.svg")
            }
          }
        )
      }
      
      counter4: Slide {
        slideshow = slideshow
        previous = counter3
        title = "Counter Example"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "sources/counter_template.pix")
        , div {
            @CounterExample()
            @Block {
              @Image("/images/ui-no-interaction.svg")
            }
          }
        )
      }
      
      counter5: Slide {
        slideshow = slideshow
        previous = counter4
        title = "Counter Example"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "sources/counter_template_components.pix")
        , div {
            @CounterExample()
            @Block {
              @Image("/images/ui-no-interaction.svg")
            }
          }
        )
      }
      
      counter6: Slide {
        slideshow = slideshow
        previous = counter5
        title = "Counter Example"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "sources/counter.pix")
        , div {
            @CounterExample()
          }
        )
      }
      
      counter7: Slide {
        slideshow = slideshow
        previous = counter6
        title = "Counter Example"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "sources/counter.pix")
        , div {
            @CounterExample()
            @Block {
              @Image("/images/counter_vdom.png")
            }
          }
        )
      }
      
      counter8: Slide {
        slideshow = slideshow
        previous = counter7
        title = "Counter Example"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "sources/counter.pix")
        , div {
            @AddExample()
            @VSpace()
            @CodeBlockFetch("pix", "sources/add.pix")
          }
        )
      }
      
      
      todo1: Slide {
        slideshow = slideshow
        previous = counter8
        title = "Todo"
        content = div {
          @TodoExample()
        }
      }
      
      todo_model: Slide {
        slideshow = slideshow
        previous = todo1
        title = "Todo Model"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "/sources/todo_model.pix")
        , @TodoExample()
        )
      }
      
      todo_view: Slide {
        slideshow = slideshow
        previous = todo_model
        title = "Todo View"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "/sources/todo_view.pix")
        , @TodoExample()
        )
      }
      
      store1: Slide {
        slideshow = slideshow
        previous = todo_view
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
        content = div {
          @TwoColumn( 
            h3 { "Update field (bidirectional mappings)" } 
          , @CodeBlock("json", "{\"type\": \"setEntity_field\", \"id\": someId, \"value\": someValue}")
          )
          @TwoColumn(
            h3 { "Component actions" }
          , @CodeBlock("json", "{\"type\": \"Component_action\", \"props\": [...], \"args\": [...]}")
          )
          @TwoColumn(
            h3 { "Cache updates while rendering" }
          , @CodeBlock("json", "{\"type\": \"cacheUpdate[Component]\", \"updatedState\": state}")
          )
          @VSpace()
          @TwoColumn(
            @AddExample()
          , @CodeBlockFetch("pix", "/sources/add.pix")
          )
        }
      }
      
      vdom: Slide {
        slideshow = slideshow
        previous = actions
        title = "Virtual DOM"
        content = @FixedWidthImage("images/vdom.svg", 1600)
      }
      
      incometax1: Slide{
        slideshow = slideshow
        previous = vdom
        title = "Lazy rendering"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "/sources/incometax.pix")
        , @IncomeTaxExample()
        )
      }
      
      incometax2: Slide{
        slideshow = slideshow
        previous = incometax1
        title = "Lazy rendering"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "/sources/incometax.pix")
        , @IncomeTaxNoSummaryExample()
        )
      }
      
      
      
      
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
    
    footer[className="slide-footer"] {
      @KeyboardListener(
        if(slide.previous.count() != 0) previousSlide,
        if(slide.next.count() != 0) nextSlide
      )
      
      div[className="slide-count"]{
        span { slide.slideNumber "/" slide.slideshow.totalSlides }
      }
      div[className="slide-selector"]{
        button[className="pure-button", disabled=slide.previous.count() == 0, onClick=setCurrent(slide.previous)]{ "<" }  
        for(s in slide.allPrevious \ slide) 
          button[className="slide-selector-item pure-button", onClick=setCurrent(s)]{ s.slideNumber }
        span[className="slide-selector-item pure-button pure-button-primary"] { slide.slideNumber }
        for(s in slide.allNext \ slide) 
          button[className="slide-selector-item pure-button", title=s.title, onClick=setCurrent(s)]{ s.slideNumber }
        button[className="pure-button", disabled=slide.next.count() == 0, onClick=setCurrent(slide.next)]{ ">" }
      }
    }
  }
  
  component Slide(slide: Slide){
    @TodoDocked()
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
    div [className="slide-header"]{
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
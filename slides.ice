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
        title = "Slide 1"
        content = div {
          ul {
            li {"Content" }
            li {"Content" }
            li {"Content" }
            li {"Content" }
          }
        }
      }      
      slideshow { current = intro }
      
      counter1: Slide {
        slideshow = slideshow
        title = "Counter Example (not a counterexample)"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "/sources/counter_model.pix")
        , div {
          }
        )
        previous = intro
      }
      
      slides: Slide {
        slideshow = slideshow
        previous = intro
        title = "Slides"
        content = @TwoColumn(
          @SlidesExample()
        , @SlidesExample()
        )
      }
      
      dataEncapsulation: Slide {
        slideshow = slideshow
        previous = slides
        title = "Encapsulation of data"
        content = div [className="pure-g"]{
          div[className="pure-u-2-3"] {
            @TwoColumn(
              @TodoExample()
            , @TodoExample()
            )
          }
          
          div[className="pure-u-1-3"] {
            @TodoExampleDup()
          }
        }
      }
      
      
      counter2: Slide {
        slideshow = slideshow
        previous = dataEncapsulation
        title = "Counter Example (not a counterexample)"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "/sources/counter_model.pix")
        , div {
            @CounterExample()
          }
        )
      }
      
      counter3: Slide {
        slideshow = slideshow
        title = "Counter Example (not a counterexample)"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "/sources/counter.pix")
        , div {
            @CounterExample()
          }
        )
        previous = counter2
      }
      
      counter4: Slide {
        slideshow = slideshow
        title = "Counter Example (not a counterexample)"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "/sources/counter.pix")
        , div {
            @CounterExample()
            @Block {
              @Image("/images/counter_vdom.png")
            }
          }
        )
        previous = counter3
      }
      
      vdom: Slide {
        slideshow = slideshow
        previous = counter4
        title = "Virtual DOM"
        content = @FixedWidthImage("/images/vdom.svg", 1600)
      }
      
      store1: Slide {
        slideshow = slideshow
        previous = vdom
        title = "Store"
        content = div{
          @CodeBlock("haskell", "type Reducer state action = (state, action) -> state")
          @CodeBlockFetch("javascript", "/sources/store.js")
        }
      }
      
      store2: Slide {
        slideshow = slideshow
        previous = store1
        title = "Store"
        content = @FixedWidthImage("/images/store0.svg", 800)
      }
      
      store3: Slide {
        slideshow = slideshow
        previous = store2
        title = "Store"
        content = @FixedWidthImage("/images/store1.svg", 800)
      }
      
      store4: Slide {
        slideshow = slideshow
        previous = store3
        title = "Store"
        content = @FixedWidthImage("/images/store2.svg", 800)
      }
      
      store5: Slide {
        slideshow = slideshow
        previous = store4
        title = "Store"
        content = @FixedWidthImage("/images/store3.svg", 800)
      }
      
      store6: Slide {
        slideshow = slideshow
        previous = store5
        title = "Store"
        content = @FixedWidthImage("/images/store4.svg", 800)
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
      
      incometax1: Slide{
        slideshow = slideshow
        previous = actions
        title = "Income Tax"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "/sources/incometax.pix")
        , @IncomeTaxExample()
        )
      }
      
      incometax2: Slide{
        slideshow = slideshow
        previous = incometax1
        title = "Income Tax"
        content = @TwoColumn(
          @CodeBlockFetch("pix", "/sources/incometax.pix")
        , @IncomeTaxNoSummaryExample()
        )
      }
      
      todo1: Slide {
        slideshow = slideshow
        title = "Todo"
        content = div {
          @TodoExample()
        }
        previous = incometax2
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
      
    }
    @Trigger(init)
  }
  
  component Slide(slide: Slide){
    div[className="slide"] {
      @SlideHeader(slide)
      div[className="slide-content"]{
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
  
  component TwoColumn(left: View, right: View){
    div[className="pure-g"]{
      div[className="pure-u-1-2"]{
        left
      }
      div[className="pure-u-1-2"]{
        right
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
      children
    }
  }
  
  component FixedWidthImage(src: String, width: Int){
    img[
      src=src
    , style={width="${width}px"}
    , marginLeft="auto"
    , marginRight="auto"
    ]
  }
  
  component Image(src: String){
    img[
      src=src
    , style={maxWidth="100%", height="auto"}
    ]
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
  
  
data
  slideshow: SlideShow{}
  
execute
  @Main(slideshow)
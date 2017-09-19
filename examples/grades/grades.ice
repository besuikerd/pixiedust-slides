module grades

config
  backend: PixieDust
  target: webpack
  
imports
  pixiedust/components/native/inputs {
    component OptFloatInput(ref value : Float?)
  }
  
  ../../components/Select {
    component Select(labels: String*, choice: Course*, ref selection: Course?)
  }

model
  entity App {
    
  }

  entity Student {
    name : String
  }
  
  entity Course {
    name : String
    avgGrade: Float? =  avg(submissions.grade2) 
  }
  
  entity Submission {
    grade: Float?
    grade2 : Float? =  if(pass) grade
    
    pass: Boolean = grade > 5.5 <+ false 
  }
  
  relation Course.submissions * <-> 1 Submission.course
  relation Submission.student 1 <-> * Student.submissions
  
  relation App.courses * <-> 1 Course.app
  relation App.selectedCourse ? <-> ? Course.inverseSelectedCourse
  
view
  component Course(c: Course) {
    h1{ c.name }
    h2 { "Average grade: " c.avgGrade as String <+ "No grades" }
    
    table {
      thead {
        tr{
          th { "Student" }
          th { "Grade" }
        }
      }
      tbody {
        for(submission in c.submissions) (@Submission(submission))
      }
    }
  }
  
  component Submission(s: Submission) {
    tr {
      td{ s.student.name }
      td{ @OptFloatInput(s.grade) }
    }
  }
  
  component App(app: App){
    @Select(app.courses.name, app.courses, app.selectedCourse)
    for(course in app.selectedCourse) (@Course(course))
  }
  
data

  alice: Student { name = "Alice" }
  bob: Student { name = "Bob" }
  charlie: Student { name = "Charlie" }
  
  
  c1: Course {
    name = "Math"
    submissions =
      { student = alice }
    , { student = bob }
    , { student = charlie }
  }
  
  c2 : Course {
    name = "History"
    submissions = 
      { student = alice }
    , { student = charlie } 
  }
  
  app : App {
    courses = c1, c2
    selectedCourse = c1
  }
execute
  @App(app)
  
  
  
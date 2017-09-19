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
  
  
  course1: Course {
    name = "Math"
    submissions =
      submission1 { student = alice }
    , submission2 { student = bob }
    , submission3 { student = charlie }
  }
  
  course2 : Course {
    name = "History"
    submissions = 
      submission4 { student = alice }
    , submission5 { student = charlie } 
  }
  
  app : App {
    courses = course1, course2
    selectedCourse = course1
  }
execute
  @App(app)
  
  
  
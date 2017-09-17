class Course{
  @observable enrollments = [];
  @computed get avgGrade(){
    return this.enrollments.reduce((acc, e) => acc + e.grade, 0) / this.enrollments.length;
  }
}

class Enrollment{
  @observable grade = null;
}
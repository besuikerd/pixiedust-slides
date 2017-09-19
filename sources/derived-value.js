const enrollmentsForCourse = (state, props) => state.enrollments.filter(e => e.courseId == props.courseId);

const enrollmentGradesForCourse = createSelector([enrollmentsForCourse], enrollments => enrollments.map(e => e.grade));

const courseAvgGrade = createSelector([enrollmentGradesForCourse],
  grades => grades.reduce((acc, cur) => acc + cur, 0) / grades.length
);
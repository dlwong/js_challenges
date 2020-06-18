const canFinish = function(numCourses, prerequisites) {
  const prerequisitesByCourse = new Array(numCourses);
  for (let i = 0; i < prerequisitesByCourse.length; i++) {
    prerequisitesByCourse[i] = {};
  }
  
  const addDependencies = (course, prerequisite) => {
    const dependencies = Object.keys(prerequisitesByCourse[prerequisite]);
    dependencies.forEach(dependency => {
      if (!prerequisitesByCourse[course][dependency]) {
        prerequisitesByCourse[course][dependency] = true;
        addDependencies(course, dependency);
      }
    });
  }
  
  for (let i = 0; i < prerequisites.length; i++) {
    const course = prerequisites[i][0];
    const prerequisite = prerequisites[i][1];
    prerequisitesByCourse[course][prerequisite] = true;
    addDependencies(course, prerequisite);
    if (prerequisitesByCourse[course][course]) {
      return false;
    }
  }
  return true;
};


console.log(canFinish(2, [[1,0]])) //true
console.log(canFinish(2, [[1,0],[0,1]])) //false
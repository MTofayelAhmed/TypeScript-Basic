{

    // constraints
    const addCourseToStudent = <T extends{id: number; name: string}>(student: T) => {
        const course = "Next level web Development";
    
        return {
          ...student,
          course,
        };
    
    
      };
    
      const student1 = addCourseToStudent<{id: number; name: string}>({id: 123456, name: "Bangladesh"})





















}
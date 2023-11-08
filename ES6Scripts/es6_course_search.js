"use strict"

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {

    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];

   
 

    function findStartDate (courses){
        if ( courses.CourseId == "PROG200"){
            console.log(courses.StartDate);
            
        }
        else{
            console.log('No start date');
        }
    }

    const res = courses.find(findStartDate);

    function findTitle(courses){
        if ( courses.CourseId == "PROJ500"){
            console.log(courses.Title);
            
        }
    }

    const res2 = courses.find(findTitle);

    function findLessThan50(courses){
        if (courses.Fee <= 50){
            console.log(courses.Title);
        }
    }

    const res3= courses.filter(findLessThan50)


    function findClassLocation(courses){
        if (courses.Location == "Classroom 1"){
            console.log(courses);
        }
    }

    const res4= courses.filter(findClassLocation)
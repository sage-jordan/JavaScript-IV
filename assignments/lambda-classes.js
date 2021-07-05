// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
   }
   demo(subject){
        return `Today we are learnind about ${subject}`;
   }
   grade(student, subject){
        return `${student} receives a perfect score on ${subject}`;
   }
}
class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listSubjects(student){
        return `${student.favSubjects[0]}, ${student.favSubjects[1]}, ${student.favSubjects[2]}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}
class ProjectManager extends Instructor {
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(studentObj, subject){
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}.`;
    }
}
    const fred = new Instructor({
        name: 'Fred',
        location: 'Bedrock',
        age: 37,
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `Don't forget the homies`
    });
    const sage = new Student({
        name: "Sage",
        age: 20,
        location: "Indianapolis",
        previousBackground: "Host",
        className: "WEBPT7",
        favSubjects: ["Math", "Science", "Computers"]
    });
    const phil = new ProjectManager({
        name: "Phil",
        age: 25,
        location: "Denver",
        gradClassName: "not sure", 
        favInstructor: "Dan"
    });
console.log(fred.name); // Fred
console.log(sage.name); // Sage
console.log(sage.speak()); // Hello my name is Sage, I am from Indianapolis
console.log(sage.className); // WEBPT7
console.log(sage.PRAssignment("JavascriptIII")); // Sage has submitted a PR for JavascriptIII
console.log(fred.grade(sage.name, "JavascriptIII")); // Sage receives a perfect score on JavascriptIII
console.log(phil.debugsCode(sage, "JavascriptIII")); // Phil debugs Sage's code on JavascriptIII.
import React from 'react';

function ES6JavaScript(props) {
  function person(name, age) {
    const salary = 'salary'

    return {
      name,
      age,
      getName() {
        return `${name} ${age}`
      },
      [`${salary}OfToan`]: 20000
    }
  }

  // --------- Inheritance of constructor function ES 5. --------
  function Person(name, age) {
    this.name = name
    this.age = age

    // console.log('this', this);
  }

  Person.prototype.getJob = function () {
    return "cong viec cua toi la " + this.job;
  }

  var bob = new Person('Toan', 23)

  var david = Object.create(new Person("David", 30))

  // console.log('david: ', david.name, david.age);

  david.job = "IT"
  // console.log('job of david: ', david.getJob());

  // --------- Inheritance of Class ES 6. --------
  class ClassPerson {
    constructor(name, age) {
      this.name = name
      this.age = age
    }

    getJob() {
      console.log(`ES 6 cong viec cua toi la ${this.job}`);
    }
  }

  class Worker extends ClassPerson {
    constructor(name, age, job) {
      super()
      this.job = job
    }
  }

  const worker = new Worker('Toan', 30, 'IT')
  console.log('ES 6 worker', worker);
  worker.getJob()

  return (
    <div>
      ES6JavaScript
    </div>
  );
}

export default ES6JavaScript;
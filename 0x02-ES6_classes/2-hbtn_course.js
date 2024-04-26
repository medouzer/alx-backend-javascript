export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name != "string") {
            throw new TypeError('Name must be a String');
        }
        if (typeof length != "number") {
            throw new TypeError('length must be a Number');
        }
        if (typeof students != "object" && typeof students[0] == "string") {
            throw new TypeError('students must be a array of Strings');
        }
        this._name = name;
        this._length = length;
        this._students = students;
    }

    setName(name) {
        if (typeof name != "string") {
            throw new TypeError('Name must be a String');
        }
        this._name = name;
    }

    setlength(length) {
        if (typeof length != "number") {
            throw new TypeError('length must be a Number');
        }
        this._length = length;
    }

    setStudents(students) {
        if (typeof students != "object" && typeof students[0] == "string") {
            throw new TypeError('students must be a array of Strings');
        }
        this._students = students;
    }

    getName() {
      return this._name;
    }

    getlength() {
      return this._length;
    }

    getStudents() {
      return this._students;
    }
  }

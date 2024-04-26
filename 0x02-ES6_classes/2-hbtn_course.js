export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a String');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a Number');
    }
    if (typeof students !== 'object' && typeof students[0] === 'string') {
      throw new TypeError('students must be a array of Strings');
    }
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a String');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be a Number');
    }
    this._length = length;
  }

  set students(students) {
    if (typeof students !== 'object' && typeof students[0] === 'string') {
      throw new TypeError('students must be a array of Strings');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}

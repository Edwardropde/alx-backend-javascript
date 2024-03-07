/**
 * Represents a Holberton Course
 */
export default class HolbertonCourse {
  /**
   * creates new @see {@link HolbertonCourse}
   * @param {String} name - course name
   * @param {Number} length - course length in months
   * @param {String[]} students - Names of students in course
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets name of course
   */
  get name() {
    return this._name;
  }

  /**
   * sets name of course
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets length of course in months
   */
  get length() {
    return this._length;
  }

/**
 * Sets length of course in months
 */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets student name in course
   */
  get students() {
    return this._students;
  }

  /**
   * Sets name of students in course
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}

export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  addError(codeError, textError) {
    this.errors.set(codeError, textError);
  }

  translate(codeError) {
    if (!this.errors.has(codeError) || typeof codeError !== 'number') {
      return 'Unknown error';
    }
    else {
      return this.errors.get(codeError);
    }
  }
}
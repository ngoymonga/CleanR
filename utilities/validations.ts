export default class Validation {
    static isEmailValid(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    static isPasswordValid(password: string): boolean {
      return password.length >= 6;
    }
  
    static isEmpty(value: string | undefined): boolean {
      return !value || value.trim() === '';
    }
  }
  
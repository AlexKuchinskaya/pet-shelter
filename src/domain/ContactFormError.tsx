export class ContactFormError extends Error {
  constructor(email: string) {
    super(`You can not submit the contact form more than 3 times with the same email. Your email is: ${email}`)
  }
}
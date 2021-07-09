import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SigninForm } from '../..';

describe('sign in form', () => {
  test('signin form should be contained field for email', () => {
    render(<SigninForm />);
    const emailField = screen.getByPlaceholderText(/email/i);
    expect(emailField).toBeInTheDocument();
  });

  test('signin form should be contained field for password', () => {
    render(<SigninForm />);
    const passwordField = screen.getByPlaceholderText(/password/i);
    expect(passwordField).toBeInTheDocument();
  });

   test('signin form should be contained checkbox remember me', () => {
     render(<SigninForm />);
     const elementRememberMe = screen.getByRole('checkbox');
     expect(elementRememberMe).toBeInTheDocument();
   });

  test('signin form should be contained button for sign in', () => {
    render(<SigninForm />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  test('email field should be shown email value, when user type', async () => {
    render(<SigninForm />);
    const userEmail = 'test@test.com';
    const emailField = screen.getByPlaceholderText(/email/i);

    await userEvent.type(emailField, userEmail);

    expect(emailField).toHaveDisplayValue(userEmail);
  });

  test('password field should be contained password value, when user type', async () => {
    render(<SigninForm />);
    const userPassword = 'Test123';
    const passwordField = screen.getByPlaceholderText(/password/i);

    await userEvent.type(passwordField, userPassword);

    expect(passwordField).toHaveDisplayValue(userPassword);
  });

  test('email field should be shown error message "Invalid email", when value is invalid', async () => {
    render(<SigninForm />);
    let emailField = screen.getByPlaceholderText(/email/i);
    await userEvent.type(emailField, 'bndjjnbbd');
    await userEvent.tab();
    const errorMsg = screen.getByText(/invalid email/i);

    expect(errorMsg).toBeInTheDocument();
  });

  test('password field should be shown error message, when value is less than 6 characters', async() => {
    render(<SigninForm />);
    let passwordField = screen.getByPlaceholderText(/password/i);
    
    await userEvent.type(passwordField, 'a1b2c');
    await userEvent.tab();
    const errorMsg = screen.getByText(/password/i);

    expect(errorMsg).toBeInTheDocument();
  });

  test('password field should be shown error message, when value is more than 20 characters', async () => {
    render(<SigninForm />);
    let passwordField = screen.getByPlaceholderText(/password/i);
    
    await userEvent.type(passwordField, '12345678901234567890aaaaa');
    await userEvent.tab();
    const errorMsg = screen.getByText(/password/i);

    expect(errorMsg).toBeInTheDocument();
  });

  test('password field should be shown error message, when value didn\'t contain at least one capital letter', async () => {
    render(<SigninForm />);
    let passwordField = screen.getByPlaceholderText(/password/i);

    await userEvent.type(passwordField, 'aaaaaaa213');
    await userEvent.tab();
    const errorMsg = screen.getByText(/password/i);

    expect(errorMsg).toBeInTheDocument();
  });

  test("password field should be shown error message, when value didn't contain at least one number", async () => {
    render(<SigninForm />);
    let passwordField = screen.getByPlaceholderText(/password/i);
    
    await userEvent.type(passwordField, 'Abcdrf');
    await userEvent.tab();
    const errorMsg = screen.getByText(/password/i);

    expect(errorMsg).toBeInTheDocument();
  });

  test("password field should be shown error message, when value didn't contain at least one letter in lower case", async () => {
    render(<SigninForm />);
    let passwordField = screen.getByPlaceholderText(/password/i);

    await userEvent.type(passwordField, 'AAAA123');
    await userEvent.tab();
    const errorMsg = screen.getByText(/password/i);

    expect(errorMsg).toBeInTheDocument();
  });
});

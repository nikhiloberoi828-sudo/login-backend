const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password && password.length >= 8;
};

const validateName = (name) => {
  return name && name.trim().length >= 2;
};

const validateSignupInput = (name, email, password) => {
  const errors = [];

  if (!validateName(name)) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!validateEmail(email)) {
    errors.push('Invalid email format');
  }

  if (!validatePassword(password)) {
    errors.push('Password must be at least 8 characters long');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

const validateLoginInput = (email, password) => {
  const errors = [];

  if (!email || !email.trim()) {
    errors.push('Email is required');
  }

  if (!password || !password.trim()) {
    errors.push('Password is required');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

module.exports = {
  validateSignupInput,
  validateLoginInput
};
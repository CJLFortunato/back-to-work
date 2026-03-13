export const checkPasswordsMatch = (password: string, password2: string): string => {
    if (!password || !password2) return 'Please fill all fields';
    if (password !== password2) return 'Passwords do not match';
    return '';
};
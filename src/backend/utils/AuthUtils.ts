import bcrypt from 'bcrypt';

class AuthUtils {
    static async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }
}

export default AuthUtils;
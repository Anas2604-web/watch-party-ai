export const ValidateData = (userName, email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (userName && userName.length < 3) {
        return { valid: false, message: "Username must be at least 3 characters long." };
    }
    
    if (!emailRegex.test(email)) {
        return { valid: false, message: "Invalid email format." };
    }
    
    if (!passwordRegex.test(password)) {
        return { valid: false, message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character." };
    }
    
    return { valid: true };
} 

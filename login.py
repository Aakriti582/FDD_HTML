import hashlib
import getpass
import re

# Simulated database: {username: hashed_password}
USER_DB = {
    "admin": "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"  # password: "AdminPassword123!"
}

def validate_username(username):
    """
    Validation: 3-20 chars, alphanumeric only.
    """
    if not (3 <= len(username) <= 20):
        return False, "Username must be between 3 and 20 characters."
    if not username.isalnum():
        return False, "Username must be alphanumeric (no spaces/symbols)."
    return True, ""

def validate_password(password):
    """
    Validation: Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char.
    """
    if len(password) < 8:
        return False, "Password must be at least 8 characters long."
    if not re.search(r"[A-Z]", password):
        return False, "Password must contain at least one uppercase letter."
    if not re.search(r"[a-z]", password):
        return False, "Password must contain at least one lowercase letter."
    if not re.search(r"\d", password):
        return False, "Password must contain at least one digit."
    if not re.search(r"[ !@#$%^&*(),.?\":{}|<>]", password):
        return False, "Password must contain at least one special character."
    return True, ""

def hash_password(password):
    """SHA-256 hashing for secure comparison."""
    return hashlib.sha256(password.encode()).hexdigest()

def login_system():
    print("--- Secure Login System ---")
    
    # 1. Username Input & Validation
    username = input("Username: ").strip()
    is_valid_user, user_msg = validate_username(username)
    if not is_valid_user:
        print(f"Validation Error: {user_msg}")
        return

    # 2. Password Input & Validation
    # getpass hides characters as you type in most terminals
    password = getpass.getpass("Password: ")
    is_valid_pass, pass_msg = validate_password(password)
    if not is_valid_pass:
        print(f"Validation Error: {pass_msg}")
        return

    # 3. Authentication
    hashed_input = hash_password(password)
    
    if username in USER_DB and USER_DB[username] == hashed_input:
        print(f"\n[SUCCESS] Welcome back, {username}!")
    else:
        print("\n[ERROR] Invalid username or password.")

if __name__ == "__main__":
    login_system()
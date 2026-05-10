import sys
import time

def slow_print(text, speed=0.03):
    """Adds a smooth text flow for a better user experience."""
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(speed)
    print()

def calculate(n1, n2, operator):
    """
    Logic engine: Performs arithmetic based on the operator.
    Returns the result or an error message.
    """
    if operator == '+':
        return n1 + n2
    elif operator == '-':
        return n1 - n2
    elif operator == '*':
        return n1 * n2
    elif operator == '/':
        # Logical check to prevent ZeroDivisionError
        if n2 == 0:
            return "Error: Cannot divide by zero."
        return n1 / n2
    else:
        return "Error: Invalid operator."

def start_calculator():
    slow_print("--- ROBUST PYTHON CALCULATOR ---", 0.05)
    
    while True:
        try:
            # 1. Input and Type Conversion
            num1 = float(input("\nEnter first number: "))
            op = input("Enter operator (+, -, *, /): ").strip()
            num2 = float(input("Enter second number: "))

            # 2. Processing Logic
            result = calculate(num1, num2, op)

            # 3. Output with Conditional Formatting
            if isinstance(result, str):
                slow_print(result)
            else:
                slow_print(f"Result: {num1} {op} {num2} = {result}")

        except ValueError:
            # This catches cases where the user types letters instead of numbers
            slow_print("Invalid input! Please enter numerical values.")

        # 4. Continuation Logic
        choice = input("\nPerform another calculation? (y/n): ").lower()
        if choice != 'y':
            slow_print("Closing calculator. Have a great day!")
            break

if __name__ == "__main__":
    start_calculator()
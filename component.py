# Collect marks from the user
marks_obtained = float(input("Enter the marks obtained (out of 100): "))

# Define the maximum possible marks
max_marks = 100

# Calculate the percentage scaled to 30%
# Formula: (Obtained / Total) * Weight
weighted_score = (marks_obtained / max_marks) * 30

# Display the results
print(f"\nOriginal Marks: {marks_obtained}/{max_marks}")
print(f"Weighted Score (30%): {weighted_score:.2f}%")
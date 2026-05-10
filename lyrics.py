import time
import sys

def get_lyrics_data():
    """Returns the structured lyrics of 'Style' by Taylor Swift."""
    return [
        ("Verse 1", [
            "Midnight",
            "You come and pick me up, no headlights",
            "Long drive",
            "Could feel just like a cup of coffee"
        ]),
        ("Pre-Chorus", [
            "You got that James Dean daydream look in your eye",
            "And I got that red lip classic thing that you like"
        ]),
        ("Chorus", [
            "You got that long hair, slicked back, white T-shirt",
            "And I got that good girl faith and a tight little skirt",
            "Cause we never go out of style, we never go out of style"
        ])
    ]

def type_text(text, delay=0.04):
    """
    Prints strings character by character to create a typing animation.
    """
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(delay)
    print()  # Move to the next line once finished

def display_song(lyrics_structure, animate=True):
    """
    Loops through sections and lines with conditional animation.
    """
    print("--- STYLE by Taylor Swift ---\n")
    
    for section, lines in lyrics_structure:
        # Print section header without animation for clarity
        print(f"[{section.upper()}]")
        
        for line in lines:
            if animate:
                type_text(line)
            else:
                print(line)
        
        time.sleep(0.5)  # Slight pause between sections
        print("")

def main():
    style_lyrics = get_lyrics_data()
    
    # Toggle 'animate' to False if you want an instant print
    display_song(style_lyrics, animate=True)

if __name__ == "__main__":
    main()
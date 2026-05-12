import datetime

class SocialFeed:
    def __init__(self):
        # We store posts as a list of dictionaries to keep metadata together
        self.posts = []

    def add_post(self):
        print("\n--- Create a New Post ---")
        content = input("What's on your mind? ")
        
        if content.strip() == "":
            print("(!) Error: Post cannot be empty.")
            return

        # Creating the post object with a timestamp
        post = {
            "content": content,
            "timestamp": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }
        
        self.posts.append(post)
        print("Successfully posted to your feed!")

    def display_feed(self):
        print("\n" + "="*30)
        print("HOME PAGE / FEED")
        print("="*30)
        
        if not self.posts:
            print("Your feed is empty. Start by posting something!")
        else:
            # Displaying posts in reverse (newest first)
            for post in reversed(self.posts):
                print(f"[{post['timestamp']}]")
                print(f"> {post['content']}")
                print("-" * 20)
        
        input("\nPress Enter to return to the menu...")

def main():
    app = SocialFeed()
    
    while True:
        print("\n--- CLI SOCIAL MEDIA ---")
        print("1. View Home Page")
        print("2. Add New Post")
        print("3. Exit")
        
        choice = input("Select an option (1-3): ")

        if choice == '1':
            app.display_feed()
        elif choice == '2':
            app.add_post()
        elif choice == '3':
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
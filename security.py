username = input("Enter Username: ")

def valid_user():
    if len(username) > 10:
        print("Username must be less than 10 characters.")

    elif "<" in username or ">" in username:
        print("'<' or '>' not allowed in username.")

    elif not username.isalnum():
        print("Username must be alphanumeic.")
    else:
        print("Valid user as far as I'm concerned.")

valid_user()
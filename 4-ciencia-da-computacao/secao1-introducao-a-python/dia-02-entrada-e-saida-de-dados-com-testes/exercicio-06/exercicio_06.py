def verify_user(user):
    if not user[0].isalpha():
        return False

    for char in user:
        if (
            not char.isalpha()
            and not char.isdigit()
            and not char == "-"
            and not char == "_"
        ):
            return False
    return True


def verify_website(website):
    for char in website:
        if not char.isalpha() and not char.isdigit():
            return False
    return True


def verify_extension(extension):
    if len(extension) > 3:
        return False
    return True


def verify_email(email):
    try:
        split_at = email.split("@")
        split_dot = split_at[1].split(".")
        split_at.pop(1)
        user, website, extension = [*split_at, *split_dot]

        if (
            not verify_user(user)
            or not verify_website(website)
            or not verify_extension(extension)
        ):
            raise ValueError("Email Inválido")

    except IndexError:
        raise ValueError("Email Inválido")
    except ValueError:
        raise ValueError("Email Inválido")


verify_email("paulo8-_@gmail.com")

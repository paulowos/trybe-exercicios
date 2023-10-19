import pytest
from exercicio_06 import verify_email

ERROR_MESSAGE = "Email Inválido"


def test_username_can_only_contain_letters():
    assert verify_email("aaaa@nomewebsite.ext") is None


def test_username_can_contain_letters_and_digits():
    assert verify_email("a1993@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_and_dashes():
    assert verify_email("aa-a@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert verify_email("a_a1a-a@nomewebsite.ext") is None


def test_username_should_starts_with_letter():
    assert verify_email("a@nomewebsite.ext") is None


def test_username_when_doesnt_start_with_letter_raise_exception():
    with pytest.raises(ValueError, match=ERROR_MESSAGE):
        verify_email("1@nomewebsite.ext")


def test_username_is_invalid_raise_exception():
    with pytest.raises(ValueError, match=ERROR_MESSAGE):
        verify_email("a%a@nomewebsite.ext")


def test_website_contain_only_letters_and_digits():
    assert verify_email("abc@website123.com") is None


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError, match=ERROR_MESSAGE):
        verify_email("abc@website!123.com")


def test_extension_should_contain_only_three_chars():
    assert verify_email("abc@website123.com") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError, match=ERROR_MESSAGE):
        verify_email("abc@website123.pyth")

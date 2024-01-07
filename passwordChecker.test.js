const { checkPassword } = require("./passwordChecker");
const { describe, test } = require("node:test");
const assert = require("node:assert");

describe("checkPassword", () => {
  const sut = checkPassword;

  test("throws an error if password is not a string", () => {
    assert.throws(() => sut(1), Error); // throw error object
  });

  test("throws an error if password is not a string and checks error message", () => {
    assert.throws(() => sut(1), { message: "Password must be a string" });
  });

  test("throws an error if password is less than 8 characters", () => {
    assert.throws(() => sut("abc"), Error, "Password must be at least 8 characters");
  });

  test("throws an error if password is more than 20 characters", () => {
    assert.throws(() => sut("abc".repeat(7)), Error, "Password must be less than 20 characters");
  });

  test("throws an error if password does not contain a lowercase letter", () => {
    assert.throws(() => sut("ABC123!@#"), Error, "Password must contain a lowercase letter");
  });

  test("throws an error if password does not contain an uppercase letter", () => {
    assert.throws(() => sut("abc123!@#"), Error, "Password must contain an uppercase letter");
  });

  test("throws an error if password does not contain a number", () => {
    assert.throws(() => sut("abcABC!@#"), Error, "Password must contain a number");
  });

  test("throws an error if password does not contain a special character", () => {
    assert.throws(() => sut("abcABC123"), Error, "Password must contain a special character");
  });

  test("throws an error if password contains the !", () => {
    assert.throws(() => sut("abcABC123!"), Error, "Password must contain a special character (not !)");
  });

  test("does not throw an error if password meets all criteria", () => {
    assert.doesNotThrow(() => sut("abcABC123@#"));
  });
});

import React from "react";
import { shallow } from "enzyme";
import { isRequired, isEmail, minLength, maxLength } from "./Validations";

describe("isRequired validation", () => {
  test("should accept required string without error", () => {
    const error = isRequired("test");
    expect(error).toBe(null);
  });

  test("should give error to check required for null", () => {
    const error = isRequired(null);
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should give error to check required for undefined", () => {
    const error = isRequired(undefined);
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should give error to check required for an empty string", () => {
    const error = isRequired("");
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });
});

describe("isEmail validation", () => {
  test("should give error to check email for invalid email string", () => {
    const error = isEmail("fdtghth");
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should accept to check email for null", () => {
    const error = isEmail(null);
    expect(error).toBe(null);
  });

  test("should accept to check email for undefined", () => {
    const error = isEmail(undefined);
    expect(error).toBe(null);
  });

  test("should accept to check email for an empty string", () => {
    const error = isEmail("");
    expect(error).toBe(null);
  });

  test("should accept to check email for a error email", () => {
    const error = isEmail("test@test.de");
    expect(error).toBe(null);
  });

  test("should give error to check email for invalid domain ending", () => {
    const error = isEmail("test@test.d");
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should give error to check email for invalid domain ending chars", () => {
    const error = isEmail("test@test.de.");
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should give error to check email for missing email praefix", () => {
    const error = isEmail("@test.de");
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should give error to check email for double @", () => {
    const error = isEmail("test@@test.de");
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });
});

describe("minLength validation", () => {
  test("should give error to check minimum characters of 3 for empty string", () => {
    const error = minLength(3)("");
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should give error to check minimum characters of 3 for null", () => {
    const error = minLength(3)(null);
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should give error to check minimum characters of 3 for undefined", () => {
    const error = minLength(3)(undefined);
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should give error to check minimum characters of 3 for string with only 2 characters", () => {
    const error = minLength(3)("ab");
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should give error to check minimum characters of 6 for string with only 3 characters", () => {
    const error = minLength(6)("abb");
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should give error to check minimum characters of 0 for empty string", () => {
    const error = minLength(0)("");
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should give error to check minimum characters of -10 for empty string", () => {
    const error = minLength(-10)("");
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });

  test("should accept check minimum characters of 4 for test", () => {
    const error = minLength(4)("test");
    expect(error).toBe(null);
  });

  test("should accept check minimum characters of 3 for test", () => {
    const error = minLength(3)("test");
    expect(error).toBe(null);
  });
});

describe("maxLength validation", () => {
  test("should accept check maximum characters of 3 for empty string", () => {
    const error = maxLength(3)("");
    expect(error).toBe(null);
  });

  test("should accept check maximum characters of 3 for null", () => {
    const error = maxLength(3)(null);
    expect(error).toBe(null);
  });

  test("should accept check maximum  characters of 3 for undefined", () => {
    const error = maxLength(3)(undefined);
    expect(error).toBe(null);
  });

  test("should accept check maximum characters of 3 for string with only 2 characters", () => {
    const error = maxLength(3)("ab");
    expect(error).toBe(null);
  });

  test("should accept check maximum  characters of 6 for string with only 3 characters", () => {
    const error = maxLength(6)("abb");
    expect(error).toBe(null);
  });

  test("should accept check maxmium characters of 0 for empty string", () => {
    const error = maxLength(0)("");
    expect(error).toBe(null);
  });

  test("should accept check maxmium characters of -10 for empty string", () => {
    const error = maxLength(-10)("");
    expect(error).toBe(null);
  });

  test("should accept check maxmium characters of 4 for test", () => {
    const error = maxLength(4)("test");
    expect(error).toBe(null);
  });

  test("should give error to check maxmium characters of 3 for test", () => {
    const error = maxLength(3)("test");
    expect(error).toEqual(expect.any(String));
    expect(error.length).toBeGreaterThan(0);
  });
});

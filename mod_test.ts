import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { check } from "./mod.ts";

Deno.test("true case", () => {
  assertEquals(check("abc”def"), true);
});

Deno.test("false case", () => {
  assertEquals(check("abcdef"), false);
});

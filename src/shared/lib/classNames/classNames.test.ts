import { classNames } from "./classNames";

describe("classNames", () => {
  test("put all classes", () => {
    expect(
      classNames("someClass", { hovered: true }, ["someAdditionalClass"])
    ).toBe("someClass someAdditionalClass hovered");
  });

  test("put mods with false value", () => {
    expect(
      classNames("someClass", { hovered: true, dark: false, light: true }, [
        "someAdditionalClass",
      ])
    ).toBe("someClass someAdditionalClass hovered light");
  });

  test("put classes without mods", () => {
    expect(classNames("someClass", {}, ["someAdditionalClass"])).toBe(
      "someClass someAdditionalClass"
    );
  });

  test("put classes without cls", () => {
    expect(classNames("", { hovered: true }, ["someAdditionalClass"])).toBe(
      "someAdditionalClass hovered"
    );
  });

  test("put classes only with cls", () => {
    expect(classNames("someClass", {}, [])).toBe("someClass");
  });
});

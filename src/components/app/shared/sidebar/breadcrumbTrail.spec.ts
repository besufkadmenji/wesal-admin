import { Store, Users } from "lucide-react";
import { describe, expect, it } from "vitest";
import { breadcrumbTrail } from "./breadcrumbTrail";
import type { NavSection } from "./useNavSections";

const sections: NavSection[] = [
  {
    label: "People",
    items: [
      {
        kind: "link",
        href: "/users",
        label: "Users",
        Icon: Users,
        visible: true,
      },
      {
        kind: "group",
        label: "Providers Management",
        Icon: Store,
        visible: true,
        options: [
          { href: "/providers/requests", label: "Join requests" },
          { href: "/providers", label: "Providers Management" },
          { href: "/providers/e-contracts", label: "E-contracts" },
        ],
      },
    ],
  },
];
const labels = { home: "Home", details: "Details", add: "Add", edit: "Edit" };
const trail = (path: string, lang = "en") =>
  breadcrumbTrail(path, lang, sections, labels);

describe("breadcrumbTrail (UI-4)", () => {
  it("is empty on the dashboard and unknown pages", () => {
    expect(trail("/en/dashboard")).toEqual([]);
    expect(trail("/en/settings")).toEqual([]);
  });

  it("ends a list page on the menu item", () => {
    expect(trail("/en/users")).toEqual([
      { label: "Home", href: "/dashboard" },
      { label: "Users" },
    ]);
  });

  it("adds Details, Add and Edit below the list", () => {
    expect(trail("/ar/users/u1", "ar")).toEqual([
      { label: "Home", href: "/dashboard" },
      { label: "Users", href: "/users" },
      { label: "Details" },
    ]);
    expect(trail("/en/users/u1/edit").slice(-2)).toEqual([
      { label: "Details", href: "/users/u1" },
      { label: "Edit" },
    ]);
    expect(trail("/en/users/add").at(-1)).toEqual({ label: "Add" });
  });

  it("names the group and picks the longest match", () => {
    expect(trail("/en/providers/e-contracts/c1")).toEqual([
      { label: "Home", href: "/dashboard" },
      { label: "Providers Management" },
      { label: "E-contracts", href: "/providers/e-contracts" },
      { label: "Details" },
    ]);
  });

  it("doesn't repeat a group whose option has the same name", () => {
    expect(trail("/en/providers/p1")).toEqual([
      { label: "Home", href: "/dashboard" },
      { label: "Providers Management", href: "/providers" },
      { label: "Details" },
    ]);
  });
});

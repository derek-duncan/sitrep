defmodule Sitrep.MemberTest do
  use Sitrep.ModelCase

  alias Sitrep.Member

  @valid_attrs %{email: "some content", first_name: "some content", last_name: "some content", phone: 42, timezone: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Member.changeset(%Member{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Member.changeset(%Member{}, @invalid_attrs)
    refute changeset.valid?
  end
end

defmodule Sitrep.StatusMessageTest do
  use Sitrep.ModelCase

  alias Sitrep.StatusMessage

  @valid_attrs %{message: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = StatusMessage.changeset(%StatusMessage{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = StatusMessage.changeset(%StatusMessage{}, @invalid_attrs)
    refute changeset.valid?
  end
end

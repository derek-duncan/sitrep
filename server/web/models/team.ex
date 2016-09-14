defmodule Sitrep.Team do
  use Sitrep.Web, :model

  schema "teams" do
    field :name, :string

    has_many :members, Sitrep.Member

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name])
    |> validate_required([:name])
  end
end

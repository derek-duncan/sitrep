defmodule Sitrep.Member do
  use Sitrep.Web, :model

  schema "members" do
    field :first_name, :string
    field :last_name, :string
    field :email, :string
    field :timezone, :string
    field :phone, :string
    belongs_to :team, Sitrep.Team

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:first_name, :last_name, :email, :timezone, :phone])
    |> validate_required([:first_name, :last_name, :email, :timezone, :phone])
  end

  defimpl Poison.Encoder, for: Sitrep.Member do
    def encode(model, opts) do
      model
      |> Map.take([:first_name, :last_name, :email, :timezone, :phone])
      |> Poison.Encoder.encode(opts)
    end
  end
end

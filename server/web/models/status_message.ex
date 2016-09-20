defmodule Sitrep.StatusMessage do
  use Sitrep.Web, :model

  schema "status_messages" do
    field :message, :string
    belongs_to :member, Sitrep.Member

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:message])
    |> validate_required([:message])
  end

  defimpl Poison.Encoder, for: Sitrep.StatusMessage do
    def encode(model, opts) do
      model
      |> Map.take([:message, :id, :inserted_at, :updated_at])
      |> Poison.Encoder.encode(opts)
    end
  end
end

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
end

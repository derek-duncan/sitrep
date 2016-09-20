defmodule Sitrep.Repo.Migrations.CreateStatusMessage do
  use Ecto.Migration

  def change do
    create table(:status_messages) do
      add :message, :string
      add :member_id, references(:members, on_delete: :nothing)

      timestamps()
    end
    create index(:status_messages, [:member_id])

  end
end

defmodule Sitrep.Repo.Migrations.CreateMember do
  use Ecto.Migration

  def change do
    create table(:members) do
      add :first_name, :string
      add :last_name, :string
      add :email, :string
      add :timezone, :string
      add :phone, :string
      add :team_id, references(:teams, on_delete: :nothing)

      timestamps()
    end
    create index(:members, [:team_id])

  end
end

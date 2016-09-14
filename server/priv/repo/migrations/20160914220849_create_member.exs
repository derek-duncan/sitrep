defmodule Sitrep.Repo.Migrations.CreateMember do
  use Ecto.Migration

  def change do
    create table(:members) do
      add :first_name, :string
      add :last_name, :string
      add :email, :string
      add :timezone, :string
      add :phone, :integer

      timestamps()
    end

  end
end

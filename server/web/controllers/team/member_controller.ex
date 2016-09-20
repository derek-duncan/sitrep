defmodule Sitrep.Team.MemberController do
  use Sitrep.Web, :controller

  alias Sitrep.Member

  plug :assign_team

  def index(conn, _params) do
    members = conn.assigns[:team]
    |> assoc(:members)
    |> Repo.all

    render(conn, "index.json", members: members)
  end

  def create(conn, %{"member" => member_params, "team_id" => team_id}) do
    changeset = conn.assigns[:team]
    |> build_assoc(:members)
    |> Member.changeset(member_params)

    case Repo.insert(changeset) do
      {:ok, member} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", team_member_path(conn, :show, team_id, member))
        |> render("show.json", member: member)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Sitrep.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    member = conn.assigns[:team]
		|> assoc(:members)
		|> Repo.get!(id)

    render(conn, "show.json", member: member)
  end

  def update(conn, %{"id" => id, "member" => member_params}) do
    member = conn.assigns[:team]
		|> assoc(:members)
		|> Repo.get!(id)

    changeset = Member.changeset(member, member_params)

    case Repo.update(changeset) do
      {:ok, member} ->
        render(conn, "show.json", member: member)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Sitrep.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    member = conn.assigns[:team]
		|> assoc(:members)
		|> Repo.get!(id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(member)

    send_resp(conn, :no_content, "")
  end

  defp assign_team(conn, _opts) do
    case conn.params do
      %{"team_id" => team_id} ->
        team = Repo.get(Sitrep.Team, team_id)
        assign(conn, :team, team)
      _ ->
        conn
    end
  end
end

defmodule Sitrep.MemberController do
  use Sitrep.Web, :controller

  alias Sitrep.Member

  def index(conn, _params, team) do
    members = Repo.all(assoc(team, :members))
    render(conn, "index.json", members: members)
  end

  def create(conn, %{"member" => member_params}, team) do
    changeset = team |> build_assoc(:team) |> Member.changeset(member_params)

    case Repo.insert(changeset) do
      {:ok, member} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", team_member_path(conn, :show, team, member))
        |> render("show.json", member: member)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Sitrep.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}, team) do
    member = Repo.get!(assoc(team, :members), id)
    render(conn, "show.json", member: member)
  end

  def update(conn, %{"id" => id, "member" => member_params}, team) do
    member = Repo.get!(assoc(team, :members), id)
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

  def delete(conn, %{"id" => id}, team) do
    member = Repo.get!(assoc(team, :members), id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(member)

    send_resp(conn, :no_content, "")
  end
end

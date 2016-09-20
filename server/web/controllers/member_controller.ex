defmodule Sitrep.MemberController do
  use Sitrep.Web, :controller

  alias Sitrep.Member
  alias Sitrep.QueryFilter

  def index(conn, params) do
    members = Member
    |> QueryFilter.filter(%Member{}, params, [:timezone])
    |> Repo.all
    |> Repo.preload(:status_messages)

    render(conn, "index.json", members: members)
  end

  def show(conn, %{"id" => id}) do
    member = Member
    |> Repo.get!(id)
    |> Repo.preload(:status_messages)

    render(conn, "show.json", member: member)
  end
end

defmodule Sitrep.MemberController do
  use Sitrep.Web, :controller

  alias Sitrep.Member
  alias Sitrep.QueryFilter

  def index(conn, params) do
    members = Member
    |> QueryFilter.filter(%Member{}, params, [:timezone])
    |> Repo.all

    render(conn, "index.json", members: members)
  end

  def show(conn, %{"id" => id}) do
    member = Repo.get!(Member, id)
    render(conn, "show.json", member: member)
  end
end

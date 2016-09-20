defmodule Sitrep.MemberController do
  use Sitrep.Web, :controller

  alias Sitrep.Member

  def index(conn, _params) do
    members = Repo.all(Member)
    render(conn, "index.json", members: members)
  end

  def show(conn, %{"id" => id}) do
    member = Repo.get!(Member, id)
    render(conn, "show.json", member: member)
  end
end

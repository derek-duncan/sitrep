defmodule Sitrep.MemberView do
  use Sitrep.Web, :view

  def render("index.json", %{members: members}) do
    %{data: render_many(members, Sitrep.MemberView, "member.json")}
  end

  def render("show.json", %{member: member}) do
    %{data: render_one(member, Sitrep.MemberView, "member.json")}
  end

  def render("member.json", %{member: member}) do
    %{id: member.id,
      first_name: member.first_name,
      last_name: member.last_name,
      email: member.email,
      timezone: member.timezone,
      phone: member.phone}
  end
end

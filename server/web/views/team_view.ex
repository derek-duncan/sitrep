defmodule Sitrep.TeamView do
  use Sitrep.Web, :view

  def render("index.json", %{teams: teams}) do
    %{data: render_many(teams, Sitrep.TeamView, "team.json")}
  end

  def render("show.json", %{team: team}) do
    %{data: render_one(team, Sitrep.TeamView, "team.json")}
  end

  def render("team.json", %{team: team}) do
    %{id: team.id,
      name: team.name,
      members: team.members}
  end
end

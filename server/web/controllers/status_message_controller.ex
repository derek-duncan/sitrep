defmodule Sitrep.StatusMessageController do
  use Sitrep.Web, :controller

  alias Sitrep.StatusMessage
  alias Sitrep.QueryFilter

  plug :assign_member

  def index(conn, params) do
    status_messages = conn.assigns[:member]
    |> assoc(:status_messages)
    |> QueryFilter.filter(%StatusMessage{}, params, [:inserted_at])
    |> Repo.all

    render(conn, "index.json", status_messages: status_messages)
  end

  def create(conn, %{"status_message" => status_message_params, "member_id" => member_id}) do
    changeset = conn.assigns[:member]
    |> build_assoc(:status_messages)
    |> StatusMessage.changeset(status_message_params)

    case Repo.insert(changeset) do
      {:ok, status_message} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", member_status_message_path(conn, :show, member_id, status_message))
        |> render("show.json", status_message: status_message)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Sitrep.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    status_message = conn.assigns[:member]
    |> assoc(:status_messages)
    |> Repo.get!(id)

    render(conn, "show.json", status_message: status_message)
  end

  def update(conn, %{"id" => id, "status_message" => status_message_params}) do
    changeset = conn.assigns[:member]
    |> build_assoc(:status_messages)
    |> StatusMessage.changeset(status_message_params)

    case Repo.update(changeset) do
      {:ok, status_message} ->
        render(conn, "show.json", status_message: status_message)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Sitrep.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    status_message = conn.assigns[:member]
    |> assoc(:status_messages)
    |> Repo.get!(id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(status_message)

    send_resp(conn, :no_content, "")
  end

  defp assign_member(conn, _opts) do
    case conn.params do
      %{"member_id" => member_id} ->
        member = Repo.get(Sitrep.Member, member_id)
        assign(conn, :member, member)
      _ ->
        conn
    end
  end
end

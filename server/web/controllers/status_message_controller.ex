defmodule Sitrep.StatusMessageController do
  use Sitrep.Web, :controller

  alias Sitrep.StatusMessage

  def index(conn, _params) do
    status_messages = Repo.all(StatusMessage)
    render(conn, "index.json", status_messages: status_messages)
  end

  def create(conn, %{"status_message" => status_message_params}) do
    changeset = StatusMessage.changeset(%StatusMessage{}, status_message_params)

    case Repo.insert(changeset) do
      {:ok, status_message} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", member_status_message_path(conn, :show, status_message))
        |> render("show.json", status_message: status_message)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Sitrep.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    status_message = Repo.get!(StatusMessage, id)
    render(conn, "show.json", status_message: status_message)
  end

  def update(conn, %{"id" => id, "status_message" => status_message_params}) do
    status_message = Repo.get!(StatusMessage, id)
    changeset = StatusMessage.changeset(status_message, status_message_params)

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
    status_message = Repo.get!(StatusMessage, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(status_message)

    send_resp(conn, :no_content, "")
  end
end

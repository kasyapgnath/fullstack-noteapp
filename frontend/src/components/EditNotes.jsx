import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/AxiosInstance"

function EditNotes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Load existing note
  const fetchNote = async () => {
    try {
      const res = await axiosInstance.get(`/notes/${id}/`);
      setTitle(res.data.title);
      setContent(res.data.content);
    } catch (err) {
      console.log("Error loading note:", err);
    }
  };

  useEffect(() => {
    fetchNote();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/notes/${id}/`, {
        title,
        content,
      });

      navigate("/dashboard");
    } catch (err) {
      console.log("Error updating note:", err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Edit Note</h1>

        <form onSubmit={handleUpdate}>
          <label className="block mb-3">
            <span className="text-gray-700">Title</span>
            <input
              type="text"
              className="mt-1 block w-full border px-3 py-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Content</span>
            <textarea
              className="mt-1 block w-full border px-3 py-2 rounded"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 mt-4 rounded hover:bg-teal-500"
          >
            Update Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditNotes;
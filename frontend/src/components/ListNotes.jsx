import { Edit, Trash2, Plus } from "lucide-react";
import { use, useEffect, useState } from "react";
import axiosInstance from "../api/AxiosInstance";

function ListNotes() {
  const[notes,setNotes]=useState([]);
  const loadNotes=async()=>{
    try {
      const response = await axiosInstance.get("/notes/");
      setNotes(response.data);
    } catch (err) {
      console.log("Error fetching notes:",err);
    }
  };
  useEffect(() => {
    loadNotes();
  }, []);
  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await axiosInstance.delete(`/notes/${id}/`);
        loadNotes();
      } catch (err) {
        console.log("Error deleting note:", err);
      }
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Add Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Notes</h1>
        <a href="/addNote"
  className="flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition">
  <Plus className="w-5 h-5" />
  <span>Add Note</span>
</a>
        </div>

        {/* Notes Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Sl No
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Content
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {notes.map((note, index) => (
                  <tr key={note.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm text-gray-800">{index + 1}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{note.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{note.content}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center space-x-3">
                        <a href= {`/editNote/${note.id}`}className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                        <Edit className="w-5 h-5" /></a>
                        <button onClick={() => handleDelete(note.id)}
                         className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                           <Trash2 className="w-5 h-5" /></button>
                      </div>
                    </td>
                  </tr>
                ))}

                {notes.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-6 text-gray-500">
                      No notes found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListNotes;
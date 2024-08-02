import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { getBooks, postBook } from "../../services/api";

type Book = {
  title: string;
};

const Dashboard = () => {
  const [books, setBooks] = React.useState<Book[]>([]);
  const { user, token, handleLogout } = useAuth();
  const [title, setTitle] = React.useState("");

  const request = async () => {
    const data = await getBooks();
    if (data?.data) {
      setBooks(data.data);
    }
  };

  const handlePostBook = async () => {
    if (!token) return;
    await postBook(title, token);
    setTitle("");
    request();
  };

  React.useEffect(() => {
    request();
  }, []);

  return (
    <div className="container">
      <div>
        <h1>Welcome! {user?.name}</h1>
        <div>
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          <button onClick={handlePostBook}>Cadastrar livro</button>
        </div>
        <p>Livros cadastrados: </p>
        {books.length > 0 ? (
          books.map((book, index) => {
            return <p key={index}>{book.title}</p>;
          })
        ) : (
          <p>Sem livros cadastrados</p>
        )}
        <button className="btn-submit" onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

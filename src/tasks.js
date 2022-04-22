import "./App.css";
import "./modal.css";
import { useState } from "react";
import { Avv } from "./data.js";

export function Tasks() {
  const [modalActive1, setModalActive1] = useState(false);
  const [valueTitle, SetValueTitle] = useState("");
  const [valueContent, SetValueContent] = useState("");
  const [data, SetData] = useState([]);
  console.log(data);
  function Home() {
    return (
      <div className="container">
        <header>
          {" "}
          <h1>Блог</h1>{" "}
        </header>

        <div className="section_all_container">
          <Avv data={data} setModalActive1={setModalActive1} />
          <button
            className="button_plus"
            onClick={() => {
              setModalActive1(true);
            }}
          >
            +Добавить
          </button>

          <div
            className={modalActive1 ? "modal active" : "modal"}
            onClick={() => setModalActive1(false)}
          >
            <div
              className="modal_content"
              onClick={(elem) => elem.stopPropagation()}
            >
              <form>
                <input
                  type="text"
                  className="modal_input_title"
                  placeholder="Title"
                  maxlength="10"
                  onChange={(event) => SetValueTitle(event.target.value)}
                ></input>
                <input
                  type="text"
                  className="modal_input_content"
                  placeholder="Content"
                  onChange={(event) => SetValueContent(event.target.value)}
                ></input>
              </form>
              <div className="modal_button">
                <button
                  className="modal_button1"
                  onClick={() => setModalActive1(false)}
                >
                  Отмена
                </button>
                <button
                  className="modal_button2 "
                  onClick={() =>
                    SetData([
                      ...data,
                      {
                        id: data.length,
                        title: valueTitle,
                        post: valueContent,
                      },
                    ])
                  }
                >
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>{Home()}</div>
    </>
  );
}

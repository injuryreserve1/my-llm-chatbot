import Loader from "@/shared/ui/Loader/Loader";
import { usePostMessage } from "../../api/usePostMessage";
import { useState, type ChangeEvent, type FormEvent } from "react";
import "./SendMessageForm.css";

export default function SendMessageForm() {
  const [question, setQuestion] = useState<string>("");
  const { mutateAsync, isPending } = usePostMessage();

  const reset = () => {
    setQuestion("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutateAsync({ author: "пользователь", contents: question });

    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {isPending && <Loader />}

      <div className="action">
        <input
          className="input-textarea"
          name=""
          value={question}
          type="text"
          onChange={handleChange}
          placeholder="Напишите интересующий вас вопрос"
          disabled={isPending ? true : false}
        ></input>
        <button disabled={question.length == 0 ? true : false}>&#11157;</button>
      </div>
    </form>
  );
}

import "./Message.css";
import ReactMarkdown from "react-markdown";

interface Props {
  author: string;
  contents: string;
}

export function Message({ author, contents }: Props) {
  //my simple formatter func ->
  // const formattedText = contents
  //   .replace(/<\/?think>/g, '')
  //   .trim()
  //   .split('\n')
  //   .map((line, index) => (
  //     <span key={index}>
  //       {line}
  //       <br />
  //     </span>
  //   ))
  const formattedText = contents.replace(/<\/?think>/g, "");
  //console.log(formattedText)
  return (
    <fieldset
      className={`message ${author === "пользователь" ? "human" : "ai"}`}
    >
      <h4 className="role">{author}</h4>
      <div className="text">
        <span className="react-markdown">
          <ReactMarkdown>{formattedText}</ReactMarkdown>
        </span>
      </div>
    </fieldset>
  );
}
